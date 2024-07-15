package com.example.mercado.service;

import com.example.mercado.dto.OrderDTO;

import java.util.List;

public interface OrderService {

    List<OrderDTO> getOrderByPersonId(Long personId);

    OrderDTO createOrder(OrderDTO orderDTO);
}
