import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TalkShow } from '../model/UserTalk';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UserSerVice } from '../service/UserService';

@Component({
    selector: 'app-talkshow',
    templateUrl: './talkshow.html',
    styleUrls: ['./talkshow.css']
})
export class TalkshowComponent {
    talkShow: TalkShow[] = [];
    account: string = "MyTalk";
    content: string;
    classIcon: string = "hide-list-icon";
    urls: string[] = ['./assets/smile.png', './assets/face.png', './assets/laughing.png', './assets/smile.png', './assets/face.png', './assets/laughing.png', './assets/smile.png', './assets/face.png', './assets/laughing.png'];
    iconChoise: string = "";
    http: HttpClient
    constructor(http: HttpClient ,private service : UserSerVice) {
        this.http = http;
        setInterval(() => {
            this.http.get<TalkShow[]>("/getTalkShow").subscribe(data => {
                if (this.talkShow.length != data.length) {
                    this.talkShow = data;
                    this.sortTalkShow();
                }
            });
        }, 2000);
    }
    getFunction() {
        console.log("done");
    };

    sendData() {
        let talkShow = new TalkShow();
        talkShow.id = this.talkShow.length+1;
        talkShow.user = this.service.user.user;
        talkShow.icon = this.iconChoise;
        talkShow.color = "my-color";
        talkShow.content = this.content;
        this.http.post<TalkShow>('/setTalkShow',talkShow).subscribe(data => { }, (error: HttpErrorResponse) => {
            
        });
        this.sortTalkShow();
        this.content = "";
        this.iconChoise = "";
    }

    sortTalkShow() {
        this.talkShow.sort((a, b) => {
            return a.id > b.id ? -1 : 1;
        });
    }

    checkFile() {
        document.getElementById("chooseFile").click();
    }

    setFileS(file: HTMLInputElement) {
        console.log(file.files[0].size);
        console.log(file.files[0].type);
    }

    openIconList(type: string) {
        if (type === 'open') {
            this.classIcon = "display-list-icon";
        } else {
            this.classIcon = "hide-list-icon";
            console.log("zoker");
        }
    }

    chooseIcon(icon) {
        this.iconChoise = icon;
    }
}
