package com.example.hanlp.controller;

import com.example.hanlp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@RestController
public class QuestionController {
	
	@Autowired
	QuestionService questService;
	
	@RequestMapping("/chat")
	public Map query(@RequestParam(value = "msg") String question) throws Exception {
		HashMap map = new HashMap();
		map.put("msg",questService.answer(question));
		map.put("ischatbot",1);
		return map;
	}
	
	@RequestMapping("/path")
	public void checkPath(){
		questService.showDictPath();
	}
}
