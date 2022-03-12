package com.esiea.heurtebisevissault.api.HVapi.model;

import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "articles")
public class article {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	//private long fichiercat.categorieId;
	private String contenu;
	private String auteur;
	private String date;
	
	public Long getId() {
		return id;
	}

	public void SetId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String Name) {
		this.name = Name;
	}
	
	public String getcontenu() {
		return contenu;
	}
	
	public void setcontenu(String contenu) {
		this.contenu = contenu;
	}
	

	
	public String getauteur() {
		return auteur;
	}
	
	public void setauteur(String auteur) {
		this.auteur = auteur;
	}
	
	public String getdate() {
		return date;
	}
	
	public void setdate(String date) {
		this.date = date;
	}
	public article() {
		
	}
	
	public article(Long id,String name,String contenu,String auteur,String date) {
		super();
		this.id = id;
		this.name = name;
		this.contenu = contenu;
		this.auteur = auteur;
		this.date = date;
	}
	
}
