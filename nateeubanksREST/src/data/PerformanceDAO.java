package data;

import java.util.List;

import com.nateeubanks.entities.Performance;

public interface PerformanceDAO {

    public List<Performance> indexPerformance();

    public Performance showPerformance(Integer id);

    public Performance createPerformance(Performance p);

    public Performance updatePerformance(Performance p);

    public Boolean destroyPerformance(Integer id);
}
