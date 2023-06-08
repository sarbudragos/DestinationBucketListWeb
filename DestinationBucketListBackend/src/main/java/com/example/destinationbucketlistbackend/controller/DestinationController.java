package com.example.destinationbucketlistbackend.controller;


import com.example.destinationbucketlistbackend.model.DTO.DestinationDTO;
import com.example.destinationbucketlistbackend.model.ORM.Destination;
import com.example.destinationbucketlistbackend.service.DestinationService;
import com.example.destinationbucketlistbackend.service.JwtService;
import com.example.destinationbucketlistbackend.service.UserService;
import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class DestinationController {
    private final DestinationService destinationService;

    private final JwtService jwtService;

    private final UserService userService;


    @GetMapping("/destinations/public")
    @ResponseBody
    public Page<DestinationDTO> getPublicDestinations(
            @RequestParam(defaultValue = "0") Integer pageNumber,
            @RequestParam(defaultValue = "10") Integer pageSize
    ){
        Page<Destination> publicDestinations = destinationService.getPublicDestinations(pageNumber, pageSize);
        return publicDestinations
                .map(this::convertToDto);
    }

    private DestinationDTO convertToDto(Destination destination) {
        DestinationDTO destinationDTO = new DestinationDTO();

        destinationDTO.setTitle(destination.getTitle());
        destinationDTO.setDescription(destination.getDescription());
        destinationDTO.setStayDate(destination.getStayDate());
        destinationDTO.setLocation(destination.getLocation());
        destinationDTO.setImage(destination.getImage());
        destinationDTO.setIsPublic(destination.getIsPublic());
        return destinationDTO;
    }

    private Destination convertToEntity(DestinationDTO destinationDTO){
        Destination destination = new Destination();
        destination.setTitle(destinationDTO.getTitle());
        destination.setDescription(destinationDTO.getDescription());
        destination.setStayDate(destinationDTO.getStayDate());
        destination.setLocation(destinationDTO.getLocation());
        destination.setImage(destinationDTO.getImage());
        destination.setIsPublic(destinationDTO.getIsPublic());
        return destination;
    }

    @GetMapping("/destinations/private")
    @ResponseBody
    public Page<DestinationDTO> getPrivateDestinations(
            @RequestHeader(name="Authorization") String token,
            @RequestParam(defaultValue = "0") Integer pageNumber,
            @RequestParam(defaultValue = "10") Integer pageSize
    ) throws AuthException {
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();
        Page<Destination> publicDestinations = destinationService.getDestinationsOfUser(pageNumber, pageSize, userId);
        return publicDestinations
                .map(this::convertToDto);
    }

    @PostMapping("/destinations/private")
    @ResponseStatus(HttpStatus.OK)
    public void addPrivateDestination(
            @RequestHeader(name="Authorization") String token,
            @RequestBody DestinationDTO destinationDTO
    ) throws AuthException{
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        destinationService.addPrivateDestination(convertToEntity(destinationDTO), userId);
    }

    @PutMapping("/destinations/private/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void modifyPrivateDestination(
            @RequestHeader(name="Authorization") String token,
            @PathVariable Integer id,
            @RequestBody DestinationDTO destinationDTO
    ) throws AuthException{
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        destinationService.modifyDestination(convertToEntity(destinationDTO),id, userId);
    }

    @DeleteMapping("/destinations/private/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePrivateDestination(
            @RequestHeader(name="Authorization") String token,
            @PathVariable Integer id
    ) throws AuthException{
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        destinationService.deleteDestination(id, userId);
    }

    @PutMapping("/destinations/private/favourite/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void markDestinationAsPublic(
            @RequestHeader(name="Authorization") String token,
            @PathVariable Integer id
    ) throws AuthException{
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        destinationService.markDestinationAsPublic(id, userId);
    }

    @PutMapping("/destinations/admin/public/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void modifyPublicDestination(
            @RequestHeader(name="Authorization") String token,
            @PathVariable Integer id,
            @RequestBody DestinationDTO destinationDTO
    ) throws AuthException{
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        destinationService.modifyPublicDestination(convertToEntity(destinationDTO),id, userId);
    }

    @DeleteMapping("/destinations/admin/public/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePublicDestination(
            @RequestHeader(name="Authorization") String token,
            @PathVariable Integer id
    ) throws AuthException{
        if(token.isBlank()){
            throw new AuthException("Token is empty");
        }
        String username = jwtService.extractUsername(token.substring(7));
        Integer userId = userService.loadUserByUsername(username).getId();

        destinationService.deletePublicDestination(id, userId);
    }
}
