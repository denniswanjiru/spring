import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { MeetupComponent } from './components/meetup/meetup.component';
import { AccountComponent } from './components/account/account.component';
import { CreateMeetupComponent } from './components/create-meetup/create-meetup.component';

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
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: "meetup/:id",
    component: MeetupComponent,
    pathMatch: 'full'
  },
  {
    path: "account",
    component: AccountComponent,
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
