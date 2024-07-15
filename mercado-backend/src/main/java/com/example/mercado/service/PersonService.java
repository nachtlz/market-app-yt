package com.example.mercado.service;

import com.example.mercado.dto.PersonDTO;

public interface PersonService {

    PersonDTO getPersonByName(String name);

    PersonDTO logInPerson(PersonDTO personDTO);

    PersonDTO createPerson(PersonDTO personDTO);
}
