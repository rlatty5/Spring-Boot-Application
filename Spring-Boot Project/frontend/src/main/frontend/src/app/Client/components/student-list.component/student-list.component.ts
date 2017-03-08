
import {Component, OnInit} from '@angular/core';

import {BackendService} from "../../services/BackendService";
import {Student} from "../../model/student";



@Component({
  moduleId: module.id,
  selector: 'student-list',
  templateUrl: 'student-list.component.html',
  styleUrls: ['student-list.component.css']
})
export class StudentList implements OnInit{


  studentList: Student[] = [];


  constructor(private backend: BackendService){

  }

  ngOnInit(){

    this.backend.getStudents().then(students => this.studentList = students);
    console.log("Student list Size table: " + this.studentList.length);
  }



}
