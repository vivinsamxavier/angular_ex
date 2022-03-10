import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svgimage',
  templateUrl: './svgimage.component.html',
  styleUrls: ['./svgimage.component.scss']
})
export class SvgimageComponent implements OnInit {
  

  

  constructor() { }

  ngOnInit(): void {
   
    var sld=document.getElementById('svgObject');
    // var Dom:any=sld['contentDocument'];
    let arr=[{ 'element':'page1_element_param1','elementvalue':454.3 },
           {'element':'page2_element_param2','elementvalue':78.0}, 
           {'element':'page3_element_param3','elementvalue':856.0},
           {'element':'page4_element_param4','elementvalue':9860.0},
           {'element':'page5_element_param5','elementvalue':785.02},
           {'element':'page6_element_param6','elementvalue':890.00},
           {'element':'page7_element_param7','elementvalue':56.02},
           {'element':'page8_element_param8','elementvalue':693.0},
           {'element':'page9_element_param9','elementvalue':450.3},
           {'element':'page10_element_param10','elementvalue':365.0},
           {'element':'page11_element_param11','elementvalue':528.0},
           {'element':'page12_element_param12','elementvalue':498.0},
           {'element':'page13_element_param13','elementvalue':890.8},
           {'element':'page14_element_param 14','elementvalue':93.05},
           {'element':'page15_element_param15','elementvalue':563.0},
           {'element':'page16_element_param16','elementvalue':763.0},
           {'element':'page17_element_param17','elementvalue':56.36},
           {'element':'page18_element_param18','elementvalue':893.0},
           {'element':'page19_element_param19','elementvalue':78.36},
           {'element':'page20_element_param20','elementvalue':59.39},
           {'element':'page21_element_param21','elementvalue':42.36},
           {'element':'page22_element_param22','elementvalue':55.28},
           {'element':'page23_element_param23','elementvalue':98.6},
           {'element':'page24_element_param24','elementvalue':12.30},
           {'element':'page25_element_param25','elementvalue':986.0},
           {'element':'page26_element_param26','elementvalue':89.03},
           {'element':'page27_element_param27','elementvalue':1230.6},
           {'element':'page28_element_param28','elementvalue':78.0},
           {'element':'page29_element_param29','elementvalue':86.03},
           {'element':'page30_element_param30','elementvalue':560.3},
          ];
                                      
     //using for loop:

    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // here i represents index
  }

  //  document.getElementById(element).textcontent=elementvalue;
   

  }


}
