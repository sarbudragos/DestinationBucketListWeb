package com.example.destinationbucketlistbackend.repository;

import com.example.destinationbucketlistbackend.model.ORM.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationRepository extends JpaRepository<Destination, Integer> {
}
