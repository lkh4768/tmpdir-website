package xyz.swwarehouse.tmpdir;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Config {
	@Value("${tmpdir.file-max-size-mb}")
	private String maxFileSize;

	@Value("${tmpdir.file-expire-term-day}")
	private String fileExpireTerm;

	public String getMaxFileSize() {
		return maxFileSize;
	}

	public String getFileExpireTerm() {
		return fileExpireTerm;
	}
}