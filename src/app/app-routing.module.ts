import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { BookdatasComponent } from './bookdatas/bookdatas.component';
import { BookviewComponent } from './bookview/bookview.component';
import { DatepickerbuttonComponent } from './datepickerbutton/datepickerbutton.component';
import { ExamplecircularComponent } from './examplecircular/examplecircular.component';
import { ExampleschartsComponent } from './examplescharts/examplescharts.component';
import { ExamplesgirdComponent } from './examplesgird/examplesgird.component';
import { ExamplespieComponent } from './examplespie/examplespie.component';
import { GuageComponent } from './guage/guage.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { LogintwoComponent } from './logintwo/logintwo.component';
import { MultilineComponent } from './multiline/multiline.component';
import { ScreencardComponent } from './screencard/screencard.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { ShopcardComponent } from './shopcard/shopcard.component';
import { SidebarbuttonComponent } from './sidebarbutton/sidebarbutton.component';
import { StructuralComponent } from './structural/structural.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { SvgimageComponent } from './svgimage/svgimage.component';
import { UpdateempComponent } from './updateemp/updateemp.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'login', component: LoginComponent },
  { path: 'login2', component: LogintwoComponent },
  { path: 'bookview', component: BookviewComponent },
  { path: 'examplescharts', component: ExampleschartsComponent },
  { path:  'examplespie',component: ExamplespieComponent },
  { path:  'examplesgird',component: ExamplesgirdComponent },
  { path: 'multi',component:MultilineComponent },
  { path:'screen',component:ScreencardComponent },
  {path:'screentwo',component:ScreentwoComponent},
  {path: 'examplecir',component:ExamplecircularComponent},
  {path:'svgimg',component:SvgimageComponent},
  {path: 'studentdata',component:StudentdataComponent},
  {path: 'bookdatas' ,component:BookdatasComponent},
  {path:'Add',component:AddemployeeComponent},
  {path:'Up',component:UpdateempComponent},
  {path:'gauge',component:GuageComponent},
  {path:'shop',component:ShopcardComponent},
  {path:'layout',component:LayoutsComponent},
  
  { path:'Sidebar',component:SidebarbuttonComponent,
    children: [{
      path:'gauge',component:GuageComponent,
       
  },{
    path:'shop',component:ShopcardComponent,
  },{
    path:'layout',component:LayoutsComponent,
  },{
    path: 'login', component: LoginComponent
  }]
 },
 {path:'date',component:DatepickerbuttonComponent},
 {path:'str',component:StructuralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
