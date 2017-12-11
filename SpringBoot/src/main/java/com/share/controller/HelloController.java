package com.share.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.share.farmer.model.User;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
    
    @RequestMapping("/")
    public ModelAndView index() {
        return new ModelAndView("index");
    }
    
    @RequestMapping("/getUser")
    public String getUser() {
    	System.out.println("done");
    	return "done";
    }
    @RequestMapping("/registerUser")
    public String registerUser(@RequestBody User user) {
    	System.out.println(user.getUser());
    	System.out.println(user.getPass());
    	
    	if(user.getUser() != null) {
    		return "successfull";
    	}else {
    		return "not done";
    	}
    	
    }
}
