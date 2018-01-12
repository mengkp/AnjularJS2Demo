import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { rootRouter } from './appRouter';
import { SharedAreaComponent } from './shared-area/shared-area.component';
import {ForgetPwdComponent} from './forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPwdComponent,
    UserRegisterComponent,
    CompanyRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(rootRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
