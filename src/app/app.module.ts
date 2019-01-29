import { MeetupService } from './meetup.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MeetupCardComponent } from './meetup-card/meetup-card.component';
import { BrowseComponent } from './browse/browse.component';
import { MeetupComponent } from './meetup/meetup.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MeetupCardComponent,
    BrowseComponent,
    MeetupComponent,
    CreateMeetupComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    MeetupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
