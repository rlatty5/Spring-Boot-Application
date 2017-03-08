/**
 * Created by romarionewmanlatty on 2/21/17.
 */
/**
 * Created by romarionewmanlatty on 2/21/17.
 */
import { Component } from '@angular/core';

import {BackendService} from "../../services/BackendService";
import {Student} from "../../model/student";
import {Router} from "@angular/router";



@Component({
  moduleId: module.id,
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']

})
export class SignUpComponent {

  getData:string;
  postData:string;
  name:string = ''; // name TextField
  email:string; // email TextField
  phone:string; // phone TextField
  id:number; // id TextField might be auto generated for database
  currentStudent: Student;
  invalidMajor: boolean;
  major: string;
  gpa: string;
  college: string;



  majors = ['--Select a Major--','Computer Science', 'Communications', 'Government/Political Science', 'Business',
    'Economics', 'English Language and Literature', 'Psychology', 'Nursing', 'Engineering', 'Biology'];

  constructor(private backend:BackendService, private router:Router){

  }

  submit(){
    console.log('Name is: ' + this.name);
    console.log('major is: ' + this.major);
    if(this.major == '--Select a Major--'){
      this.invalidMajor = true;
      console.log('should show error');
      return;
    }

    if(this.name){
      this.currentStudent = new Student(0, this.name, this.email, this.college, this.major, this.gpa, this.phone);
      console.log('Submitted: ' + this.name);
      console.log('email: ' + this.email);
      console.log('major: ' + this.major);
      console.log('gpa: ' + this.gpa);
      console.log('phone: ' + this.phone);

      this.backend.addStudent(this.currentStudent).
        subscribe( data => this.getData = JSON.stringify(data),
           error => alert(error),
            () => console.log("Finished Get"))
      
      this.backend.getTime().
        subscribe( data => this.postData = JSON.stringify(data),
           error => alert(error),
            () => console.log("Finished Post"))

      this.router.navigate(['ViewAll']);
    }

  }

}


