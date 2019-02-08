import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { SignupService } from '../signup.service';

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
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),   
    checked: new FormControl('', [Validators.required])
  }, { validators: passwordMatchValidator });

  onSubmit() {
    this.signupService.submitSignup(this.signupForm);
  }
  



  constructor(private signupService: SignupService) { }

  ngOnInit() {

  }

}

const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password').value;
  const confirmPass = control.get('confirmPassword').value;
  return pass === confirmPass ? null : { passwordsNotEqual: true };
};
