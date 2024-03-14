package com.cursoangular.crudspring.controllers;

import com.cursoangular.crudspring.models.Course;
import com.cursoangular.crudspring.services.CourseService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
@Validated
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public List<Course> list() {
        return courseService.list();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable @NotNull @Positive Long id) {
        return courseService.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PutMapping
    public ResponseEntity<Course> create(@RequestBody @Valid Course course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseService.create(course));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable @NotNull @Positive Long id) {
        if (courseService.delete(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
