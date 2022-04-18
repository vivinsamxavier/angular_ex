import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SampleService } from '../sample.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialogboxbutton',
  templateUrl: './dialogboxbutton.component.html',
  styleUrls: ['./dialogboxbutton.component.scss']
})
// Dialoge box
export class DialogboxbuttonComponent implements OnInit {
   
  public output:any;
  public data:any;
  public Employeeadd: any;
  public firstname:any;
  public employeeid:any;
  public lastname:any;
  public email:any;
  public phone_number:any;
  public hire_date:any;
  public designation:any;
  public salary:any;


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,public dialogRef: MatDialogRef<DialogboxbuttonComponent>,
    private sample:SampleService,private router: Router,private route: ActivatedRoute) { }



    reactiveForm  = new FormGroup({
      employee_id: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      phone_number: new FormControl(),
      hire_date: new FormControl(),
      designation: new FormControl(),
      salary: new FormControl()
    })
  ngOnInit(): void{
    
    console.log(this.dialogData);
    this.employeeid = this.dialogData['data']['employee_id'];
    this.firstname = this.dialogData['data']['first_name'];
    this.lastname = this.dialogData['data']['last_name']; 
    this.email = this.dialogData['data']['email']; 
    this.phone_number = this.dialogData['data']['phone_number']; 
    this.hire_date = this.dialogData['data']['hire_date'];  
    this.designation = this.dialogData['data']['designation']; 
    this.salary = this.dialogData['data']['salary'];  
  }


  
  
  onNoClick(): void {
    this.dialogRef.close();
    
  }

}
