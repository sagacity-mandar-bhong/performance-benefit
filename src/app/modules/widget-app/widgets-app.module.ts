import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MoreInfoLinkDataComponent } from './more-info-link-data/more-info-link-data.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerformaceCard1Component } from './performace-card1/performace-card1.component';
import { PerformanceCard2Component } from './performance-card2/performance-card2.component';


@NgModule({
  declarations: [
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component,
    PerformanceCard2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports:[
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component,
    PerformanceCard2Component
  ]
})
export class WidgetAppModule { }
