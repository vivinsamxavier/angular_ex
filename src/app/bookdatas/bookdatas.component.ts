import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-bookdatas',
  templateUrl: './bookdatas.component.html',
  styleUrls: ['./bookdatas.component.scss']
})
export class BookdatasComponent implements OnInit {
  public Employeedata:any;
  public deleteEmployeedata:any;
  public Employeeadd:any;
  public output:any;
  constructor(private sample:SampleService,private router: Router) { }

  ngOnInit(): void {
  this.getData();
  }
  getData(){
  this.sample.getEmployeedata().subscribe((data: any)=>{    
  this.Employeedata=data;
  console.log(this.Employeedata);
      }
      );
   }
  deleteData(val:any){
  console.log(val);
  this.sample.deleteEmployeedata({'id':val}).subscribe((data: any)=>{   
          this.getData();
   });
  }
  edit(data:any){
   

    this.router.navigate(
      ['/Up'],
      { queryParams: { data: JSON.stringify(data) } }
    )

  }
  
}
