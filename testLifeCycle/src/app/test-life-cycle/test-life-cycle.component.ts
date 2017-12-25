import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-life-cycle',
  templateUrl: './test-life-cycle.component.html',
  styleUrls: ['./test-life-cycle.component.css']
})
export class TestLifeCycleComponent implements OnInit {

  name : String ="hehhe";
  constructor() { }

  ngOnInit() {
  }

}
