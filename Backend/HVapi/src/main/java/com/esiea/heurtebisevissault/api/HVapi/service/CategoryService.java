package com.esiea.heurtebisevissault.api.HVapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiea.heurtebisevissault.api.HVapi.model.Category;
import com.esiea.heurtebisevissault.api.HVapi.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public Iterable<Category> getCategories(){
		return categoryRepository.findAll();
	}
	
	public Optional<Category> getEntityCategory(Long idCategory) {
        return categoryRepository.findById(idCategory);
    }
}
