package com.esiea.heurtebisevissault.api.HVapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiea.heurtebisevissault.api.HVapi.model.Category;
import com.esiea.heurtebisevissault.api.HVapi.model.article;
import com.esiea.heurtebisevissault.api.HVapi.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	
	public Category getcategory(Long id) throws NotFoundException{
		Optional<Category> resultat = categoryRepository.findById(id);
		if(resultat.isPresent()) {
			return resultat.get();
		}else {
			throw new NotFoundException();
		}
	}
	
	public Iterable<Category> getCategories(){
		return categoryRepository.findAll();
	}
	
	public Optional<Category> getEntityCategory(Long idCategory) {
        return categoryRepository.findById(idCategory);
    }
	
	public Category save(Category category) {
		return categoryRepository.save(category);
	}
	
	public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }
	
	public void deletecategory(Long idCategory) {
		categoryRepository.deleteById(idCategory);
	}
	

}
