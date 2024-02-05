import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginReq:any={};
  constructor(private db: AngularFirestore,) {

   }

  ngOnInit() {

  }
  login(){
    this.db.collection("users").add(this.loginReq).then(res => {}, err => {})
  }

}
