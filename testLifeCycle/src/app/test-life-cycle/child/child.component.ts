import { Component, OnInit , Input ,OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  public text: string ;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:{[propName:string]:SimpleChange}){
    console.dir(changes['text']);
  }
  changeText(){
    this.text="改变";
  }

}
