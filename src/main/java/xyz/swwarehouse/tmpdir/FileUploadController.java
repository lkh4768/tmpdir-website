package xyz.swwarehouse.tmpdir;

import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class FileUploadController {
	private static final Logger logger = Logger.getLogger(FileUploadController.class);

	private RestTemplate fileUploadClient = new RestTemplate();
	@PostMapping("/")
	public String uploadFile(@RequestParam("file") MultipartFile file, Model model) {
		xyz.swwarehouse.tmpdir.File uploadedFile = fileUploadClient.postForObject("http://localhost:6000/", file, xyz.swwarehouse.tmpdir.File.class);
		return "uploadfile";
	}
}
