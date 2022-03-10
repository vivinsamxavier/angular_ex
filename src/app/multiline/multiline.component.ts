import { Component, OnInit } from '@angular/core';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-multiline',
  templateUrl: './multiline.component.html',
  styleUrls: ['./multiline.component.scss']
})
export class MultilineComponent implements OnInit {

  public primaryXAxis: any;
  public chartData: any[] = [];
  public primaryYAxis: any;
  public title: any;
  public chartArea: Object = {
    border: {
        width: 0
    }
}
  public tooltip: Object = {
    enable: true
};


  constructor() { }

  ngOnInit(): void {

    this.title = '';
      this.chartData = [
          { month: 'Jan',   y1: 100,y2:110 },  { month: 'Feb',   y1: 652,y2:340 },
          { month: 'Mar',   y1: 250,y2:120 },  { month: 'Apr',   y1: 651,y2:345 },
          { month: 'May',   y1: 350,y2:130 },  { month: 'Jun',   y1: 651,y2:384 },
          { month: 'Jul',   y1: 150,y2:140 },  { month: 'Aug',   y1: 251,y2:324 },
          { month: 'Sep',   y1: 110,y2:150 },  { month: 'Oct',   y1: 361,y2:345 },
          { month: 'Nov',   y1: 450,y2:160 },  { month: 'Dec',   y1: 471,y2:374 }
      ];
      this.primaryXAxis = {
          valueType: 'Category'
      };
      this.primaryYAxis = {
          labelFormat: '${value}'
      };

  }

}
