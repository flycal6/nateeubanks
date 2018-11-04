package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.nateeubanks.entities.User;

@Repository
@Transactional
public class AuthDaoImpl implements AuthDao {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public User login(User u) {
        String query = "SELECT u FROM User u WHERE u.email = :email";
        List<User> users = em.createQuery(query, User.class).setParameter("email", u.getEmail()).getResultList();

        if (users.size() > 0) {
            Boolean passwordsMatch = encoder.matches(u.getPassword(), users.get(0).getPassword());
            if (passwordsMatch) {
                return users.get(0);
            }
        }
        return null;
    }

    @Override
    public User register(User u) {
        String encodedPassword = encoder.encode(u.getPassword());
        u.setPassword(encodedPassword);
        em.persist(u);
        em.flush();
        return u;
    }

}
