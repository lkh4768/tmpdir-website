package xyz.swwarehouse.tmpdir.entity;

import java.util.Date;

public class FileInfo {
	private String id;
	private Date submissionTime;
	private Date expireTime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
