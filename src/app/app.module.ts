import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
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
import { AdminAddQuestionComponent } from './admin-add-question/admin-add-question.component';
import { AdminStudentInfoComponent } from './admin-student-info/admin-student-info.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSingleStudentComponent } from './admin-single-student/admin-single-student.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AdminloginComponent,
    ReportcardComponent,
    AfterlevelComponent,
    LoginComponent,
    StartpageComponent,
    AboutusComponent,
    UserloginComponent,
    UserregisterComponent,
    ForgotpasswordComponent,
    ListexamComponent,
    ExamComponent,
    AdminAddQuestionComponent,
    AdminStudentInfoComponent,
    AdminHomeComponent,
    AdminSingleStudentComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
