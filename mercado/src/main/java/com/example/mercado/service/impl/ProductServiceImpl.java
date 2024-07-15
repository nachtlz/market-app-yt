package com.example.mercado.service.impl;

import com.example.mercado.dto.ProductDTO;
import com.example.mercado.dto.ProductStockUpdateDTO;
import com.example.mercado.entity.ProductEntity;
import com.example.mercado.entity.QuantityEntity;
import com.example.mercado.exception.ResourceNotFoundException;
import com.example.mercado.mapper.ProductMapper;
import com.example.mercado.repository.ProductRepository;
import com.example.mercado.repository.QuantityRepository;
import com.example.mercado.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private QuantityRepository quantityRepository;

    public ProductDTO createProduct(ProductDTO productDTO) {
        ProductEntity productEntity = ProductMapper.toProductEntity(productDTO, List.of());
        ProductEntity savedProduct = productRepository.save(productEntity);
        return ProductMapper.toProductDTO(savedProduct);
    }

    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        ProductEntity productEntity = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        productEntity.setName(productDTO.getName());
        productEntity.setPrice(productDTO.getPrice());
        productEntity.setStock(productDTO.getStock());

        List<QuantityEntity> quantities = quantityRepository.findByProductId(id);
        productEntity.setQuantities(quantities);

        ProductEntity updatedProduct = productRepository.save(productEntity);
        return ProductMapper.toProductDTO(updatedProduct);
    }

    public void updateProductStock(List<ProductStockUpdateDTO> productStockUpdateDTOs) {
        List<Long> productIds = productStockUpdateDTOs.stream()
                .map(ProductStockUpdateDTO::getId)
                .collect(Collectors.toList());

        List<ProductEntity> products = productRepository.findAllById(productIds);

        Map<Long, ProductEntity> productMap = products.stream()
                .collect(Collectors.toMap(ProductEntity::getId, product -> product));

        for (ProductStockUpdateDTO stockUpdate : productStockUpdateDTOs) {
            ProductEntity product = productMap.get(stockUpdate.getId());
            if (product != null) {
                product.setStock(Math.max(stockUpdate.getStock(), 0));
            }
        }

        productRepository.saveAll(products);
    }
}
