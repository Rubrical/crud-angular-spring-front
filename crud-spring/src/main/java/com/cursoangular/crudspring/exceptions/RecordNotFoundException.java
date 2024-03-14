package com.cursoangular.crudspring.exceptions;

public class RecordNotFoundException extends RuntimeException{
    public RecordNotFoundException(Long id) {
        super("Registro de ID: " + id + " não encontrado");
    }
}
