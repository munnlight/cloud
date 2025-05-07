package com.sict.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sict.backend.model.Invoice;

@RepositoryRestResource
public interface InvoiceRepo extends JpaRepository<Invoice, Long> {
  Optional<Invoice> findById(Long invId);
}
