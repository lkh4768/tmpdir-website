package xyz.swwarehouse.tmpdir.util;

import javax.servlet.http.HttpServletRequest;

public class Util {
	static public String GetClientInfo(final HttpServletRequest req) {
		String addr = req.getHeader("X-FORWARDED-FOR");
		if (addr == null)
			addr = req.getRemoteAddr();
		return addr + ":" + req.getRemotePort();
	}
	
	static public String GetLocalInfo(final HttpServletRequest req) {
		return req.getLocalAddr() + ":" + req.getLocalPort();
	}
	
	static public String RequestInfoToString(final HttpServletRequest req) {
		return "Request " + req.getMethod() + " (" + GetClientInfo(req) + "->" + GetLocalInfo(req) + "), " + req.getRequestURL();
	}
}
