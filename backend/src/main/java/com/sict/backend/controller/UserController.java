package com.sict.backend.controller;

import com.sict.backend.model.User;
import com.sict.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    @PostMapping("/users/add")
    public User createUser(@RequestBody User user) {
        return userRepo.save(user);
    }

    @GetMapping("/test")
    public String testDbConnection() {
        long count = userRepo.count();
        return "Users in DB: " + count;
    }

    @GetMapping("/users/{uid}")
    public ResponseEntity<User> getUserByUid(@PathVariable Long uid) {
        Optional<User> user = userRepo.findById(uid);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
