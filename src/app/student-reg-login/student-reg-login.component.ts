import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import '@cds/core/input/register.js';
import '@cds/core/button/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';
@Component({
  selector: 'app-student-reg-login',
  templateUrl: './student-reg-login.component.html',
  styleUrls: ['./student-reg-login.component.scss']
})
export class StudentRegLoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    } else {
      this.router.navigate(['/studentDetail']);
    }
  }
}
