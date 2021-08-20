import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { CompanyListContainerComponent } from './company-list-container/company-list-container.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    // path: 'list',
    // component: CompanyListContainerComponent,
    // children: [
      
    // ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
