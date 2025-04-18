package com.sict.backend.controller;

import com.sict.backend.model.Show;
import com.sict.backend.repo.ShowRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ShowController {

  @Autowired
  private ShowRepo showRepo;

  @GetMapping("/shows")
  public List<Show> getShows() {
    return showRepo.findAll();
  }

  @PostMapping("/shows/add")
  public Show createShow(@RequestBody Show show) {
    return showRepo.save(show);
  }

  @GetMapping("/shows/{show_id}")
  public ResponseEntity<Show> getShowById(@PathVariable Long show_id) {
    Optional<Show> show = showRepo.findById(show_id);
    if (show.isPresent()) {
      return ResponseEntity.ok(show.get());
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
