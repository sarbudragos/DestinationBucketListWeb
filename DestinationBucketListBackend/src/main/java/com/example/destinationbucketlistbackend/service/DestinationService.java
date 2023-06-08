package com.example.destinationbucketlistbackend.service;


import com.example.destinationbucketlistbackend.model.ORM.Destination;
import com.example.destinationbucketlistbackend.model.ORM.User;
import com.example.destinationbucketlistbackend.model.ORM.UserType;
import com.example.destinationbucketlistbackend.repository.DestinationRepository;
import com.example.destinationbucketlistbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DestinationService {

    private final DestinationRepository destinationRepository;

    private final UserRepository userRepository;

    public Page<Destination> getPublicDestinations(Integer pageNumber, Integer pageSize){
        return new PageImpl<>(
                destinationRepository
                        .findAll(PageRequest.of(pageNumber, pageSize))
                        .stream()
                        .filter(Destination::getIsPublic)
                        .collect(Collectors.toList())
        );

    }

    public Page<Destination> getDestinationsOfUser(Integer pageNumber, Integer pageSize, Integer userId){
        return new PageImpl<>(
                destinationRepository
                        .findAll(PageRequest.of(pageNumber, pageSize))
                        .stream()
                        .filter(destination -> destination.getUser().getId().equals(userId))
                        .collect(Collectors.toList())
        );
    }

    public void addPrivateDestination(Destination newDestination,Integer userId){
        User user = userRepository.findById(userId).orElseThrow();

        newDestination.setUser(user);

        newDestination.setIsPublic(false);

        destinationRepository.save(newDestination);
        userRepository.save(user);
    }

    public void modifyDestination(Destination newDestination,Integer destinationId,Integer userId){
        User user = userRepository.findById(userId).orElseThrow();

        if(!destinationRepository.findById(destinationId).orElseThrow().getUser().equals(user))
            throw new RuntimeException("User can only modify their own destinations.");

        Destination oldDestination = destinationRepository.findById(destinationId).orElseThrow();

        newDestination.setId(destinationId);
        newDestination.setIsPublic(oldDestination.getIsPublic());
        destinationRepository.save(newDestination);
    }

    public void deleteDestination(Integer destinationId,Integer userId){
        User user = userRepository.findById(userId).orElseThrow();

        if(!destinationRepository.findById(destinationId).orElseThrow().getUser().equals(user))
            throw new RuntimeException("User can only delete their own destinations.");

        destinationRepository.deleteById(destinationId);
    }

    public void markDestinationAsPublic(Integer destinationId,Integer userId){
        User user = userRepository.findById(userId).orElseThrow();

        if(!destinationRepository.findById(destinationId).orElseThrow().getUser().equals(user)
                && user.getUserType().equals(UserType.CLIENT)
        )
            throw new RuntimeException("User can only mark their own destinations public.");

        Destination destination = destinationRepository.findById(destinationId).orElseThrow();

        destination.setIsPublic(true);
        destinationRepository.save(destination);
    }

    public void modifyPublicDestination(Destination newDestination,Integer destinationId,Integer userId){
        User user = userRepository.findById(userId).orElseThrow();


        if(!user.getUserType().equals(UserType.ADMIN))
            throw new RuntimeException("This operation has to be performed by an admin.");

        Destination oldDestination = destinationRepository.findById(destinationId).orElseThrow();

        if(!oldDestination.getIsPublic())
            throw new RuntimeException("This operation can only be performed on public destinations.");

        newDestination.setId(destinationId);
        newDestination.setIsPublic(true);
        destinationRepository.save(newDestination);
    }

    public void deletePublicDestination(Integer destinationId,Integer userId){
        User user = userRepository.findById(userId).orElseThrow();

        if(!user.getUserType().equals(UserType.ADMIN))
            throw new RuntimeException("This operation has to be performed by an admin.");

        Destination oldDestination = destinationRepository.findById(destinationId).orElseThrow();

        if(!oldDestination.getIsPublic())
            throw new RuntimeException("This operation can only be performed on public destinations.");

        destinationRepository.deleteById(destinationId);
    }

}
