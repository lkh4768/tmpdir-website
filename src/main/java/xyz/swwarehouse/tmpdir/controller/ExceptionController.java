package xyz.swwarehouse.tmpdir.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import xyz.swwarehouse.tmpdir.util.Util;

@ControllerAdvice
public class ExceptionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionController.class);

	@ExceptionHandler(Exception.class)
	public ModelAndView handleException(HttpServletRequest req, Exception e) {
		ModelAndView mav = new ModelAndView("error");
		int code = 500;
		String message = "Internal Server Error";
		mav.addObject("status", code);
		mav.addObject("error", message);
		LOGGER.error("Response ({}->{}), Excpetion({}) Code({}), message({})", Util.getLocalInfo(req), Util.getClientInfo(req),
				e.getClass().getCanonicalName(), code, message);
		return mav;
	}

	@ExceptionHandler(HttpClientErrorException.class)
	public ModelAndView handleHttpClientErrorException(HttpServletRequest req, HttpClientErrorException e)
			throws JsonProcessingException, IOException {
		ModelAndView mav = new ModelAndView("error");
		ObjectMapper om = new ObjectMapper();
		JsonNode jn = om.readTree(e.getResponseBodyAsString());
		mav.addObject("status", e.getRawStatusCode());
		mav.addObject("error", jn.get("message").asText());
		LOGGER.error("Response ({}->{}), Exception({}), Code({}), body({})", Util.getLocalInfo(req),
				Util.getClientInfo(req), e.getClass().getCanonicalName(), e.getRawStatusCode(), e.getResponseBodyAsString());
		return mav;
	}
}
