import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
// import { CompanyListContainerComponent } from "./company-list-container/company-list-container.component";
import { CompanyRoutingModule } from "./company-routing.module";
import { MaterialModule } from "../material/material.module";
// import { DialogModule } from "primeng/dialog";
import { WidgetAppModule } from "../widget-app/widgets-app.module";

@NgModule({
  declarations: [
    // CompanyListContainerComponent, 
    ],
  imports: [
    CompanyRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    // DialogModule,
    // WidgetsModule,
    WidgetAppModule
  ],
})
export class CompanyModule {}
