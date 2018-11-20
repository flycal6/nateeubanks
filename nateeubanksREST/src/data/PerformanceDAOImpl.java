package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.nateeubanks.entities.Performance;

@Transactional
@Repository
public class PerformanceDAOImpl implements PerformanceDAO {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Performance> index() {
        String query = "SELECT p FROM Performance p";
        List<Performance> performances = em.createQuery(query, Performance.class).getResultList();
        return performances;
    }

    @Override
    public Performance show(Integer id) {
        Performance p = em.find(Performance.class, id);
        return p;
    }

    @Override
    public Performance create(Performance p) {

        // write to the DB
        em.persist(p);
        // update the local detached object to match the one in the DB
        em.flush();

        return p;
    }

    @Override
    public Performance update(Performance p) {

        Performance managedP = em.find(Performance.class, p.getId());
        // update managed entity
        managedP.setClubName(p.getClubName());
//        managedP.setDate(p.getDate());
        managedP.setLocation(p.getLocation());
        managedP.setWebsite(p.getWebsite());

        // update the local detached object to match the one in the DB
        em.flush();

        return p;
    }

    @Override
    public Boolean destroy(Integer id) {
        try {
            Performance p = em.find(Performance.class, id);
            em.remove(p);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
