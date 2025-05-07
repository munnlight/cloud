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
  private long showId;

  private String name;
  private Date date;
  private String imageUrl;
  private String title;
  private String time;
  private String description;
  private int price;

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
    return showId;
  }

  public String getName() {
    return name;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public Date getDate() {
    return date;
  }

  public Place getPlace() {
    return place;
  }

  public String getImageUrl() {
    return imageUrl;
  }
  public String getDescription(){
    return description;
  }

  public void setDescription(String description){
    this.description = description;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }
}
