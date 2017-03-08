package com.jdriven.ng2boot;


import javax.management.Query;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.mongodb.Mongo;

import model.Student;

@SpringBootApplication


public class Ng2bootApplication {

	private static final Log log = LogFactory.getLog(Ng2bootApplication.class);

	@Autowired
	StudentRestController controller;

	public static void main(String[] args) {


		System.out.println("BEFORE");
		MongoOperations mongoOps = new MongoTemplate(new Mongo(), "database");
		SpringApplication.run(Ng2bootApplication.class, args);
		System.out.println("AFTER");


	}
	
	
}
