import  { LoginComponent } from "./login/login.component";
import {ForgetPwdComponent} from './forget-pwd/forget-pwd.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {CompanyRegisterComponent} from './company-register/company-register.component';
export  const  rootRouter=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgetPsw',
    component:ForgetPwdComponent
  },
  {
    path:'userRegister',
    component:UserRegisterComponent
  },
  {
    path:'companyRegister',
    component:CompanyRegisterComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
]
