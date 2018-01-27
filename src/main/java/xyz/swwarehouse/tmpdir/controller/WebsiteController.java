package xyz.swwarehouse.tmpdir.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import xyz.swwarehouse.tmpdir.util.Util;
import xyz.swwarehouse.tmpdir.entity.FileConfig;
import xyz.swwarehouse.tmpdir.entity.FileInfo;

@Controller
public class WebsiteController {
	private static final Logger LOGGER = LoggerFactory.getLogger(WebsiteController.class);
	@Value("${tmpdir.file.upload-service.url}")
	private String fileUploadServiceHost;
	@Value("${tmpdir.file.download-service.url}")
	private String fileDownloadServiceHost;

	RestTemplate fileUploadClient = new RestTemplate();
	RestTemplate fileDownloadClient = new RestTemplate();

	@Autowired
	FileConfig fileConfig = new FileConfig();

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String fileUploadForm(HttpServletRequest req, Model model) {
		LOGGER.info("{}", Util.requestInfoToString(req));
		model.addAttribute("fileConfig", fileConfig);
		LOGGER.info("Response ({}->{}), View fileupload Page config({})", Util.getLocalInfo(req), Util.getClientInfo(req),
				fileConfig);
		return "fileupload";
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public String fileDownloadForm(HttpServletRequest req, @PathVariable String id, Model model) {
		LOGGER.info("{}", Util.requestInfoToString(req));
		FileInfo fileInfo = null;
		fileInfo = fileDownloadClient.getForObject(fileDownloadServiceHost + "file-info/" + id, FileInfo.class);
		model.addAttribute("fileinfo", fileInfo);

		LOGGER.info("Response ({}->{}), View filedownload Page fileInfo: {}", Util.getLocalInfo(req),
				Util.getClientInfo(req), fileInfo);
		return "filedownload";
	}

	@RequestMapping(value = "/file/{id}", method = RequestMethod.GET)
	public ResponseEntity<Resource> downloadFile(HttpServletRequest req, @PathVariable String id) throws IOException {
		LOGGER.info("{}", Util.requestInfoToString(req));
		ResponseEntity<Resource> response = fileDownloadClient.getForEntity(fileDownloadServiceHost + "file/" + id,
				Resource.class);
		LOGGER.info("Response ({}->{}), Download file{}", Util.getLocalInfo(req), Util.getClientInfo(req), id);
		return response;
	}

	@PostMapping("/")
	public ResponseEntity<FileInfo> uploadFile(MultipartHttpServletRequest req) {
		LOGGER.info("{}", Util.requestInfoToString(req));
		Iterator<String> itr = req.getFileNames();
		MultiValueMap<String, Object> files = new LinkedMultiValueMap<String, Object>();
		int i = 0;
		while (itr.hasNext()) {
			String uploadedFile = itr.next();
			MultipartFile file = req.getFile(uploadedFile);
			try {
				ByteArrayResource fileResource = new ByteArrayResource(file.getBytes()) {
					@Override
					public String getFilename() {
						try {
							return URLEncoder.encode(file.getOriginalFilename(), StandardCharsets.UTF_8.name());
						} catch (UnsupportedEncodingException e) {
							LOGGER.error("Failed encoding original filename", e);
						}
						return "";
					}
				};
				files.add("file" + i, fileResource);
				LOGGER.debug("Added uploding File {}", file.getOriginalFilename());
				i++;
			} catch (IOException e) {
				LOGGER.error("Failed parsing to fileResource from file", e);
			}
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<MultiValueMap<String, Object>>(files,
				headers);
		LOGGER.info("Request POST ({}->{}), Sending to FileUploadService({})", Util.getLocalInfo(req),
				fileUploadServiceHost, requestEntity);
		ResponseEntity<FileInfo> response = fileUploadClient.postForEntity(fileUploadServiceHost, requestEntity,
				FileInfo.class);
		if (response.getStatusCode() == HttpStatus.OK) {
			LOGGER.info("Response ({}->{}), Success Sending to FileUploadService({})", Util.getLocalInfo(req),
					Util.getClientInfo(req), response);
			FileInfo fileInfo = response.getBody();
			return new ResponseEntity<FileInfo>(fileInfo, HttpStatus.OK);
		}
		LOGGER.error("Response ({}->{}), Failed Sending to FileUploadService({})", Util.getLocalInfo(req),
				Util.getClientInfo(req), response);
		return response;
	}
}
