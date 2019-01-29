import { SigninComponent } from './signin/signin.component';
import { CreateMeetupComponent } from './create-meetup/create-meetup.component';
import { BrowseComponent } from './browse/browse.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetupComponent } from './meetup/meetup.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "browse",
    component: BrowseComponent,
    pathMatch: 'full'
  },
  {
    path: "create/meetup",
    component: CreateMeetupComponent,
    pathMatch: 'full'
  },
  {
    path: "meetup/:id",
    component: MeetupComponent,
    pathMatch: 'full'
  },
  {
    path: "account",
    component: SigninComponent,
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
