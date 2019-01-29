import { AuthService } from './../services/auth.service';
import { NavbarService } from '../services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  signin: boolean = true;
  user: object = {};

  constructor(public nav: NavbarService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.nav.hide();
  }

  toggleSignin() {
    this.signin = !this.signin;
  }

  save(user: NgForm) {
    if(this.signin) {
      this.auth.signin({ ...user.value })
        .subscribe(data => {
          if(data['token']) {
            document.cookie = `jwt_token=${data['token']}`;
            this.nav.show();
            this.router.navigate(['']);
          }
        })
    } else {
      this.auth.signup({...user.value})
      .subscribe(data => {
        if (data['message']) {
          this.signin = true;
        }
      })
    }
  }

}
