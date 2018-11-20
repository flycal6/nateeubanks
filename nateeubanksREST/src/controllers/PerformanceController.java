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
@RequestMapping(path = "performance/")
public class PerformanceController {

    @Autowired
    PerformanceDAO dao;

    @RequestMapping(path = "ping", method = RequestMethod.GET)
    public String ping() {
        return "<h1>pong</h1>";
    }

    @RequestMapping(path = "index", method = RequestMethod.GET)
    public List<Performance> index() {
        return dao.index();
    }

    @RequestMapping(path = "show", method = RequestMethod.GET)
    public Performance show(Integer id) {
        return dao.show(id);
    }

    @RequestMapping(path = "create", method = RequestMethod.POST)
    public Performance create(Performance p) {
        return dao.create(p);
    }

    @RequestMapping(path = "update", method = RequestMethod.PUT)
    public Performance update(@RequestBody Performance p) {
        return dao.update(p);
    }

    @RequestMapping(path = "destroy", method = RequestMethod.DELETE)
    public Boolean destroy(Integer id) {
        return dao.destroy(id);
    }
}
