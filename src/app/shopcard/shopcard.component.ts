import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-shopcard',
  templateUrl: './shopcard.component.html',
  styleUrls: ['./shopcard.component.scss']
})
export class ShopcardComponent implements OnInit {
  public card :any;

  constructor(private sample:SampleService) { }

  ngOnInit(): void {
    this.box();
  }
  
  box(){
    this.sample.box().subscribe((data: any)=>{    
    this.card=data;
    console.log(this.card);
        }
        );
     }

}
