package com.example.destinationbucketlistbackend.service;

import com.example.destinationbucketlistbackend.model.AuthenticationRequest;
import com.example.destinationbucketlistbackend.model.AuthenticationResponse;
import com.example.destinationbucketlistbackend.model.ORM.User;
import com.example.destinationbucketlistbackend.model.ORM.UserType;
import com.example.destinationbucketlistbackend.model.RegisterRequest;
import com.example.destinationbucketlistbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;


    public void register(RegisterRequest request) {

        User user = User.builder()
                .userName(request.getUserName())
                .password(passwordEncoder.encode(request.getPassword()))
                .eMail(request.getEmail())
                .userType(UserType.CLIENT)
                .build();

        userRepository.save(user);

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUserName(),
                        request.getPassword()
                )
        );
        var user = userRepository.findUserByUserName(request.getUserName()).orElseThrow();
        var jwt = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwt)
                .build();
    }
}
