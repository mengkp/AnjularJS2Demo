import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event',
  templateUrl: './test-event.component.html',
  styleUrls: ['./test-event.component.css']
})
export class TestEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.btnClick();
  }

  public btnClick():void{
    alert("hh");
  }

}
