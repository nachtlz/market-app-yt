package com.example.mercado.mapper;

import com.example.mercado.dto.ProductDTO;
import com.example.mercado.entity.ProductEntity;
import com.example.mercado.entity.QuantityEntity;

import java.util.List;

public class ProductMapper {

    public static ProductDTO toProductDTO(ProductEntity productEntity) {
        ProductDTO dto = new ProductDTO();
        dto.setId(productEntity.getId());
        dto.setName(productEntity.getName());
        dto.setPrice(productEntity.getPrice());
        dto.setStock(productEntity.getStock());
        return dto;
    }

    public static ProductEntity toProductEntity(ProductDTO productDTO, List<QuantityEntity> quantities) {
        ProductEntity entity = new ProductEntity();
        entity.setId(productDTO.getId());
        entity.setName(productDTO.getName());
        entity.setPrice(productDTO.getPrice());
        entity.setStock(productDTO.getStock());
        entity.setQuantities(quantities);
        return entity;
    }
}
