import { Component , ViewChild , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['../app.component.css','./content.css']
})
export class ContentComponent{
    content : string="done";
    constructor(){
      this.setTextEffect();
    }
    setTextEffect(){
      let textNumber = 0;
    }

}


