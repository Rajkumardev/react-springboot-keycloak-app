package com.example.keycloakdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KeycloakDemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(KeycloakDemoApplication.class, args);
   		System.out.println("Application started successfully.");
    }
}