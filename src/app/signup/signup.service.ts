import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) { }
  usersUrl = 'http://34.73.175.96:3009/api/users';
  
  submitSignup (signupForm: SignupForm): Observable<SignupForm> {
  return this.http.post<signupForm>(this.heroesUrl, hero, httpOptions)

  }
}


