import { MeetupService } from '../../services/meetup.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  meetups;

  constructor(private meetupService: MeetupService) {}

  ngOnInit() {
    this.meetupService.getMeetups()
    .subscribe((meetups) => {
      this.meetups = meetups;
    })
  }
}
