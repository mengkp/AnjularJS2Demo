import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import  { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import  { FontResizerComponent } from './test-twoway-binding/font-resizer/font-resizer.component';
import  { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';
import { TestEventComponent } from './test-event/test-event.component';
import { TestNgifComponent } from './test-ngif/test-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInterpolationComponent,
    FontResizerComponent,
    TestTwowayBindingComponent,
    TestEventComponent,
    TestNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
