import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { AfterlevelComponent } from './afterlevel/afterlevel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AdminloginComponent,
    AdminforgotpasswordComponent,
    ReportcardComponent,
    AfterlevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
