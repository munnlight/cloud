package com.sict.backend.model;

import java.util.List;

// import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "invoices")
public class Invoice {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long invId;

  private String phoneNumber;
  private int totalPrice;

  @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL)
  private List<Ticket> tickets;

  public Invoice(String phoneNumber, int totalPrice) {
    this.phoneNumber = phoneNumber;
    this.totalPrice = totalPrice;
  }

  public Invoice() {
  }

  public long getinvId() {
    return invId;
  }

  public void setinvId(long invId) {
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
