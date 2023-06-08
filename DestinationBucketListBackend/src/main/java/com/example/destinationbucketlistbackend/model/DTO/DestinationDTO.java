package com.example.destinationbucketlistbackend.model.DTO;


import com.example.destinationbucketlistbackend.model.ORM.Geolocation;
import com.example.destinationbucketlistbackend.model.ORM.StayDates;
import lombok.Data;

@Data
public class DestinationDTO {

    private String title;

    private String description;

    private StayDates stayDate;

    private Geolocation location;

    private String image;

    private Boolean isPublic;
}
