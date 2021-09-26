import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { AfterlevelComponent } from './afterlevel/afterlevel.component';
import { LoginComponent } from './login/login.component';
import { StartpageComponent } from './startpage/startpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ListexamComponent } from './listexam/listexam.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  {path:'',component:StartpageComponent},
  {path:'Home',component:HomeComponent},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'ReportCard',component:ReportcardComponent},
  {path:'AfterLevel',component:AfterlevelComponent},
  {path:'Login',component:LoginComponent},
  {path:'StartPage',component:StartpageComponent},
  {path:'AboutUs',component:AboutusComponent},
  {path:'UserLogin',component:UserloginComponent},
  {path:'Register',component:UserregisterComponent},
  {path:'Forgotpassword',component:ForgotpasswordComponent},
  {path:'Listexam',component:ListexamComponent},
  {path:'Exam',component:ExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
