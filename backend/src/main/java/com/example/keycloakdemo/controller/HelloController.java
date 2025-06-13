package com.example.keycloakdemo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow all origins, adjust as needed for security
public class HelloController {
    @GetMapping("/public/hello")
    public ResponseEntity<?> index() {
        return ResponseEntity.ok("Hello from public access API Endpoints!");
    }
    @GetMapping("/private/hello")
    private ResponseEntity<?> hello() {
        return ResponseEntity.ok("Hello from secured API Endpoints!");
    }
}
