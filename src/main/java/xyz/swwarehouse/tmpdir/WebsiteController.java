package xyz.swwarehouse.tmpdir;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

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

@Controller
public class WebsiteController {
	@Value("${tmpdir.file-upload-service.host}")
	private String fileUploadServiceHost;
	@Value("${tmpdir.file-download-service.host}")
	private String fileDownloadServiceHost;

	RestTemplate fileUploadClient = new RestTemplate();
	RestTemplate fileDownloadClient = new RestTemplate();

	@Autowired
	Config config = new Config();

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String fileUploadForm(Model model) {
		model.addAttribute("config", config);
		return "fileupload";
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public String fileDownloadForm(@PathVariable String id, Model model) {
		FileInfo fileInfo = fileDownloadClient.getForObject(fileDownloadServiceHost + "file-info/" + id, FileInfo.class);
		model.addAttribute("fileinfo", fileInfo);
		return "filedownload";
	}

	@RequestMapping(value = "/file/{id}", method = RequestMethod.GET)
	public ResponseEntity<Resource> downloadFile(@PathVariable String id) throws IOException {
		ResponseEntity<Resource> response = fileDownloadClient.getForEntity(fileDownloadServiceHost + "file/" + id,
				Resource.class);
		return response;
	}

	@PostMapping("/")
	public ResponseEntity<FileInfo> uploadFile(MultipartHttpServletRequest request) {

		Iterator<String> itr = request.getFileNames();

		MultiValueMap<String, Object> files = new LinkedMultiValueMap<String, Object>();
		int i = 0;
		while (itr.hasNext()) {
			String uploadedFile = itr.next();
			MultipartFile file = request.getFile(uploadedFile);
			try {
				ByteArrayResource fileResource = new ByteArrayResource(file.getBytes()) {

					@Override
					public String getFilename() {
						try {
							return URLEncoder.encode(file.getOriginalFilename(), StandardCharsets.UTF_8.name());
						} catch (UnsupportedEncodingException e) {
							e.printStackTrace();
						}
						return "";
					}
				};
				files.add("file" + i, fileResource);
				i++;
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<MultiValueMap<String, Object>>(files,
				headers);
		ResponseEntity<FileInfo> response = fileUploadClient.postForEntity(fileUploadServiceHost, requestEntity,
				FileInfo.class);

		if (response.getStatusCode() == HttpStatus.OK && response != null && response.getBody() != null) {
			FileInfo fileInfo = response.getBody();
			System.out.println("fileinfo{ id: " + fileInfo.getId() + ", submissiontime: " + fileInfo.getSubmissionTime()
					+ ", expiretime:" + fileInfo.getExpireTime() + " }");
			return new ResponseEntity<FileInfo>(fileInfo, HttpStatus.OK);
		}

		System.out.println("Http Status Code: " + response.getStatusCodeValue());
		return response;
	}
}
