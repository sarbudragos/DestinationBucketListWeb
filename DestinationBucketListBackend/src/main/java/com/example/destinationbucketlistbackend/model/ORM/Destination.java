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
@Table(name = "destinations")
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String title;

    @Column
    private String description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="stay_date_id", referencedColumnName = "id")
    private StayDates stayDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="location_id", referencedColumnName = "id")
    private Geolocation location;

    @Column
    private String image;

    @Column(name = "is_public")
    @JsonIgnore
    private Boolean isPublic;
    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonIgnore
    private User user;
}
