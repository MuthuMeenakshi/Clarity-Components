import { Component, OnInit } from '@angular/core';
import { StudentDetail } from './student.model';
import { studentData } from './student.data';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  studentDetails: any;
  selected: StudentDetail[] = [];
  constructor() { }

  ngOnInit() {
    this.studentDetails = studentData;
  }

}
