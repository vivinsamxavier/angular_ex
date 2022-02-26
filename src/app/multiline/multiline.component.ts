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

// public dataValues: Object[] = [];
// public colors: string[] = ['red'];

//     public primaryXAxis1: Object = {
//       valueType: 'DateTime',
//       labelFormat: 'y',
//       intervalType: 'Years',
//       edgeLabelPlacement: 'Shift',
//       majorGridLines: { width: 0 }
//   };
//   public primaryYAxis1: Object = {
//     rangePadding: 'None',
//     minimum: 4,
//     maximum: 10,
//     title: 'Particulate Matter(PM)',
//     lineStyle: { width: 0 },
//     majorTickLines: { width: 0 },
//     minorTickLines: { width: 0 }
// };
// public chartArea1: Object = {
//     border: {
//         width: 0
//     }
// };
// public width: string = Browser.isDevice ? '100%' : '60%';
// public legend: Object = { visible: false };
// public segments: Object[] = [{
//     value: 450,
//     color: 'red'
// }, {
//     value: 500,
//     color: 'green'
// }, {
//     color: 'blue'
// }];
// public tooltip1: Object = {
//     enable: true, shared: true
// };
// public load(args: ILoadedEventArgs): void {
  
  
  // let selectedTheme: string = location.hash.split('/')[1];
  // selectedTheme = selectedTheme ? selectedTheme : 'Material';
  // args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  // custom code end
  // rainFallData.map((value: number, index: number) => {
  //     this.dataValues.push({
  //         XValue: new Date(2017, -index, 1), YValue: value.toFixed(2),
  //         color: this.colors[Math.floor(index / 16)]
  //     });
  // });
// };


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
