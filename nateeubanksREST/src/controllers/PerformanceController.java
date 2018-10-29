package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nateeubanks.entities.Performance;

import data.PerformanceDAO;

@RestController
public class PerformanceController {

    @Autowired
    PerformanceDAO dao;

    @RequestMapping(path = "ping", method = RequestMethod.GET)
    public String ping() {
        return "<h1>pong</h1>";
    }

    @RequestMapping(path = "indexPerformance", method = RequestMethod.GET)
    public List<Performance> indexPerformance() {
        return dao.indexPerformance();
    }

    @RequestMapping(path = "showPerformance", method = RequestMethod.GET)
    public Performance showPerformance(Integer id) {
        return dao.showPerformance(id);
    }

    @RequestMapping(path = "createPerformance", method = RequestMethod.POST)
    public Performance createPerformance(Performance p) {
        return dao.createPerformance(p);
    }

    @RequestMapping(path = "updatePerformance", method = RequestMethod.PUT)
    public Performance updatePerformance(@RequestBody Performance p) {
        return dao.updatePerformance(p);
    }

    @RequestMapping(path = "destroyPerformance", method = RequestMethod.DELETE)
    public Boolean destroyPerformance(Integer id) {
        return dao.destroyPerformance(id);
    }
}
