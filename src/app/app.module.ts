import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridAllModule,PagerModule,SearchService, ToolbarService, EditService,FilterService,} from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LogintwoComponent } from './logintwo/logintwo.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BookviewComponent } from './bookview/bookview.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ExampleschartsComponent } from './examplescharts/examplescharts.component';
import { AreaSeriesService, ChartModule  } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import {  ColumnSeriesService,StackingColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { ExamplespieComponent } from './examplespie/examplespie.component';
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { ExamplesgirdComponent } from './examplesgird/examplesgird.component';
import { MultilineComponent } from './multiline/multiline.component';
import { ScreencardComponent } from './screencard/screencard.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ScreentwoComponent } from './screentwo/screentwo.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { CircularGaugeAllModule } from '@syncfusion/ej2-angular-circulargauge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ExamplecircularComponent } from './examplecircular/examplecircular.component';
import { SvgimageComponent } from './svgimage/svgimage.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { SampleService } from './sample.service';
import {HttpClientModule} from '@angular/common/http';
import { BookdatasComponent } from './bookdatas/bookdatas.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogintwoComponent,
    BookviewComponent,
    ExampleschartsComponent,
    ExamplespieComponent,
    ExamplesgirdComponent,
    MultilineComponent,
    ScreencardComponent,
    ScreentwoComponent,
    ExamplecircularComponent,
    SvgimageComponent,
    StudentdataComponent,
    BookdatasComponent,
    AddemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridAllModule,
    PagerModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    ChartModule,
    AccumulationChartModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatChipsModule,
    ProgressBarModule,
    CircularGaugeAllModule,
    MatProgressBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],    
    
  providers: [ CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService,AreaSeriesService,ColumnSeriesService,StackingColumnSeriesService,PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
    AccumulationAnnotationService,SearchService, ToolbarService, EditService,FilterService, SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
