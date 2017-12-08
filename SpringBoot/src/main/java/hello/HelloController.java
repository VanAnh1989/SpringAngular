package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
    
    @RequestMapping("/")
    public ModelAndView index() {
    	System.out.print("done");
    	System.out.print("OK");
    	
        return new ModelAndView("index");
    }
    
}
