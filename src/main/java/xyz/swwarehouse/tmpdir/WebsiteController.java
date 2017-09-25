package xyz.swwarehouse.tmpdir;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class WebsiteController {
	@Value("${tmpdir.file-upload-service.host}")
	private String FILE_UPLOAD_SERVICE_HOST;
	RestTemplate fileUploadClient = new RestTemplate();

	@GetMapping("/")
	public String fileUploadForm(Model model) {
		FileInfo fileInfo = new FileInfo();
		fileInfo.setId("");
		fileInfo.setName("");
		fileInfo.setExpireTime(null);
		model.addAttribute("fileinfo", fileInfo);
		return "fileupload";
	}

	@PostMapping("/")
	public String uploadFile(@RequestParam("file") MultipartFile file, Model model) {
		MultiValueMap<String, Object> parts = new LinkedMultiValueMap<String, Object>();
		try {
			ByteArrayResource fileResource = new ByteArrayResource(file.getBytes()) {
				@Override
				public String getFilename() {
					return file.getOriginalFilename();
				}
			};
			parts.add("file", fileResource);
		} catch (IOException e) {
			e.printStackTrace();
		}

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.MULTIPART_FORM_DATA);

		HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<MultiValueMap<String, Object>>(parts,
				headers);
		ResponseEntity<FileInfo> response = fileUploadClient.postForEntity(FILE_UPLOAD_SERVICE_HOST, requestEntity,
				FileInfo.class);
		if (response != null && response.getBody() != null) {
			model.addAttribute("fileinfo", response.getBody());
			return "fileupload";
		}
		return "error";
	}
}
