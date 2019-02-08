import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatRippleModule, MatInputModule, MatListModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { signupReducer } from './signup.reducer';
import { HttpClientModule } from '@angular/common/http';

const modules = [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatListModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     StoreModule.forRoot({ signup: signupReducer }),
    ...modules
  ],

  exports: [...modules],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
