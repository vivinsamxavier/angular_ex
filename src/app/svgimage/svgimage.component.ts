import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svgimage',
  templateUrl: './svgimage.component.html',
  styleUrls: ['./svgimage.component.scss']
})
export class SvgimageComponent implements OnInit,AfterViewInit {
  
  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    setTimeout(()=>{
      var sld:any=document.getElementById('svgobject');
      var Dom:any=sld['contentDocument'];
      console.log(Dom);
      let arr=[{ 'element':'page1_element_param1','elementvalue':98.98},
             {'element':'page2_element_param2','elementvalue':78.35}, 
             {'element':'page3_element_param3','elementvalue':98.67},
             {'element':'page4_element_param4','elementvalue':58.38},
             {'element':'page5_element_param5','elementvalue':77.02},
             {'element':'page6_element_param6','elementvalue':80.88},
             {'element':'page7_element_param7','elementvalue':56.02},
             {'element':'page8_element_param8','elementvalue':63.30},
             {'element':'page9_element_param9','elementvalue':40.36},
             {'element':'page10_element_param10','elementvalue':35.70},
             {'element':'page11_element_param11','elementvalue':58.06},
             {'element':'page12_element_param12','elementvalue':48.85},
             {'element':'page13_element_param13','elementvalue':83.84},
             {'element':'page14_element_param_14','elementvalue':93.35},
             {'element':'page15_element_param15','elementvalue':53.04},
             {'element':'page16_element_param16','elementvalue':73.08},
             {'element':'page17_element_param17','elementvalue':56.36},
             {'element':'page18_element_param18','elementvalue':85.07},
             {'element':'page19_element_param19','elementvalue':78.36},
             {'element':'page20_element_param20','elementvalue':59.39},
             {'element':'page21_element_param21','elementvalue':42.36},
             {'element':'page22_element_param22','elementvalue':55.28},
             {'element':'page23_element_param23','elementvalue':98.6},
             {'element':'page24_element_param24','elementvalue':12.30},
             {'element':'page25_element_param25','elementvalue':986.0},
             {'element':'page26_element_param26','elementvalue':89.03},
             {'element':'page27_element_param27','elementvalue':120.6},
             {'element':'page28_element_param28','elementvalue':78.0},
             {'element':'page29_element_param29','elementvalue':86.03},
             {'element':'page30_element_param30','elementvalue':86.03},
             {'element':'page31_element_param31','elementvalue':65.43},
             {'element':'page32_element_param32','elementvalue':80.37},
             {'element':'page33_element_param33','elementvalue':60.63},
             {'element':'page34_element_param34','elementvalue':58.35},
             {'element':'page35_element_param35','elementvalue':96.34},
             {'element':'page36_element_param36','elementvalue':86.34},
            ];
                                        
 
      for (let i = 0; i < arr.length; i++) {
        let element:string=arr[i]['element'];
        Dom.getElementById(element).textContent=arr[i]['elementvalue'];
      
      }
    },1000)
    
  }
 
}
