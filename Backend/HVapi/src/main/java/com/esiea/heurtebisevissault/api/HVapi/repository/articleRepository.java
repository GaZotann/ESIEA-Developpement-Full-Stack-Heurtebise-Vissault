package com.esiea.heurtebisevissault.api.HVapi.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.esiea.heurtebisevissault.api.HVapi.model.article;

@Repository
public interface articleRepository extends CrudRepository<article, Long>{

	
	public Optional<article> findByName(String name);
}
