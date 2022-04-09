import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  public chart :any;
  public XAxis:any;
  public marker: any;
  
  public tooltip: Object = {
    enable: true
};

  constructor(private sample:SampleService) { }
  public pointRender(args:any,data:any):void{
  
    args.fill=data[args.point.index]['trendcolor'];
    this.marker = { visible: true, width: 3, height: 3, shape: 'Diamond'};
  };
  ngOnInit(): void {
    this.layoutData();
    this.XAxis={valueType:'Category'};
    
  }
  layoutData(){
    this.sample.layout().subscribe((data: any)=>{    
    this.chart=data;
    console.log(this.chart);
        }
        );
     }
  

}
