import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {

   }
   getStudent(){
    return this.http.get('http://localhost/libraryjson/getdata.php');

  }
  getEmployeedata(){
    return this.http.get('http://localhost/libraryjson/getemp.php');
  }
  Employee(val:any){
    return this.http.post('http://localhost/libraryjson/addemp.php', val);
  }
}


