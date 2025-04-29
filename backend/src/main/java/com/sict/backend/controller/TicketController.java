package com.sict.backend.controller;

import com.sict.backend.model.Ticket;
import com.sict.backend.repo.TicketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TicketController {

  @Autowired
  private TicketRepo ticketRepo;

  @GetMapping("/tickets")
  public List<Ticket> getUsers() {
    return ticketRepo.findAll();
  }

  @PostMapping("/tickets/add")
  public Ticket createUser(@RequestBody Ticket ticket) {
    return ticketRepo.save(ticket);
  }

  @GetMapping("/tickets/{id}")
  public ResponseEntity<Ticket> getUserByUid(@PathVariable Long id) {
    Optional<Ticket> user = ticketRepo.findById(id);
    if (user.isPresent()) {
      return ResponseEntity.ok(user.get());
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
