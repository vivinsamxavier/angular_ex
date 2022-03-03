import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CircularGaugeComponent, ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-angular-circulargauge';
import { Slider, SliderChangeEventArgs  } from '@syncfusion/ej2-inputs';
let sliderValue: number = 80;

@Component({
  selector: 'app-examplecircular',
  templateUrl: './examplecircular.component.html',
  styleUrls: ['./examplecircular.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ExamplecircularComponent implements OnInit {


  
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
  public load(args: ILoadedEventArgs): void {
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
          radius: '40%',
          startWidth: 30, endWidth: 30,
          color: '#E0E0E0',
          roundedCornerRadius: 20
      },
  ];
  public pointers: Object[] = [{
      roundedCornerRadius: 20,
      value: 80,
      type: 'RangeBar',
      radius: '40%',
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
  public title: string = '';
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
      sliderValue.toString() +'</div>',
      angle: 0,
      zIndex: '1',
      radius: '0%'
  }, ];
      // public annotationRender(id: string, sliderValue: number): void {
      //     let first: Slider = new Slider({
      //         // Set the value for slider
      //         min: 0, max: 100,
      //         type: 'MinRange',
      //         limits: { enabled: true, minStart: 0, minEnd: 100 },
      //         value: sliderValue,
      //         change: (args: SliderChangeEventArgs) => {
      //             sliderValue = args.value as number;
      //             if (!isNaN(sliderValue)) {
      //                 this.circulargauge['isProtectedOnChange'] = true;
      //                 if (sliderValue >= 0 && sliderValue < 20) {
      //                     this.circulargauge.axes[0].pointers[0].color = '#ea501a';
      //                 } else if (sliderValue >= 20 && sliderValue < 40) {
      //                     this.circulargauge.axes[0].pointers[0].color = '#f79c02';
      //                 } else if (sliderValue >= 40 && sliderValue < 60) {
      //                     this.circulargauge.axes[0].pointers[0].color = '#e5ce20';
      //                 } else if (sliderValue >= 60 && sliderValue < 80) {
      //                     this.circulargauge.axes[0].pointers[0].color = '#a1cb43';
      //                 } else if (sliderValue >= 80 && sliderValue < 100) {
      //                     this.circulargauge.axes[0].pointers[0].color = '#82b944';
      //                 }
      //                 this.circulargauge.setPointerValue(0, 0, sliderValue);
      //                 if (document.getElementById('pointervalue')) {
      //                     // document.getElementById('pointervalue').innerHTML = this.circulargauge.axes[0].pointers[0].value.toString() + '/100';
      //                 }
      //             }
      //         }
      //     });
      //     first.appendTo('#' + id);
      // }

  constructor() { }

  ngOnInit(): void {
  }

}
