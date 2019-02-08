import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  hidePassword = true;
  hideConfirmPassword = true;

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    companyName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),   
    checked: new FormControl('')
  });


  
  onSubmit() {
    console.log("HERE");
    console.warn(this.signupForm.value);
    
   this.signupService().submitSignup(this.signupForm)
     .subscribe(() => this.goBack());
     
  }
  
  constructor() { }

  ngOnInit() {



  }

}
