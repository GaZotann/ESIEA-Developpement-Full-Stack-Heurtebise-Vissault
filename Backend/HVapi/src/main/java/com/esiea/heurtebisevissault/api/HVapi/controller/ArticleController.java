package com.esiea.heurtebisevissault.api.HVapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esiea.heurtebisevissault.api.HVapi.model.article;
import com.esiea.heurtebisevissault.api.HVapi.service.ArticleService;
import com.esiea.heurtebisevissault.api.HVapi.service.NotFoundException;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController


public class ArticleController {
	
	@Autowired
	private ArticleService articleService;
	
	@GetMapping("/article")
	public Iterable<article> getarticles() {
		return articleService.getarticles();
	}

	@GetMapping("/article/{id}")
	public ResponseEntity<article> getarticle(@PathVariable("id") Long id) {
		try {
			article a = articleService.getarticle(id);
			return new ResponseEntity<article>(a, HttpStatus.OK);
		} catch(NotFoundException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/article/name/{name}")
	public ResponseEntity<article> getProductByName(@PathVariable("name") String name){
		try {
			article a = articleService.getarticleByName(name);
			return new ResponseEntity<article>(a, HttpStatus.OK);
		}catch(NotFoundException e) {
			return new ResponseEntity<article>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PostMapping("/article")
	public article createProduct(@RequestBody article article) {
		return articleService.save(article);
	}
	
	@DeleteMapping(value = "/article/{id}")
	public void deleteArticle(@PathVariable("id")Long id) {
		articleService.deleteArticle(id);
	}
	
	@PatchMapping("/article")
	public ResponseEntity<article> partialReplaceProduct(@RequestBody article article)
	{
		try {
			article existingarticle = articleService.getarticle(article.getId());
			if(article.getName() != null && !article.getName().equals(existingarticle.getName())) {
				existingarticle.setName(article.getName());
			}
			if(article.getcontenu() != null && !article.getcontenu().equals(existingarticle.getcontenu())) {
				existingarticle.setcontenu(article.getcontenu());
			}
			if(article.getauteur() != null && !article.getauteur().equals(existingarticle.getauteur())) {
				existingarticle.setauteur(article.getauteur());
			}
			if(article.getdate() != null && !article.getdate().equals(existingarticle.getdate())) {
				existingarticle.setdate(article.getdate());
			}
			existingarticle = articleService.update(existingarticle);
			return new ResponseEntity<article>(existingarticle,HttpStatus.OK);
		}catch(NotFoundException e){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	
}
	
}
