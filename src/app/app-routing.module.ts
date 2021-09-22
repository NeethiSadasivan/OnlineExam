import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { AfterlevelComponent } from './afterlevel/afterlevel.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'AdminForgotPassword',component:AdminforgotpasswordComponent},
  {path:'ReportCard',component:ReportcardComponent},
  {path:'AfterLevel',component:AfterlevelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
