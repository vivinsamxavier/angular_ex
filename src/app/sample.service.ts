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
  deleteEmployeedata(val:any){
    return this.http.post('http://localhost/libraryjson/deletemp.php', val);
  }
  reactiveForm(val:any){
    return this.http.post('http://localhost/libraryjson/updateemp.php', val);
}
  gugaeData(){
    return this.http.get('http://alensoft.in/cnh/CNH.php?option=shopFloor_d1');
  }
  box(){
    return this.http.get('http://alensoft.in/cnh/CNH.php?option=shopFloor_d1');
  }
layout(){
  return this.http.get('http://alensoft.in/cnh/CNH.php?option=shopFloor_d4');
}
reactiveForm1(val:any){
  return this.http.post('http://localhost/libraryjson/updateemp.php', val);
}

}

