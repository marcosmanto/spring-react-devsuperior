package com.marcosmanto.dsvendas.repositories;

import com.marcosmanto.dsvendas.entities.Seller;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
