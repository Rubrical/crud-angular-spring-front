package com.cursoangular.crudspring.controllers;

import com.cursoangular.crudspring.models.Course;
import com.cursoangular.crudspring.repositories.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list() {
//        List<Course> courses = new ArrayList<>();
//        Course c1 = new Course(1L, "Angular", "front-end");
//        Course c2 = new Course(2L, "Java", "back-end");
//        Course c3 = new Course(3L, "Spring", "back-end");
//        courses.add(c1);
//        courses.add(c2);
//        courses.add(c3);

//        return courses;

        return courseRepository.findAll();
    }

}
