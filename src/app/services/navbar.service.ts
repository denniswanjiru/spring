import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean = true;
  isAuthenticated: boolean = false;

  constructor(private auth: AuthService) {
    this.isAuthenticated = this.auth.authenticated();
  }

  public hide(): void {
    this.visible = false;
  }
  public show(): void {
    this.visible = true;
  }
}
