import { Component, OnInit } from '@angular/core';
import { AccumulationDataLabelSettingsModel, AccumulationTheme, IAccLoadedEventArgs, LegendSettingsModel, TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-examplespie',
  templateUrl: './examplespie.component.html',
  styleUrls: ['./examplespie.component.scss']
})
export class ExamplespieComponent implements OnInit {

  public primaryXAxis: any;
  public chartData: any[] = [];
  public primaryYAxis: any;
  public title: any;
  public legendSettings: any;
  public legend:any;
  public dataLabel: any;
  public startAngle: number = 0;
  public startAngle1: number = 60;
  public endAngle: number = 360;
  public tooltip: Object = { enable: true };

  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
};

public onLoad(args: IAccLoadedEventArgs): void {
  let selectedTheme: string = location.hash.split('/')[1];
  selectedTheme = selectedTheme ? selectedTheme : 'Material';
  args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
};

public tooltip1: TooltipSettingsModel = {
  enable: true, format: '${point.x} : <b>${point.y}%</b>'
};

public dataLabel1: AccumulationDataLabelSettingsModel = {
  visible: true, position: 'Outside',
  connectorStyle: { length: '20px', type: 'Curve' }, name: 'text',
};

public legendSettings1: LegendSettingsModel = {
  visible: false
};

public legendSettings2: Object = {
  visible: false,
  position: 'Top'
};

public tooltip2: Object = { enable: true, format: '${point.x} : <b>${point.y}%</b>' };

public load2(args: IAccLoadedEventArgs): void {
  let selectedTheme: string = location.hash.split('/')[1];
  selectedTheme = selectedTheme ? selectedTheme : 'Material';
  args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
};

public startAngle2: number = 270;
public enableAnimation2: boolean = false;
public endAngle2: number = 90;
public explode2: boolean = true;
public dataLabel2: Object = {
  visible: true, position: 'Outside',
  connectorStyle: { length: '10%' }, name: 'text',
  font: { size: '14px' }
};




   constructor(){
      this.title = '';
      this.chartData = [
          { month: 'Jan',   y1: 100,y2:110 },  { month: 'Feb',   y1: 652,y2:340 },
          { month: 'Mar',   y1: 250,y2:120 },  { month: 'Apr',   y1: 651,y2:345 },
          { month: 'May',   y1: 350,y2:130 },  { month: 'Jun',   y1: 651,y2:384 },
          { month: 'Jul',   y1: 150,y2:140 },  { month: 'Aug',   y1: 251,y2:324 },
          { month: 'Sep',   y1: 110,y2:150 },  { month: 'Oct',   y1: 361,y2:345 },
          { month: 'Nov',   y1: 450,y2:160 },  { month: 'Dec',   y1: 471,y2:374 }
      ];
      this.legendSettings = {
        visible: true,
        month:'text'
    };
    this.legend ={
      visible:true,
      position:'Bottom',
      height:'8%',
      width:'35%'
    };
    this.dataLabel={
      visible: true,
  name: 'text',
  position: 'Inside',
  font: {
      fontWeight: '600',
      color: '#ffffff'
  }

    }
    
  }
  ngOnInit(): void{

  }
}