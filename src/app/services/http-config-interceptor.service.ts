import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token: string = this.auth.getToken();

    if(token) {
      req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) })
    }

    if(!req.headers.has('content-type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') })
    }

    return next.handle(req);
  }
}
