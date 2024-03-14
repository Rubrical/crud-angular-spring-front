package com.cursoangular.crudspring.services;

import com.cursoangular.crudspring.models.Course;
import com.cursoangular.crudspring.repositories.CourseRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Validated
public class CourseService {

    private CourseRepository courseRepository;

    public List<Course> list() {
        return courseRepository.findAll();
    }

    public Optional<Course> findById(@PathVariable @NotNull @Positive Long id) {
        return courseRepository.findById(id);
    }

    public Course create(@Valid Course course) {
        return courseRepository.save(course);
    }

    public boolean delete(@PathVariable @NotNull @Positive Long id) {
        return courseRepository.findById(id)
                .map(course -> {
                    courseRepository.deleteById(id);
                    return true;
                }).orElse(false);
    }
}
