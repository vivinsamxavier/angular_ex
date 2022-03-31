import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-bookdatas',
  templateUrl: './bookdatas.component.html',
  styleUrls: ['./bookdatas.component.scss']
})
export class BookdatasComponent implements OnInit {
  public Employeedata:any;
  constructor(private sample:SampleService) { }

  ngOnInit(): void {

    this.sample.getEmployeedata().subscribe((data: any)=>{
      
      this.Employeedata=data;
      console.log(this.Employeedata);
      }
      );
  }

}
