import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.scss']
})
export class StudentdataComponent implements OnInit {
  public studData:any;

  constructor(private sample:SampleService) { }

  ngOnInit(): void {
    this.sample.getStudent().subscribe((data: any)=>{
    //console.log(data);
    this.studData=data;
    console.log(this.studData);
    }
    );
  }

}
