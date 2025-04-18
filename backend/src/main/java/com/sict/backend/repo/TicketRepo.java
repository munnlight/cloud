package com.sict.backend.repo;

import com.sict.backend.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface TicketRepo extends JpaRepository<Ticket, Long> {
  Optional<Ticket> findById(Long uid);
}
