package com.sict.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sict.backend.model.Place;
import com.sict.backend.repo.PlaceRepo;

@RestController
public class PlaceController {

  @Autowired
  private PlaceRepo placeRepo;

  @GetMapping("/places")
  public List<Place> getPlaces() {
    return placeRepo.findAll();
  }

  @GetMapping("/places/{plcid}")
  public ResponseEntity<Place> getPlace(@PathVariable Long plcid) {
    Optional<Place> place = placeRepo.findById(plcid);

    if (place.isPresent())
      return ResponseEntity.ok(place.get());
    return ResponseEntity.notFound().build();
  }

  @PostMapping("/places/add")
  public Place createPlace(@RequestBody Place place) {
    return placeRepo.save(place);
  }

}
