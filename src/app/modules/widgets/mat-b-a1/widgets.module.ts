import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBA1Component } from './mat-b-a1.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    MatBA1Component
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MatBA1Component
  ]
})
export class WidgetsModule { }
