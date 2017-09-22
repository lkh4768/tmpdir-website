package xyz.swwarehouse.tmpdir;

import java.util.Date;

public class FileInfo {
	private String id;
	private String name;
	private Date submissionTime;
	private Date expireTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getSubmissionTime() {
		return submissionTime;
	}

	public void setSubmissionTime(Date submissionTime) {
		this.submissionTime = submissionTime;
	}

	public Date getExpireTime() {
		return expireTime;
	}

	public void setExpireTime(Date date) {
		this.expireTime = date;
	}
}
