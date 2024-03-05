package com.cursoangular.crudspring;

import com.cursoangular.crudspring.models.Course;
import com.cursoangular.crudspring.repositories.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c1 = new Course(1L, "Angular", "front-end");
			Course c2 = new Course(2L, "Java", "back-end");
			Course c3 = new Course(3L, "Spring", "back-end");

			Course c = new Course(4L, "Angular com Spring", "front-end");

			courseRepository.save(c1);
			courseRepository.save(c2);
			courseRepository.save(c3);
			courseRepository.save(c);
		};
	}
}
