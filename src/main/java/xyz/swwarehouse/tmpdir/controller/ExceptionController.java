package xyz.swwarehouse.tmpdir.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice
public class ExceptionController {
	@ExceptionHandler(Exception.class)
	public ModelAndView handleError(HttpServletRequest req, Exception e) {
		ModelAndView mav = new ModelAndView("error");
		System.out.println("exception: " + e.getMessage());
		System.out.println("req status: " + (int) req.getAttribute("javax.servlet.error.status_code"));
		mav.addObject("status", 123);
		mav.addObject("error", e.getMessage());
		return mav;
	}
}
