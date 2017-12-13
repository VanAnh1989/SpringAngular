import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DeclareData, UserTalk } from '../model/UserTalk';

@Component({
    selector: 'app-talkshow',
    templateUrl: './talkshow.html',
    styleUrls: ['./talkshow.css']
})
export class TalkshowComponent {
    talkShow: DeclareData = new DeclareData();
    account : string = "MyTalk";
    content: string;
    classIcon : string = "hide-list-icon";
    urls : string[] = ['./assets/smile.png','./assets/face.png','./assets/laughing.png','./assets/smile.png','./assets/face.png','./assets/laughing.png','./assets/smile.png','./assets/face.png','./assets/laughing.png'];
    iconChoise : string ="";
    constructor() {
        this.sortTalkShow();
    }
    sendData() {
        this.talkShow.userTalk.push(new UserTalk(this.talkShow.userTalk.length, 'MyTalk', '12/11/2017 10:20 ', this.content, "my-color",this.iconChoise));
        this.sortTalkShow();
        this.content = "";
        this.iconChoise = "";
    }
    sortTalkShow() {
        this.talkShow.userTalk.sort((a, b) => {
            return a.id > b.id ? -1 : 1;
        });
    }

    checkFile(){
        document.getElementById("chooseFile").click(); 
    }

    setFileS(file : HTMLInputElement){
        console.log(file.files[0].size);
        console.log(file.files[0].type);
    }

    openIconList(type : string){
        if(type === 'open'){
            this.classIcon = "display-list-icon";
        }else{
            this.classIcon = "hide-list-icon";
            console.log("zoker");
        }
    }

    chooseIcon(icon){
        this.iconChoise = icon;
    }
}

