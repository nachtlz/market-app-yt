package com.example.mercado.mapper;

import com.example.mercado.dto.PersonDTO;
import com.example.mercado.entity.PersonEntity;

public class PersonMapper {

    public static PersonDTO toPersonDTO(PersonEntity personEntity) {
        PersonDTO dto = new PersonDTO();
        dto.setId(personEntity.getId());
        dto.setName(personEntity.getName());
        dto.setPassword(personEntity.getPassword());
        return dto;
    }

    public static PersonEntity toPersonEntity(PersonDTO personDTO) {
        PersonEntity entity = new PersonEntity();
        entity.setId(personDTO.getId());
        entity.setName(personDTO.getName());
        entity.setPassword(personDTO.getPassword());
        return entity;
    }
}
