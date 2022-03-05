package com.esiea.heurtebisevissault.api.HVapi.model;

import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "article")
public class article {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	//private long fichiercat.categorieId;
	private Calendar date;
	private String contenu;
	private String auteur;
	
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
	
	public Calendar date() {
		return date;
	}
	
	public void setdate(Calendar date) {
		this.date = date;
	}
	
	public String getauteur() {
		return auteur;
	}
	
	public void setauteur(String auteur) {
		this.auteur = auteur;
	}
	
}
