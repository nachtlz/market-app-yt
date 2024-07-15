package com.example.mercado.service.impl;

import com.example.mercado.dto.OrderDTO;
import com.example.mercado.dto.QuantityDTO;
import com.example.mercado.entity.*;
import com.example.mercado.mapper.OrderMapper;
import com.example.mercado.repository.OrderRepository;
import com.example.mercado.repository.PersonRepository;
import com.example.mercado.repository.ProductRepository;
import com.example.mercado.repository.QuantityRepository;
import com.example.mercado.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private QuantityRepository quantityRepository;

    public List<OrderDTO> getOrderByPersonId(Long personId) {
        PersonEntity person = personRepository.findById(personId)
                .orElseThrow(() -> new RuntimeException("Person not found"));
        List<OrderEntity> orderEntity = orderRepository.findByPersonId(person.getId());
        return orderEntity.stream()
                .map(OrderMapper::toOrderDTO)
                .collect(Collectors.toList());
    }

    public OrderDTO createOrder(OrderDTO orderDTO) {
        PersonEntity person = personRepository.findById(orderDTO.getPersonId())
                .orElseThrow(() -> new RuntimeException("Person not found"));

        OrderEntity order = new OrderEntity();
        order.setPerson(person);

        for (QuantityDTO quantityDTO : orderDTO.getQuantities()) {
            ProductEntity product = productRepository.findById(quantityDTO.getProduct().getId())
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            QuantityId quantityId = new QuantityId(order.getId(), product.getId());
            QuantityEntity quantity = new QuantityEntity(quantityId, order, product, quantityDTO.getQuantity());
            order.addQuantity(quantity);
        }

        OrderEntity savedOrder = orderRepository.save(order);
        return OrderMapper.toOrderDTO(savedOrder);
    }
}
