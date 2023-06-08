package com.example.destinationbucketlistbackend.controller;

import com.example.destinationbucketlistbackend.model.AuthenticationRequest;
import com.example.destinationbucketlistbackend.model.AuthenticationResponse;
import com.example.destinationbucketlistbackend.model.RegisterRequest;
import com.example.destinationbucketlistbackend.service.AuthenticationService;
import com.example.destinationbucketlistbackend.service.JwtService;
import com.example.destinationbucketlistbackend.service.UserService;
import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    private final UserService userService;

    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody RegisterRequest request
    ){
        authenticationService.register(request);
        return ResponseEntity.ok("Registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @DeleteMapping("/delete-account")
    public void deleteAccount(
            @RequestHeader(name="Authorization") String token
    ) throws AuthException {
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        userService.deleteUser(userId);
    }
}
