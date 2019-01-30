import { Router } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  meetups;

  constructor(private meetupService: MeetupService, private router: Router) {}

  ngOnInit() {
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl(this.router.url).then(() => {
      this.router.onSameUrlNavigation = 'ignore';
    });

    this.meetupService.getMeetups()
    .subscribe((meetups) => {
      this.meetups = meetups;
    })
  }
}
