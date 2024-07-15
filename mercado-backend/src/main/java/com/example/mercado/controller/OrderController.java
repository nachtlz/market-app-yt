package com.example.mercado.controller;

import com.example.mercado.dto.OrderDTO;
import com.example.mercado.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/person/{personId}")
    public List<OrderDTO> getOrderByPersonId(@PathVariable Long personId) {
        return orderService.getOrderByPersonId(personId);
    }

    @PostMapping
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO) {
        return ResponseEntity.ok(orderService.createOrder(orderDTO));
    }
}

