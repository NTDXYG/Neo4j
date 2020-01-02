package com.example.hanlp.controller;

import java.util.List;

import com.example.hanlp.node.Person;
import com.example.hanlp.repository.PersonRepository;
import com.example.hanlp.result.ResponseMessage;
import com.example.hanlp.result.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/rest/appleyk/person")
public class PersonController {

	@Autowired
	PersonRepository personRepository;

	/**
	 * 根据演员名查询Person实体
	 * 
	 * @param title
	 * @return
	 */
	@RequestMapping("/get")
	public List<Person> getPersons(@RequestParam(value = "name") String name) {
		return personRepository.findByName(name);
	}

	/**
	 * 创建一个演员节点
	 * 
	 * @param genre
	 * @return
	 */
	@PostMapping("/save")
	public ResponseResult savePerson(@RequestBody Person person) {
		personRepository.save(person);
		return new ResponseResult(ResponseMessage.OK);
	}

	
}
