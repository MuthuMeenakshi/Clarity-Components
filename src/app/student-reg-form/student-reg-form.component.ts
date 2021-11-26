import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import '@cds/core/input/register.js';
import '@cds/core/button/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/select/register.js';
import '@cds/core/icon/register.js';
@Component({
  selector: 'app-student-reg-form',
  templateUrl: './student-reg-form.component.html',
  styleUrls: ['./student-reg-form.component.scss']
})
export class StudentRegFormComponent implements OnInit {
  regForm!: FormGroup;
  majorList: { value: number; name: string; }[];
  courseList: { value: number; name: string; }[];
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['female', Validators.required],
      course: ['', Validators.required],
      major: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    });
    this.courseList = [
      { value: 1, name: "B.Tech" },
      { value: 2, name: "B.E" }
    ]
    this.majorList = [
      { value: 1, name: "Civil" },
      { value: 2, name: "Mechanical" },
      { value: 3, name: "EEE" }
    ]
  }

  ngOnInit() {
  }
  get f() { return this.regForm.controls; }
  submit() {
    this.submitted = true;
    this.regForm.markAllAsTouched();
    if (this.regForm.invalid) {
      return
    }
  }
  onReset() {
    this.submitted = false;
    this.regForm.reset();
  }
}
