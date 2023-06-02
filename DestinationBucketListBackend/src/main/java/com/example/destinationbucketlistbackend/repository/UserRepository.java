package com.example.destinationbucketlistbackend.repository;

import com.example.destinationbucketlistbackend.model.ORM.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByUserName(String username);
}