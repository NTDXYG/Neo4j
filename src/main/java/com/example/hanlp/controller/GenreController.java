package com.example.hanlp.controller;

import java.util.List;

import com.example.hanlp.node.Genre;
import com.example.hanlp.repository.GenreRepository;
import com.example.hanlp.result.ResponseMessage;
import com.example.hanlp.result.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/appleyk/genre")
public class GenreController {
	
	@Autowired
	GenreRepository genreRepository;
	

	/**
	 * 根据类型名查询Genre实体
	 * @param title
	 * @return
	 */
    @RequestMapping("/get")  
    public List<Genre> getGenres(@RequestParam(value="name") String name){
    	return genreRepository.findByName(name); 	
    }  
      
    /**
     * 创建一个电影类型节点
     * @param genre
     * @return
     */
    @PostMapping("/save")  
    public ResponseResult saveGenre(@RequestBody Genre genre){
    	genreRepository.save(genre);
    	return new ResponseResult(ResponseMessage.OK);
    }  
}
