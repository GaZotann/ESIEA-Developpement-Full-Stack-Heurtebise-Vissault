package com.esiea.heurtebisevissault.api.HVapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.esiea.heurtebisevissault.api.HVapi.model.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{

}
