package com.example.mercado.controller;

import com.example.mercado.dto.ProductDTO;
import com.example.mercado.dto.ProductStockUpdateDTO;
import com.example.mercado.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productService.createProduct(productDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO) {
        return ResponseEntity.ok(productService.updateProduct(id, productDTO));
    }

    @PutMapping("/update-stock")
    public ResponseEntity<Void> updateProductStock(@RequestBody List<ProductStockUpdateDTO> productStockUpdateDTOs) {
        productService.updateProductStock(productStockUpdateDTOs);
        return ResponseEntity.ok().build();
    }
}

