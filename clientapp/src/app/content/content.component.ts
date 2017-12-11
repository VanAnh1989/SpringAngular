import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { HomeDetails } from '../model/HomeDetails'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['../app.component.css','./content.css']
})
export class ContentComponent{
    details : HomeDetails = new HomeDetails();
    pagings : number[] = [1,2,3,4,5];
}
