import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngif',
  templateUrl: './test-ngif.component.html',
  styleUrls: ['./test-ngif.component.css']
})
export class TestNgifComponent implements OnInit {

  show:boolean;
  constructor() {
    this.show=true;
  }

  ngOnInit() {
  }

  public ifShow():void{
    this.show=!this.show;
  }
}
