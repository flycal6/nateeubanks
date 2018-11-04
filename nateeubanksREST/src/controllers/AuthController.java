package controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nateeubanks.entities.User;

import data.AuthDao;

@RestController
@RequestMapping(path = "/auth")
public class AuthController {

    @Autowired
    private AuthDao authDao;

    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public User register(HttpSession session, @RequestBody User u, HttpServletResponse res) {
        User user = authDao.register(u);
        if (user != null) {
            session.setAttribute("user", user);
            res.setStatus(201);
            return user;
        }

        res.setStatus(422);
        return null;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public User login(HttpSession session, User u, HttpServletResponse res) {
        User user = authDao.login(u);
        if (user != null) {
            session.setAttribute("user", user);
            return user;
        }
        res.setStatus(401);
        return null;
    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public Boolean logout(HttpSession session, HttpServletResponse res) {
        session.removeAttribute("user");
        if (session.getAttribute("user") == null) {
            return true;
        }
        return false;
    }

    @RequestMapping(path = "/unauthorized")
    public String unauthorized(HttpServletResponse res) {
        res.setStatus(401);
        return "Unauthorized";
    }
}
