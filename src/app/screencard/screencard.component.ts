import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-screencard',
  templateUrl: './screencard.component.html',
  styleUrls: ['./screencard.component.scss']
})

export class ScreencardComponent implements OnInit {

      public animation: any;
      public animation1: any;
      public animation2: any;
      public animation3: any;






      public isIndeterminate: any;
     
      public showProgressValue: boolean = true;
      public showProgressValue1: boolean = true;
      public showProgressValue2: boolean = true;
      public showProgressValue3: boolean = true;

    

  constructor() { }

  ngOnInit(): void {
        this.animation = { enable: true, duration: 2000, delay: 0 };
        this.animation1 = { enable: true, duration: 2000, delay: 0 };
        this.animation2 = { enable: true, duration: 2000, delay: 0 };
        this.animation3 = { enable: true, duration: 2000, delay: 0 };
        this.isIndeterminate = true;
        
        
    
    
  }

}
