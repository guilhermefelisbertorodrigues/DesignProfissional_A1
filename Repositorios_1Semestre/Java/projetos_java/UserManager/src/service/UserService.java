package service;

import model.User;
import java.util.ArrayList;
import java.util.List;

public class UserService {
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
    }

    public User getUserById(int id) {
        return users.stream()
                .filter(u -> u.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public boolean updateUser(int id, String newName, String newEmail) {
        User u = getUserById(id);
        if (u != null) {
            u.setName(newName);
            u.setEmail(newEmail);
            return true;
        }
        return false;
    }

    public boolean deleteUser(int id) {
        return users.removeIf(u -> u.getId() == id);
    }

    public List<User> listUsers() {
        return users;
    }
}
