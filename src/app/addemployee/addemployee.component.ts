import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from '../sample.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  public Employee: any;
  public output:any;

  constructor(public fb: FormBuilder, private sample:SampleService,private router: Router) 
  {
    this.Employee = this.fb.group({
    'Employee_id' : ['',[Validators.required]],
    'First_Name' : ['',[Validators.required]],
    'Last_Name' : ['',[Validators.required]],
    'Email' : ['',[Validators.required]],
    'Phone_Number' : ['',[Validators.required]],
    'hire_date' : ['',[Validators.required]],
    'designation' : ['',[Validators.required]],
    'salary' : ['',[Validators.required]]
    
  })

}

  ngOnInit(): void {


    
  }
  Add(){
    this.output = this.Employee.value;
    console.log(this.output);
    this.sample.Employee(this.output).subscribe((data: any)=>{
    console.log(data);


    this.router.navigateByUrl('/bookdatas');
      
    });

  }
 



}
