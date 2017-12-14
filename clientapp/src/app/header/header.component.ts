import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UserSerVice } from '../service/UserService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['../app.component.css'],

})
export class HeaderComponent {

  constructor(private http: HttpClient, private service: UserSerVice, private matdialog: MatDialog) { };

  logIn() {
    this.http.get<string>("/getUser").subscribe(data => {
      alert(data);
    }, (err: HttpErrorResponse) => {
      console.log(err.error.text);
    });
  }

  registerUser() {
    this.service.setUser("VanAnh", "12345");
    this.http.post<string>("/registerUser", this.service.user).subscribe(data => { }, (err: HttpErrorResponse) => {
      console.log(err.error.text);
    });
  }

  openDialogRegister(): void {
    let dialogRef = this.matdialog.open(DialogRegister, {
      width: '500px',
      height: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: "dialog-register",
  templateUrl: './dialog-register.html',
})
export class DialogRegister {

  constructor(public dialogref: MatDialogRef<DialogRegister>) { }
  onNoClick() {
    this.dialogref.close();
  }

}