package data;

import java.util.List;

import com.nateeubanks.entities.Performance;

public interface PerformanceDAO {

    public List<Performance> index();

    public Performance show(Integer id);

    public Performance create(Performance p);

    public Performance update(Performance p);

    public Boolean destroy(Integer id);
}
