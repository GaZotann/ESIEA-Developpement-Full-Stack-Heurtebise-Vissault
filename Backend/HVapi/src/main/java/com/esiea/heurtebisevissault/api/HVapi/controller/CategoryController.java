package com.esiea.heurtebisevissault.api.HVapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.esiea.heurtebisevissault.api.HVapi.model.Category;
import com.esiea.heurtebisevissault.api.HVapi.model.article;
import com.esiea.heurtebisevissault.api.HVapi.service.CategoryService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("")
	public Iterable<Category> getCategories(){
		return categoryService.getCategories();
	}

	/*@GetMapping("/{idCategory}/article")
	public Iterable<article> getarticles(@PathVariable(name = "idCategory") Long idCategory) {
		
		
		
		Category category = categoryService.getEntityCategory(idCategory).get();
		category.
		return articleService.getarticles();
	}*/
}
