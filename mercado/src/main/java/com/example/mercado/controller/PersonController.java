package com.example.mercado.controller;

import com.example.mercado.dto.PersonDTO;
import com.example.mercado.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/persons")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/name/{name}")
    public ResponseEntity<PersonDTO> getPersonByName(@PathVariable String name) {
        return ResponseEntity.ok(personService.getPersonByName(name));
    }

    @PostMapping("/login")
    public ResponseEntity<PersonDTO> logInPerson(@RequestBody PersonDTO personDTO) {
        return ResponseEntity.ok(personService.logInPerson(personDTO));
    }

    @PostMapping
    public ResponseEntity<PersonDTO> createPerson(@RequestBody PersonDTO personDTO) {
        return ResponseEntity.ok(personService.createPerson(personDTO));
    }
}
