package com.example.destinationbucketlistbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
@Data
@AllArgsConstructor
public class PrivateBucketList {
    private Integer id;
    private Integer userId;
    private List<Integer> destinationIds;
//        TODO: maybe have a list of destinations instead of destination ids

    public boolean addDestination(Integer destinationId) {
        if (destinationIds.contains(destinationId)) {
            return false;
        }
        destinationIds.add(destinationId);
        return true;
    }
    public boolean removeDestination(Integer destinationId) {
        if (!destinationIds.contains(destinationId)) {
            return false;
        }
        destinationIds.remove(destinationId);
        return true;
    }
    public boolean contains(Integer destinationId) {
        return destinationIds.contains(destinationId);
    }
    public boolean updateDestination(Integer oldDestinationId, Integer newDestinationId) {
//        TODO: this doesn't make sense
        if (!destinationIds.contains(oldDestinationId)) {
            return false;
        }
        destinationIds.remove(oldDestinationId);
        destinationIds.add(newDestinationId);
        return true;
    }
    public boolean addDestinationToPublicList(){
//        TODO: add destination to public list
        return false;
    }
}