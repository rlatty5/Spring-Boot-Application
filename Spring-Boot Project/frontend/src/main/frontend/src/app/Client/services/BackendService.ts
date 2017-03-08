/**
 * Created by romarionewmanlatty on 2/22/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { Student } from '../model/student';

@Injectable()
export class BackendService {

  studentList:Student[] = [];
 
  constructor (private http: Http) {}

  addStudent (student:Student) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    
     let creds = JSON.stringify({
      name: student.name, email: student.email,
    phone: student.phone, college: student.college, major: student.major, GPA : student.gpa });

    
    
    console.log("Credentials" + creds);
    
    
    
    
     this.studentList.push(student);
        console.log('There are currently ' + this.studentList.length + " students registered");
    
    
    
    var heads = new Headers();
    
    heads.append('Content-Type', 'application/x-www-form-urlencoded');
    
    var params = 'json=' + creds;
 
    return this.http.post('/students', params, {
      headers: heads
    }).map(res => res.json());
 

   
  }
  
  getTime(){
    return this.http.get('http://date.jsontest.com').
      map(res => res.json());
  }
  
   private extractData(res: Response) {
    let body = res.json();
     console.log('Extracted data ' + body.data || { });
    return body.data || { };
  }
  
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getStudents():Promise<Student[]>{
    console.log('Still ' + this.studentList.length + " students registered");
    return Promise.resolve(this.studentList);
  }

}
