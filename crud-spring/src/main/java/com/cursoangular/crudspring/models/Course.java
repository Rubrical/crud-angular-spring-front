package com.cursoangular.crudspring.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

@Data
@Entity
@Table(name = "courses")
@AllArgsConstructor
@NoArgsConstructor
@SQLDelete(sql = "UPDATE courses SET status = 'Inativo' WHERE id = ?")
@Where(clause = "status = 'Ativo'")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("_id")
    private Long id;

    @Column(nullable = false)
    @NotNull
    @Length(min = 3, max = 255)
    private String name;

    @Column(nullable = false)
    @Length(min = 5, max = 255)
    @Pattern(regexp = "back-end|front-end")
    private String category;

    @Column(nullable = false)
    @Length(min = 5, max = 255)
    @Pattern(regexp = "Ativo|Inativo")
    private String status = "Ativo";

    public Course(Long id, String name, String category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}
