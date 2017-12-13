import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { DeclareData } from '../model/UserTalk'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['../app.component.css','./content.css']
})
export class ContentComponent{
    content : string="done";
    usertalk : DeclareData = new DeclareData();
    constructor(){
      this.setTextEffect();
    }
    setTextEffect(){
      let textNumber = 0;
      setInterval(function(){
        document.getElementsByClassName("ct-l-text")[0].innerHTML = ""+textNumber++;
      },1000);
    }

}


