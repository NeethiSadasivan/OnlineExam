import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { AfterlevelComponent } from './afterlevel/afterlevel.component';
import { LoginComponent } from './login/login.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
const routes: Routes = [
  {path:'',component:StartpageComponent},
  {path:'Home',component:HomeComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'AdminForgotPassword',component:AdminforgotpasswordComponent},
  {path:'ReportCard',component:ReportcardComponent},
  {path:'AfterLevel',component:AfterlevelComponent},
  {path:'Login',component:LoginComponent},
  {path:'StartPage',component:StartpageComponent},
  {path:'AboutUs',component:AboutusComponent},
  {path:'UserLogin',component:UserloginComponent},
  {path:'Register',component:UserregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
