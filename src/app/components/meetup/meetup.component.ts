import { MeetupService } from '../../services/meetup.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss']
})
export class MeetupComponent implements OnInit {
  meetup;
  constructor(private route: ActivatedRoute, private http: MeetupService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.getMeetup(params.id)
      .subscribe(meetup => this.meetup = meetup);
    })
  }

}
