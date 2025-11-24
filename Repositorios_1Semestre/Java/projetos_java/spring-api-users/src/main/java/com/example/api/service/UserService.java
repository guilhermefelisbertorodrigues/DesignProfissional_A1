package com.example.api.service;

import com.example.api.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final List<User> list = new ArrayList<>();

    public List<User> findAll() {
        return list;
    }

    public void add(User u) {
        list.add(u);
    }
}
