import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-meetup-card",
  templateUrl: "./meetup-card.component.html",
  styleUrls: ["./meetup-card.component.scss"]
})
export class MeetupCardComponent {
  private _meetup: {};
  private _photo = "";
  startDate: "11/22/2019";

  @Input()
  set meetup(meetup: object) {
    this._meetup = meetup;
  }

  @Input()
  set photo(photo: string) {
    this._photo = photo;
  }

  get meetup(): object {
    return this._meetup;
  }

  get photo(): string {
    return this._photo;
  }
}
