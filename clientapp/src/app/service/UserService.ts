import { Injectable } from '@angular/core';
import { User } from '../model/UserTalk';

@Injectable()
export class UserSerVice{
        user : User = new User();
        getUser() : User{
            return this.user;
        } 
        setUser(user : string , pass : string) : void{
            this.user.user = user;
            this.user.pass = pass;
        }
}