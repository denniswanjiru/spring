import { MeetupService } from '../services/meetup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-meetup',
  templateUrl: './create-meetup.component.html',
  styleUrls: ['./create-meetup.component.scss']
})
export class CreateMeetupComponent {
  data: object = {};
  start = "2019-01-09";

  constructor(private http: MeetupService, private router: Router) { }

  save(meetup: NgForm) {
    const [town] = meetup.value.location.split(',')
    this.data = {
      ...meetup.value,
      tags: [town, meetup.value.topic, meetup.value.type]
    }

    this.http.createMeetup(this.data)
    .subscribe(res => {
      this.router.navigate([''])
    })
  }

}
