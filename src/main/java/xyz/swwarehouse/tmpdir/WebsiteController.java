package xyz.swwarehouse.tmpdir;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
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
	private String FILE_UPLOAD_SERVICE_HOST;
	RestTemplate fileUploadClient = new RestTemplate();

	@Autowired
	Config config = new Config();

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String fileUploadForm(Model model) {
		model.addAttribute("config", config);
		return "fileupload";
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public String fileDownloadForm(@PathVariable String id, Model model) {
		FileInfo fileInfo = new FileInfo();
		fileInfo.setId(id);
		/* start tmp */
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.DATE, 2);
		fileInfo.setExpireTime(cal.getTime());
		model.addAttribute("fileinfo", fileInfo);
		/* end tmp */
		return "filedownload";
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
							return URLEncoder.encode(file.getOriginalFilename(), "utf-8");
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
		ResponseEntity<FileInfo> response = fileUploadClient.postForEntity("http://127.0.0.1:6000/", requestEntity,
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
