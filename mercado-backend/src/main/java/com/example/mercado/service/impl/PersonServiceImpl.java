package com.example.mercado.service.impl;

import com.example.mercado.dto.PersonDTO;
import com.example.mercado.entity.PersonEntity;
import com.example.mercado.exception.ResourceNotFoundException;
import com.example.mercado.mapper.PersonMapper;
import com.example.mercado.repository.OrderRepository;
import com.example.mercado.repository.PersonRepository;
import com.example.mercado.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private OrderRepository orderRepository;

    public PersonDTO getPersonByName(String name) {
        PersonEntity personEntity = personRepository.findByName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Person not found"));
        return PersonMapper.toPersonDTO(personEntity);
    }

    public PersonDTO logInPerson(PersonDTO personDTO) {
        PersonEntity personEntity = personRepository.findByName(personDTO.getName())
                .orElseThrow(() -> new ResourceNotFoundException("Person not found"));
        if (!personEntity.getPassword().equals(personDTO.getPassword())) {
            throw new ResourceNotFoundException("Person not found");
        }
        return PersonMapper.toPersonDTO(personEntity);
    }

    public PersonDTO createPerson(PersonDTO personDTO) {
        PersonEntity personEntity = PersonMapper.toPersonEntity(personDTO);
        PersonEntity savedPerson = personRepository.save(personEntity);
        return PersonMapper.toPersonDTO(savedPerson);
    }
}
