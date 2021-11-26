import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentRegFormComponent } from './student-reg-form/student-reg-form.component';
import { StudentRegLoginComponent } from './student-reg-login/student-reg-login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentRegFormComponent,
    StudentRegLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
