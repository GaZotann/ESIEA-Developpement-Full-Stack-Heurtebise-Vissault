package com.esiea.heurtebisevissault.api.HVapi.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import javax.persistence.JoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "categories")

public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "category_id")
	private Long id;
	private String name;
	
	@JsonIgnore // fix la récupération cyclique des éléments 
    @ManyToMany(
            fetch = FetchType.LAZY, // performance
            cascade = { 
                    CascadeType.PERSIST, // création
                    CascadeType.MERGE }) // modification
    @JoinTable(
            // nom de la table de jointure
            name = "category_article",  
            // clé étrangère dans la table de jointure correspondant à la clé primaire 
            // de la classe courante (category)
            joinColumns = @JoinColumn(name = "category_id"), 
            // clé étrangère dans la table de jointure correspondant à la clé primaire
            // de la classe en relation (product)
            inverseJoinColumns = @JoinColumn(name = "article_id"))
    private List<article> articles = new ArrayList<>();
	
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<article> getarticles() {
        return articles;
    }

    public void setarticles(List<article> articles) {
        this.articles = articles;
    }

    public void addarticle(article article) {
        this.articles.add(article);
        article.getCategories().add(this);
    }
	
	/*public void readArticle(article article) {
		article.getCategories().;
	}*/

}
