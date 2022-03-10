import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookviewComponent } from './bookview/bookview.component';
import { ExamplecircularComponent } from './examplecircular/examplecircular.component';
import { ExampleschartsComponent } from './examplescharts/examplescharts.component';
import { ExamplesgirdComponent } from './examplesgird/examplesgird.component';
import { ExamplespieComponent } from './examplespie/examplespie.component';
import { LoginComponent } from './login/login.component';
import { LogintwoComponent } from './logintwo/logintwo.component';
import { MultilineComponent } from './multiline/multiline.component';
import { ScreencardComponent } from './screencard/screencard.component';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { SvgimageComponent } from './svgimage/svgimage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: LogintwoComponent },
  { path: 'bookview', component: BookviewComponent },
  { path: 'examplescharts', component: ExampleschartsComponent },
  { path:  'examplespie',component: ExamplespieComponent },
  { path:  'examplesgird',component: ExamplesgirdComponent },
  { path: 'multi',component:MultilineComponent },
  { path:'screen',component:ScreencardComponent },
  {path:'screentwo',component:ScreentwoComponent},
  {path: 'examplecir',component:ExamplecircularComponent},
  {path:'svgimg',component:SvgimageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
