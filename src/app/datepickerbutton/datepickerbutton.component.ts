import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePickerComponent, DateRangePickerComponent, DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-datepickerbutton',
  templateUrl: './datepickerbutton.component.html',
  styleUrls: ['./datepickerbutton.component.scss']
})
export class DatepickerbuttonComponent implements OnInit {


  @ViewChild('datepick',{static:false}) public datepick!:DatePickerComponent;
  @ViewChild('dateRangepick',{static:false}) public dateRangepick!:DateRangePickerComponent;
  @ViewChild('dateTimepick',{static:false}) public dateTimepick!:DateTimePickerComponent;
  @ViewChild('dropdown',{static:false}) public dropdown!:DropDownListComponent;
  @ViewChild('multiselect',{static:false}) public multiselect!:MultiSelectComponent;
  
  // public countries: { [key: string]: Object; }[]
  public sportsData : Object[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Football' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
];
public value: string = 'Game3';
public waterMark: string = 'Select a game';
public fields: Object = { text: 'Game', value: 'Id' };
public height: string = '220px';
public default : string = 'Default';
    public box : string = 'Box';
    public delimiter : string = 'Delimiter';
    
    public Radio:any;
    
  constructor() { }

  ngOnInit(): void {
  }

}
