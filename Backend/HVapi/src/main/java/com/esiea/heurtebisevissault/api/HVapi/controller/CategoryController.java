package com.esiea.heurtebisevissault.api.HVapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.esiea.heurtebisevissault.api.HVapi.model.Category;
import com.esiea.heurtebisevissault.api.HVapi.model.article;
import com.esiea.heurtebisevissault.api.HVapi.service.ArticleService;
import com.esiea.heurtebisevissault.api.HVapi.service.CategoryService;
import com.esiea.heurtebisevissault.api.HVapi.service.NotFoundException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	@Autowired
	private ArticleService articleService;
	
	@GetMapping("")
	public Iterable<Category> getCategories(){
		return categoryService.getCategories();
	}

	@GetMapping("/{idCategory}/article")
	public Iterable<article> getarticles(@PathVariable(name = "idCategory") Long idCategory) {
		
		
		
		Category category = categoryService.getEntityCategory(idCategory).get();
		return category.getarticles();
	}
	
	@PostMapping("/categorie")
	public Category createCategory(@RequestBody Category category) {
		return categoryService.save(category);
	}
	
	@PostMapping("/{idCategory}/{idarticle}")
    public void addarticleToCategory(
            @PathVariable(name = "idCategory") Long idCategory,
            @PathVariable(name = "idarticle") Long idarticle) {

        Category category = categoryService.getEntityCategory(idCategory).get();
        article article = articleService.getEntityarticle(idarticle).get();

        category.addarticle(article);
        
        categoryService.saveCategory(category);
    
    }
	
	@DeleteMapping(value = "/categorie/{idCategory}")
	public void deletecategory(@PathVariable("idCategory")Long idCategory) {
		categoryService.deletecategory(idCategory);
	}
	
	
	@PatchMapping("/categorie")
	public ResponseEntity<Category> partialReplacecategory(@RequestBody Category category)
	{
		try {
			Category existingcategory = categoryService.getcategory(category.getId());
			if(category.getName() != null && !category.getName().equals(existingcategory.getName())) {
				existingcategory.setName(category.getName());
			}
			existingcategory = categoryService.saveCategory(existingcategory);
			return new ResponseEntity<Category>(existingcategory,HttpStatus.OK);
		}catch(NotFoundException e){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
