import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {
  logInName = 'admin';
  // public curDate=new Date();
  getColor(country:any) { 
    return 'green';
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK',
      "color":"green"
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA',
      "color":"red"
    },
    {
      "name": "Day  Meyers",
      "country": 'HK',
      "color":"orange"
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK',
      "color":"pink"
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA',
      "color":"green"
    }
  ];
  constructor() { }
  
  ngOnInit(): void {
    let temp=new Date();
    console.log(temp);

  }
  list = [1,2,3,4,5];
 
}
//cur date,cur month start & end date,yesterday date
