import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  signupFormURL = "http://34.73.175.96:3009/api/users";
  
  constructor(private http:HttpClient) { }
  
  submitSignup(formData): void {
    const formValues = formData.value;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

   let obs = this.http.post(this.signupFormURL, formValues, httpOptions)
   obs.subscribe(()=>(console.log("got response")));  
/*    this.courses$ = this.http
    .get("/courses.json", {params})
    .do(console.log)
    .map(data => _.values(data))*/
    
    
  }

}
