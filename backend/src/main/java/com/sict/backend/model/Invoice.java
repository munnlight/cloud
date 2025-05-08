package com.sict.backend.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "invoices")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Invoice {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long invId;
  @Column(name = "phone_number")
  @JsonProperty("phone_number")
  private String phoneNumber;
  @Column(name = "total_price")
  @JsonProperty("total_price")
  private int totalPrice;

  @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
  private List<Ticket> tickets;

  public Invoice(String phoneNumber, int totalPrice, List<Ticket> tickets) {
    this.tickets = tickets;
    this.phoneNumber = phoneNumber;
    this.totalPrice = totalPrice;
  }

  public Invoice() {
  }

  public long getInvId() {
    return invId;
  }

  public void setInvId(long invId) {
    this.invId = invId;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public int getTotalPrice() {
    return totalPrice;
  }

  public void setTotalPrice(int totalPrice) {
    this.totalPrice = totalPrice;
  }

  public List<Ticket> getTickets() {
    return tickets;
  }

  public void setTickets(List<Ticket> tickets) {
    this.tickets = tickets;
  }
}
