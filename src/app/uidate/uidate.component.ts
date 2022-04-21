import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uidate',
  templateUrl: './uidate.component.html',
  styleUrls: ['./uidate.component.scss']
})
export class UidateComponent implements OnInit {
  public curDate=new Date() ;
  public curMonth = new Date().toLocaleString(
    'default', {month: 'long'});
 
    public startTime =  new Date(new Date(new Date().setHours(0, 0, 0, 0)).toString().split('GMT')[0] + ' UTC').toISOString();
    public endTime = new Date(new Date(new Date().setHours(23, 59, 59, 999)).toString().split('GMT')[0] + ' UTC').toISOString();
    public Yesterday =new Date(new Date().getTime() - 24*60*60*1000);
    public Tommorows =new Date(new Date().getTime() + 24*60*60*1000);
    public Nowdate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
