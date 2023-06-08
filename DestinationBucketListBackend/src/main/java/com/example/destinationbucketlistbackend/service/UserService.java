package com.example.destinationbucketlistbackend.service;

import com.example.destinationbucketlistbackend.model.ORM.User;
import com.example.destinationbucketlistbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User loadUserByUsername(String username) {
        return userRepository.findUserByUserName(username).orElseThrow();
    }

    public void deleteUser(Integer userId){
        userRepository.deleteById(userId);
    }
}
