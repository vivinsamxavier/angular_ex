import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems,SearchSettingsModel  } from '@syncfusion/ej2-angular-grids';
import { DataUtil } from '@syncfusion/ej2-data';


@Component({
  selector: 'app-examplesgird',
  templateUrl: './examplesgird.component.html',
  styleUrls: ['./examplesgird.component.scss']
})
export class ExamplesgirdComponent implements OnInit {
  public data: any[] = [];
  public filterOption: FilterSettingsModel = {type:'Menu'}
  public searchSettings!: SearchSettingsModel;
  public toolbar!: ToolbarItems[];
  public pageSettings: any;
  
  public dropdata: string[] = DataUtil.distinct(data, 'ShipName') as string[];
  public filterOption1: FilterSettingsModel = { type: 'Menu' };
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';

  constructor() { }

  ngOnInit(): void {
    this.data = data;
    this.toolbar = ['Search'];
    this.searchSettings = {fields: ['CustomerID', 'Price', 'OrderID','OrderDate']};
    this.pageSettings = { pageSizes: true, pageSize: 12 };
  }

}
