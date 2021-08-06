import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MoreInfoLinkDataComponent } from './more-info-link-data/more-info-link-data.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerformaceCard1Component } from './performace-card1/performace-card1.component';


@NgModule({
  declarations: [
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports:[
    MoreInfoLinkDataComponent,
    CompanyFormComponent
  ]
})
export class WidgetAppModule { }
