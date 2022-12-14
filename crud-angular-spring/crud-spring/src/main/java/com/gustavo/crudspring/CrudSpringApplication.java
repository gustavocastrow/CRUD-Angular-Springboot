package com.gustavo.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.gustavo.crudspring.model.Course;
import com.gustavo.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
  CommandLineRunner initDataBase(CourseRepository courseRepository){
    return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Java c/ Spring Boot");
			c.setCategory("Back-end");
			courseRepository.save(c);
      
    };

  }


}
