package com.sict.backend.controller;

import com.sict.backend.model.Invoice;
import com.sict.backend.repo.InvoiceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class InvoiceController {

  @Autowired
  private InvoiceRepo invoiceRepo;

  @GetMapping("/invoices")
  public List<Invoice> getInvoices() {
    return invoiceRepo.findAll();
  }

  @PostMapping("/invoices/add")
  public Invoice createInvoice(@RequestBody Invoice invoice) {
    return invoiceRepo.save(invoice);
  }

  @GetMapping("/invoices/{inv_id}")
  public ResponseEntity<Invoice> getInvoiceById(@PathVariable Long inv_id) {
    Optional<Invoice> invoice = invoiceRepo.findById(inv_id);
    if (invoice.isPresent()) {
      return ResponseEntity.ok(invoice.get());
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
