import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CompanyListContainerComponent } from "./company-list-container/company-list-container.component";
import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyAddContainerComponent } from "./company-add-container/company-add-container.component";
import { MaterialModule } from "../material/material.module";
import { DialogModule } from "primeng/dialog";
import { WidgetsModule } from "../widgets/mat-b-a1/widgets.module";
import { WidgetAppModule } from "../widget-app/widgets-app.module";

@NgModule({
  declarations: [CompanyListContainerComponent, 
    CompanyAddContainerComponent],
  imports: [
    CompanyRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    DialogModule,
    WidgetsModule,
    WidgetAppModule
  ],
})
export class CompanyModule {}
