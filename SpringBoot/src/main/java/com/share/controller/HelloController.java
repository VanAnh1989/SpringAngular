package com.share.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.share.farmer.model.TalkShow;
import com.share.farmer.model.User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
	static List<TalkShow> list = new ArrayList<>();
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

		if (user.getUser() != null) {
			return "successfull";
		} else {
			return "not done";
		}

	}
	@RequestMapping("/setTalkShow")
	public String setTalkShow(@RequestBody TalkShow talkShow) {
		list.add(talkShow);
		if (talkShow != null) {
			return "successfull";
		} else {
			return "not done";
		}

	}
	@RequestMapping("/getTalkShow")
    public List<TalkShow> getTalkShow() {
    	return list;
    }
}
