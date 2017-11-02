package xyz.swwarehouse.tmpdir;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileConfig {
	@Value("${tmpdir.file.max-size-mb}")
	private String maxSize;

	@Value("${tmpdir.file.expire-term-day}")
	private String expireTerm;

	public String getMaxSize() {
		return maxSize;
	}

	public String getExpireTerm() {
		return expireTerm;
	}

	@Override
	public String toString() {
		return "maxFileSize: " + maxSize + ", fileExpireTerm: " + expireTerm;
	}
}