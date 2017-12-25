import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-on-change',
  templateUrl: './test-ng-on-change.component.html',
  styleUrls: ['./test-ng-on-change.component.css']
})
export class TestNgOnChangeComponent implements OnInit {

  public  userName:string="默认用户1";
  public  userObj:any={userName:"默认用户"};

  constructor() { }

  ngOnInit() {
  }


}
