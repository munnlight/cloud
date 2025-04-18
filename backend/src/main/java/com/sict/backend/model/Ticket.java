package com.sict.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "tickets")
public class Ticket {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long ticket_id;

  private int price;
  private String seat_number;
  private boolean is_sold;

  @ManyToOne
  @JoinColumn(name = "show_id")
  @JsonManagedReference
  private Show show;

  public Ticket(int price, String seat_number, boolean is_sold, Show show) {
    this.price = price;
    this.seat_number = seat_number;
    this.is_sold = is_sold;
    this.show = show;
  }

  public Ticket() {

  }

  public void setPrice(int price) {
    this.price = price;
  }

  public void setSeatNumber(String seat_number) {
    this.seat_number = seat_number;
  }

  public void setIsSold(boolean is_sold) {
    this.is_sold = is_sold;
  }

  public void setShow(Show show) {
    this.show = show;
  }

  public long getTicketId() {
    return ticket_id;
  }

  public int getPrice() {
    return price;
  }

  public String getSeatNumber() {
    return seat_number;
  }

  public boolean getIsSold() {
    return is_sold;
  }

  public Show getShow() {
    return show;
  }
}
