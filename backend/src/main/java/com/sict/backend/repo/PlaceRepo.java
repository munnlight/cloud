package com.sict.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sict.backend.model.Place;

@RepositoryRestResource
public interface PlaceRepo extends JpaRepository<Place, Long> {
  Optional<Place> findById(Long plcid);
}
