package com.example.mercado.mapper;

import com.example.mercado.dto.QuantityDTO;
import com.example.mercado.entity.OrderEntity;
import com.example.mercado.entity.ProductEntity;
import com.example.mercado.entity.QuantityEntity;
import com.example.mercado.entity.QuantityId;

public class QuantityMapper {

    public static QuantityDTO toQuantityDTO(QuantityEntity quantityEntity) {
        QuantityDTO dto = new QuantityDTO();
        dto.setProduct(ProductMapper.toProductDTO(quantityEntity.getProduct()));
        dto.setQuantity(quantityEntity.getQuantity());
        return dto;
    }

    public static QuantityEntity toQuantityEntity(QuantityDTO quantityDTO, OrderEntity order, ProductEntity product) {
        QuantityId id = new QuantityId(order.getId(), product.getId());
        return new QuantityEntity(id, order, product, quantityDTO.getQuantity());
    }
}
