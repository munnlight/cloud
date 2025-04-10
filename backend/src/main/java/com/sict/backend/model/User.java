package com.sict.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uid;

    private String name;
    private int age;

    public User(String name) {
        this.name = name;
    }

    public User() {

    }

    public void setUid(long uid) {
        this.uid = uid;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public long getUid() { return uid; }
    public String getName() { return name; }
    public int getAge() { return age; }
}
