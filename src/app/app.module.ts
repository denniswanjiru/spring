import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// services -> modules and guards
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NavbarService } from './services/navbar.service';
import { MeetupService } from './services/meetup.service';

// components
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { MeetupComponent } from './components/meetup/meetup.component';
import { BrowseComponent } from './components/browse/browse.component';
import { AccountComponent } from './components/account/account.component';
import { MeetupCardComponent } from './components/meetup-card/meetup-card.component';
import { CreateMeetupComponent } from './components/create-meetup/create-meetup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MeetupCardComponent,
    BrowseComponent,
    MeetupComponent,
    CreateMeetupComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    MeetupService,
    NavbarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
