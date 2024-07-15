package com.example.mercado.repository;

import com.example.mercado.entity.QuantityEntity;
import com.example.mercado.entity.QuantityId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuantityRepository extends JpaRepository<QuantityEntity, QuantityId> {

    List<QuantityEntity> findByProductId(Long productId);
}

