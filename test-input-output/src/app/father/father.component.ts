import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  public  data=[1,2,3];
  constructor() { }
  ngOnInit() {
  }

  del(index){
    console.log(index);
    this.data.splice(index,1);
  }
}
