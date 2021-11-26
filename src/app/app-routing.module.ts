import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentRegFormComponent } from './student-reg-form/student-reg-form.component';
import { StudentRegLoginComponent } from './student-reg-login/student-reg-login.component';

const routes: Routes = [
  { path: '', component: StudentRegLoginComponent },
  { path: 'register', component: StudentRegFormComponent },
  { path: 'studentDetail', component: StudentTableComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
