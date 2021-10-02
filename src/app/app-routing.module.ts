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
import { AdminSingleStudentComponent } from './admin-single-student/admin-single-student.component';
import { AdminAddQuestionComponent } from './admin-add-question/admin-add-question.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { QuestionsComponent } from './questions/questions.component';
import { ExamwishesComponent } from './examwishes/examwishes.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TechnologiesComponent } from './technologies/technologies.component';

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
  {path:'Resetpassword',component:ResetpasswordComponent},
  {path:'Listexam',component:ListexamComponent},
  {path:'Exam',component:ExamComponent},
  {path:'singleStudent',component:AdminSingleStudentComponent},
  {path:'AddQues',component:AdminAddQuestionComponent},
  {path:'AdminHome',component:AdminHomeComponent},
  {path:'Questions',component:QuestionsComponent},
  {path:'Examwishes',component:ExamwishesComponent},
  {path:'Technologies',component:TechnologiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
