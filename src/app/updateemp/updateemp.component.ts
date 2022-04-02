import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SampleService } from '../sample.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.scss']
})
export class UpdateempComponent implements OnInit {
  public Employeeadd: any;
  public output:any;
  public data:any;
  constructor( private sample:SampleService,private router: Router,private route: ActivatedRoute,public fb: FormBuilder ) {
    this.Employeeadd = this.fb.group({
      'first_name' : ['',[Validators.required]],
      'last_name' : ['',[Validators.required]],
      'email' : ['',[Validators.required]],
      'phone_number' : ['',[Validators.required]],
      'hire_date' : ['',[Validators.required]],
      'designation' : ['',[Validators.required]],
      'salary' : ['',[Validators.required]]
     
      
    })
   }

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

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params:any)=>{
     
      this.data = JSON.parse(params.data);
      this.Employeeadd = this.data;
      console.log(this.data);
    })
    this.reactiveForm.setValue(this.data);
  }


  Up(){
    this.output = this.reactiveForm.value;
    console.log(this.output);
    this.sample.reactiveForm(this.output).subscribe((data: any)=>{
    console.log(data);


    this.router.navigateByUrl('/bookdatas');
      
    });

  }
}
