package com.example.destinationbucketlistbackend.model.ORM;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "geolocations")
public class Geolocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String country;

    @Column
    private String zone;

    @OneToOne(mappedBy = "location", cascade = CascadeType.ALL)
    @JsonIgnore
    private Destination destination;

}
