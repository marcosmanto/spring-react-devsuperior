package com.marcosmanto.dsvendas.repositories;

import com.marcosmanto.dsvendas.entities.Sale;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
