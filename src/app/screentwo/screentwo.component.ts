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
  // custom code start
  public load1(args: ILoadedEventArgs): void {
      let selectedTheme: string = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
      selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
  }
  // custom code end
  public loaded(args: ILoadedEventArgs):void {
      let annotation: any = document.getElementById(args.gauge.element.id + '_Annotations_0');
      if (annotation) {
        //  this.annotationRender('slider', this.circulargauge.axes[0].pointers[0].value);
      }
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






// @ViewChild('circulargauge')
// public circulargauge: any;

// public lineStyle: Object = {
//     width: 0
// };
// //Initializing LabelStyle
// public labelStyle: Object = {
//     position: 'Inside', useRangeColor: true,
//     font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
// };
// // custom code start
// public load1(args: ILoadedEventArgs): void {
//     let selectedTheme: string = location.hash.split('/')[1];
//     selectedTheme = selectedTheme ? selectedTheme : 'Material';
//     args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
//     selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
// }
// // custom code end
// public loaded(args: ILoadedEventArgs):void {
//     let annotation: Element = document.getElementById(args.gauge.element.id + '_Annotations_0');
//     if (annotation) {
//        this.annotationRender('slider', this.circulargauge.axes[0].pointers[0].value);
//     }
// };
// public ranges: Object[] = [
//     {
//         start: 0, end: 100,
//         radius: '90%',
//         startWidth: 30, endWidth: 30,
//         color: '#E0E0E0',
//         roundedCornerRadius: 20
//     },
// ];
// public pointers3: Object[] = [{
//     roundedCornerRadius: 20,
//     value: 60,
//     type: 'RangeBar',
//     radius: '90%',
//     color: '#e5ce20',
//     border: {
//         color: 'grey',
//         width: 0
//     },
//     animation: {
//         enable: false
//     },
//     pointerWidth: 30
// }];
// public titleStyle: Object = { size: '18px' };

// public majorTicks: Object = {
//     height: 0, 
// };
// public minorTicks: Object = {
//     height: 0
// };
// public tail: Object = {
//     length: '18%', color: '#757575'
// };
// public pointerCap: Object = {
//     radius: 7, color: '#757575'
// };

// public annotaions: Object = [{
//     content: '<div id="pointervalue" style="font-size:35px;width:120px;text-align:center">' +
//     sliderValue.toString() + '/100</div>',
//     angle: 0,
//     zIndex: '1',
//     radius: '0%'
// }, {
//     content: '<div id="slider" style="height:70px;width:250px;"></div>',
//     angle: 0,
//     zIndex: '1',
//     radius: '-100%'
// }];
    








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
