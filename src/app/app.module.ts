import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatRippleModule, MatInputModule, MatListModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';

const modules = [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatListModule
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...modules
  ],

  exports: [...modules],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
