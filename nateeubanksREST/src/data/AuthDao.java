package data;

import com.nateeubanks.entities.User;

public interface AuthDao {
    public User login(User u);

    public User register(User u);
}
