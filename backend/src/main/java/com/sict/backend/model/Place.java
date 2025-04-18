package com.sict.backend.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "places")
public class Place {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long plcid;

  private String name;
  private String address;

  @OneToMany(mappedBy = "place", cascade = CascadeType.ALL)
  private List<Show> shows;

  public Place() {
  }

  public Place(String name, String address) {
    this.name = name;
    this.address = address;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public Long getPlcid() {
    return plcid;
  }

  public String getName() {
    return name;
  }

  public String getAddress() {
    return address;
  }
}
