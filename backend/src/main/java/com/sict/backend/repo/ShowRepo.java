package com.sict.backend.repo;

import com.sict.backend.model.Show;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface ShowRepo extends JpaRepository<Show, Long> {
  Optional<Show> findById(Long uid);
}
