import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogboxbuttonComponent } from '../dialogboxbutton/dialogboxbutton.component';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-bookdatas',
  templateUrl: './bookdatas.component.html',
  styleUrls: ['./bookdatas.component.scss']
})
export class BookdatasComponent implements OnInit {
  public Employeedata:any;
  public deleteEmployeedata:any;
  public Employeeadd:any;
  public output:any;
  // Dialoge box
  animal: any;
  name: any;
  constructor(private sample:SampleService,private router: Router,public dialog: MatDialog) { }
    
  ngOnInit(): void {
  this.getData();
  }
  // Dialoge box
  openDialog(currentData:any): void {
    const dialogRef = this.dialog.open(DialogboxbuttonComponent, {
      width: '60%',
      height:'50%',
      data: {data:currentData},
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  getData(){
  this.sample.getEmployeedata().subscribe((data: any)=>{    
  this.Employeedata=data;
  console.log(this.Employeedata);
      }
      );
   }
  deleteData(val:any){
  console.log(val);
  this.sample.deleteEmployeedata({'id':val}).subscribe((data: any)=>{   
          this.getData();
   });
  }
  edit(data:any){
   

    this.router.navigate(
      ['/Up'],
      { queryParams: { data: JSON.stringify(data) } }
    )

  }
  
}
