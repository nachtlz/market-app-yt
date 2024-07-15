package com.example.mercado.service;

import com.example.mercado.dto.ProductDTO;
import com.example.mercado.dto.ProductStockUpdateDTO;

import java.util.List;

public interface ProductService {

    ProductDTO createProduct(ProductDTO productDTO);

    ProductDTO updateProduct(Long id, ProductDTO productDTO);

    void updateProductStock(List<ProductStockUpdateDTO> productStockUpdateDTOs);
}
