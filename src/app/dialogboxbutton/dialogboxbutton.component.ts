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
   

  public data:any;

  public Firstname:any;
  public Employeeid:any;
  public Lastname:any;
  public Email:any;
  public Phone_number:any;
  public Hire_date:any;
  public Designation:any;
  public Salary:any;
  public output:any;
  public reactiveForm1:any;
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
    this.Employeeid = this.dialogData['data']['employee_id'];
    this.Firstname = this.dialogData['data']['first_name'];
    this.Lastname = this.dialogData['data']['last_name']; 
    this.Email = this.dialogData['data']['email']; 
    this.Phone_number = this.dialogData['data']['phone_number']; 
    this.Hire_date = this.dialogData['data']['hire_date'];  
    this.Designation = this.dialogData['data']['designation']; 
    this.Salary = this.dialogData['data']['salary'];  
  }
  
  Up(){
    this.output = this.reactiveForm.value;
    console.log(this.output);
    this.sample.reactiveForm1(this.output).subscribe((data: any)=>{
    console.log(data);
    this.dialogRef.close();

      
    });

  }

  
  
  onNoClick(): void {
    this.dialogRef.close();
    
  }

}
