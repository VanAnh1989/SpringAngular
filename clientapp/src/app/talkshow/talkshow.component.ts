import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { DeclareData,UserTalk } from '../model/UserTalk'; 

@Component({
  selector: 'app-talkshow',
  templateUrl: './talkshow.html',
  styleUrls: ['./talkshow.css']
})
export class TalkshowComponent{
    talkShow : DeclareData = new DeclareData();
    content : string;
    sendData(){
        this.talkShow.userTalk.push(new UserTalk('MyTalk','10 : 20 12/11/2017',this.content));
        this.content="";
    }
}
