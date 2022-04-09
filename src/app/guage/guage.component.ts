import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-guage',
  templateUrl: './guage.component.html',
  styleUrls: ['./guage.component.scss']
})
export class GuageComponent implements OnInit {
  public circular :any;

  constructor(private sample:SampleService) { }

  ngOnInit(): void {
    this.gugae();
  }
  

  gugae(){
    this.sample.gugaeData().subscribe((data: any)=>{    
    this.circular=data;
    console.log(this.circular);
        }
        );
     }

     public cap: Object = {
      radius: 8,
      border: { width: 0 }
  };
   public tail: Object = {
      length: '25%',
}

public ticks: Object = {
  width: 0
};
public lineStyle: Object = {
  width: 8
};

public labelStyle: Object = {
  font: {
      fontFamily: 'Roboto',
      size: '12px',
      fontWeight: 'Regular'
  },
  offset: -5
};
public pointerCap: Object = {radius: 7};


}