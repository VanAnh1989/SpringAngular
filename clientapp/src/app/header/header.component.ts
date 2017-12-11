import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent {

  constructor(private http : HttpClient){};
  logIn(){
    this.http.get<string>("/getUser").subscribe(data => {
      alert(data);
    },(err : HttpErrorResponse) => {
      console.log(err.error.text);
    });   
  }
  registerUser(){
    let user : User = new User();
    user.user = "VanAnh";
    user.pass = "12345"
    this.http.post<string>("/registerUser",user).subscribe(data => {} , (err : HttpErrorResponse) => {
      console.log(err.error.text);
    });
  }
}
export class User{
  user : string;
  pass : string;
}