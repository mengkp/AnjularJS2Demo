import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  values;

  @Output()
  childEve=new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  outPutIndex(index){
    console.log(index);
    this.childEve.emit(index);
  }

}
