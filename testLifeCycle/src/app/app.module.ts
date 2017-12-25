import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestLifeCycleComponent } from './test-life-cycle/test-life-cycle.component';
import { ChildComponent } from './test-life-cycle/child/child.component';
import { TestNgOnChangeComponent } from './test-ng-on-change/test-ng-on-change.component';
import { Child1Component } from './test-ng-on-change/child1/child1.component';



@NgModule({
  declarations: [
    AppComponent,
    TestLifeCycleComponent,
    ChildComponent,
    TestNgOnChangeComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
