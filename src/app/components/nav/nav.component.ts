import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
  }

}
