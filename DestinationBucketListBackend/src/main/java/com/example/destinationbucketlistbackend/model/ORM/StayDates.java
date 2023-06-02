package com.example.destinationbucketlistbackend.model.ORM;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "stay_dates")
public class StayDates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Date startDate;

    @Column
    private Date endDate;

    @OneToOne(mappedBy = "stayDate", cascade = CascadeType.ALL)
    @JsonIgnore
    private Destination destination;
}
