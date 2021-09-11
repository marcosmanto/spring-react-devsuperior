package com.marcosmanto.dsvendas.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.marcosmanto.dsvendas.entities.Sale;

public class SaleDTO implements Serializable {
  private Long id;
  private Integer visited;
  private Integer deals;
  private Double amount;
  private LocalDate date;

  private SellerDTO seller;


  public SaleDTO() {
  }


  public SaleDTO(Long id, Integer visited, Integer deals, Double amount, LocalDate date, SellerDTO seller) {
    this.id = id;
    this.visited = visited;
    this.deals = deals;
    this.amount = amount;
    this.date = date;
    this.seller = seller;
  }

  public SaleDTO(Sale entity) {
    id = entity.getId();
    visited = entity.getVisited();
    deals = entity.getDeals();
    amount = entity.getAmount();
    date = entity.getDate();
    seller = new SellerDTO(entity.getSeller());
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Integer getVisited() {
    return this.visited;
  }

  public void setVisited(Integer visited) {
    this.visited = visited;
  }

  public Integer getDeals() {
    return this.deals;
  }

  public void setDeals(Integer deals) {
    this.deals = deals;
  }

  public Double getAmount() {
    return this.amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public LocalDate getDate() {
    return this.date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public SellerDTO getSeller() {
    return this.seller;
  }

  public void setSeller(SellerDTO seller) {
    this.seller = seller;
  }



}
