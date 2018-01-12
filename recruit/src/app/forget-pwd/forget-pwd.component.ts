import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {

  public router:Router;
  constructor() { }

  ngOnInit() {
  }

  toLogin(){
    console.log(11);
    this.router.navigateByUrl('login');
  }
}
