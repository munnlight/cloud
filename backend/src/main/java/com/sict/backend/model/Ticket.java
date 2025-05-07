package com.sict.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "tickets")
public class Ticket {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long ticket_id;

  @ManyToOne
  @JoinColumn(name = "show_id")
  @JsonBackReference
  private Show show;

  @ManyToOne
  @JoinColumn(name = "inv_id")
  @JsonBackReference
  private Invoice invoice;

  public Ticket(Show show, Invoice invoice) {
    this.invoice = invoice;
    this.show = show;
  }

  public Ticket() {

  }

  public void setShow(Show show) {
    this.show = show;
  }

  public long getTicketId() {
    return ticket_id;
  }

  public Show getShow() {
    return show;
  }

  public Invoice getInvoice() {
    return invoice;
  }

  public void setInvoice(Invoice invoice) {
    this.invoice = invoice;
  }
}
