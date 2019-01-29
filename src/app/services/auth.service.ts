import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guest, Client } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl: string = "http://127.0.0.1:5000/api/v1/auth";

  constructor(private http: HttpClient) { }

  private auth(endpoint: string, data) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data)
  }

  public signup(data: Guest):Observable<Object> {
    return this.auth('signup', data)
  }

  public signin(data: Client):Observable<Object> {
    return this.auth('signin', data)
  }
}
