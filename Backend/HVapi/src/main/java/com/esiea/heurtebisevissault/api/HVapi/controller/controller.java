package com.esiea.heurtebisevissault.api.HVapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {
	@GetMapping("/helloworld")
	public String getHelloWorld() {
		return "Hello World";
	}
}