package com.esiea.heurtebisevissault.api.HVapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiea.heurtebisevissault.api.HVapi.service.NotFoundException;
import com.esiea.heurtebisevissault.api.HVapi.model.article;
import com.esiea.heurtebisevissault.api.HVapi.repository.articleRepository;


@Service
public class ArticleService {

	@Autowired
	private articleRepository articleRepository;
	
	public Iterable<article> getarticles(){
		return articleRepository.findAll();
		
	}

	public article getarticle(Long id) throws NotFoundException{
		Optional<article> resultat = articleRepository.findById(id);
		if(resultat.isPresent()) {
			return resultat.get();
		}else {
			throw new NotFoundException();
		}
	}
	
	public article getarticleByName(String name) throws NotFoundException {
		Optional<article> resultat = articleRepository.findByName(name);
		if(resultat.isPresent()) {
			return resultat.get();
		}else {
			throw new NotFoundException();
		}
	}
	
	public article save(article article) {
		return articleRepository.save(article);
	}
	
	public void deleteArticle(Long id) {
		articleRepository.deleteById(id);
	}

	public article update(article article) {
		 return articleRepository.save(article);
	}
}
