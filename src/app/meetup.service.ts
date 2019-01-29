import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  readonly baseUrl: string = "http://127.0.0.1:5000/api/v1";

  constructor(private http: HttpClient) { }

  public getMeetups(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/meetups`)
  }

  public getMeetup(id: string) {
    return this.http.get(`${this.baseUrl}/meetups/${id}`)
  }

  public createMeetup(data: object): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this.http.post(`${this.baseUrl}/meetups`, data, { headers })
  }
}