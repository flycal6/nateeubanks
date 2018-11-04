package security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.nateeubanks.entities.User;

public class DataSecurityInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        // check for a 'user' in session
        Object objUser = request.getAttribute("user");
        if (objUser != null) {
            User user = (User) objUser;

            // compare ID from URL to userID, to prevent seeing other user's data
            Integer id = Integer.valueOf(request.getRequestURI().split("/")[4]);
            if (id == user.getId()) {
                return true;
            }
        }
        response.sendRedirect("nateeubanksREST/rest/auth/unauthorized");
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        // TODO Auto-generated method stub

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        // TODO Auto-generated method stub

    }

}
