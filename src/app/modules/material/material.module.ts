import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar'

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [CommonModule,
    MatTableModule,
    MatCheckboxModule,
    // MatDatePicker,
  
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatTabsModule,
    MatProgressBarModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatTreeModule,
    // MatToolbarModule,
    // MatGridListModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule

  ],
  exports: [
    MatTableModule,
    MatCheckboxModule,
    // MatDatepickerModule,
  
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatTabsModule,
    MatProgressBarModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatTreeModule,
    // MatToolbarModule,
    // MatGridListModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule
  ],


})

export class MaterialModule {
  static forRoot() {
    return {
      ngModule: MaterialModule,
    };
  }
}
