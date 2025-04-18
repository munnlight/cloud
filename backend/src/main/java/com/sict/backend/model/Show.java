package com.sict.backend.model;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "shows")
public class Show {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long show_id;

  private String name;
  private Date date;

  @ManyToOne
  @JoinColumn(name = "plcid")
  @JsonManagedReference
  private Place place;

  @OneToMany(mappedBy = "show", cascade = CascadeType.ALL)
  private List<Ticket> tickets;

  public Show(String name, Date date, Place place) {
    this.date = date;
    this.place = place;
    this.name = name;
  }

  public Show() {

  }

  public void setName(String name) {
    this.name = name;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public void setPlace(Place place) {
    this.place = place;
  }

  public long getShowId() {
    return show_id;
  }

  public String getName() {
    return name;
  }

  public Date getDate() {
    return date;
  }

  public Place getPlace() {
    return place;
  }
}
