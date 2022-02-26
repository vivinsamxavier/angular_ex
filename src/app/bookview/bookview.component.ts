import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss']
})
export class BookviewComponent implements OnInit {
public i: any;
  constructor() {  }

  ngOnInit(): void {
  
    var randnumber = Math.random() * 1000;
    let number =6785;
    let str=number.toString();
    let lastDIG =Number(str.slice(-1));
    let lastDigit =Number(str.charAt(str.length-1));
    let last =number %10;
    let add =lastDIG +1;
    let name ="atandra";

    for(this.i=1; this.i<=add; this.i++)
    console.log(name);
  }

}
