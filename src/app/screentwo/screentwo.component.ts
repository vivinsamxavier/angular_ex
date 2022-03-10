import { Component, OnInit,ViewChild} from '@angular/core';
import { ChartTheme} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { CircularGaugeComponent, GaugeTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-circulargauge';

import { } from '@syncfusion/ej2-angular-circulargauge';
import { Slider, SliderChangeEventArgs  } from '@syncfusion/ej2-inputs';
let sliderValue: number = 60;


@Component({
  selector: 'app-screentwo',
  templateUrl: './screentwo.component.html',
  styleUrls: ['./screentwo.component.scss']
})
export class ScreentwoComponent implements OnInit {
  //circle gauge
  @ViewChild('circulargauge')
  public circulargauge: any;

  public lineStyle: Object = {
      width: 0
  };
  //Initializing LabelStyle
  public labelStyle: Object = {
    position: 'Inside', useRangeColor: true,
    font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
};
 
  public ranges: Object[] = [
      {
          start: 0, end: 100,
          radius: '90%',
          startWidth: 30, endWidth: 30,
          color: '#E0E0E0',
          roundedCornerRadius: 20
      },
  ];
  public pointers: Object[] = [{
      roundedCornerRadius: 20,
      value: 80,
      type: 'RangeBar',
      radius: '90%',
      color: '#28B463',
      border: {
          color: 'grey',
          width: 0
      },
      animation: {
          enable: false
      },
      pointerWidth: 30
  }];
  public titleStyle: Object = { size: '18px' };
  public majorTicks: Object = {
      height: 0, 
  };
  public minorTicks: Object = {
      height: 0
  };
  public tail: Object = {
      length: '18%', color: '#757575'
  };
  public pointerCap: Object = {
      radius: 7, color: '#757575'
  };

  public annotaions: Object = [{
      content: '<div id="pointervalue " style="font-size:35px;width:120px;text-align:center">' + 
      sliderValue.toString()+'%' +'</div>',
      angle: 0,
      zIndex: '1',
      radius: '0%'
  }, ];
  //end


  
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
public width: string = Browser.isDevice ? '100%' : '60%';
// custom code start

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
