import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  router:Router;
  constructor() { }

  ngOnInit() {
  }


  /*toForgetPwd(){
    console.log(11);
    this.router.navigateByUrl("forgetPsw");
  }*/
}
