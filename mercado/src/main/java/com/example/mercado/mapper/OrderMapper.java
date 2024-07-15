package com.example.mercado.mapper;

import com.example.mercado.dto.OrderDTO;
import com.example.mercado.entity.OrderEntity;
import com.example.mercado.entity.PersonEntity;
import com.example.mercado.entity.QuantityEntity;

import java.util.List;
import java.util.stream.Collectors;

public class OrderMapper {

    public static OrderDTO toOrderDTO(OrderEntity orderEntity) {
        OrderDTO dto = new OrderDTO();
        dto.setId(orderEntity.getId());
        dto.setPersonId(orderEntity.getPerson().getId());
        dto.setQuantities(orderEntity.getQuantities().stream()
                .map(QuantityMapper::toQuantityDTO)
                .collect(Collectors.toList()));
        return dto;
    }

    public static OrderEntity toOrderEntity(OrderDTO orderDTO, PersonEntity person, List<QuantityEntity> quantities) {
        OrderEntity entity = new OrderEntity();
        entity.setId(orderDTO.getId());
        entity.setPerson(person);
        entity.setQuantities(quantities);
        return entity;
    }
}
