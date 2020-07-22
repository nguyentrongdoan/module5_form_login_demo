import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {RouterModule} from "@angular/router";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {RoutingModule} from "./router/routing.module";
import { DemoCompComponent } from './demo-comp/demo-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    DemoCompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
