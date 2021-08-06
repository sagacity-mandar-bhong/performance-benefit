import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { WidgetComponentBase } from '../../widget-utility/widget-component-base';
// import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';
import { PerformanceCard1ConfigModel, PerformanceCard1DataModel } from './performance-card1-model';



@Component({
  selector: 'app-performace-card1',
  templateUrl: './performace-card1.component.html',
  styleUrls: ['./performace-card1.component.css']
})
export class PerformaceCard1Component extends WidgetComponentBase implements OnInit {
  ConvertData(response: any) {
    // throw new Error('Method not implemented.');
  }
  SetValue(responseDataModel: any) {
    // throw new Error('Method not implemented.');
  }

  @Input()  dataModel!: PerformanceCard1DataModel;
  @Input() configModel!: PerformanceCard1ConfigModel;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _serverApi: ServerApiInterfaceServiceService,
    private _datepipe: DatePipe,
    public _validationService: ValidationService
  ) { 
    super(_formBuilder,_serverApi,_datepipe,_validationService)
  //  super(_formBuilderbase, _serverApiBase, _datepipe,_validationServiceBase)
    // super(_formBuilderbase,_serverBaseApi,_datepipe,_validationServiceBase) 
    // super(_formBuilder,_serverBaseApi,_datepipe,_validationServiceBase, _baseAppRepoHelperService)
    // super(_serverApiBase, _validationService,);
  }

  ngOnInit(): void {
    this.wgOnInint();
  }

  setFieldData() {
  }

  wgGetControlData() {
    this.wgOnRequest();
    return new Promise((resolve, reject) => {
      // let data = this._baseAppRepoHelperService.getGlobalData(this.dataModel.dataKey);
      let data = {};
      this.wgOnRequestCompleted();
      resolve(data);
    });
  }


  

  convertData(response: any) {
  }

  setMode(responseDataModel: any) {
  }

  setValue(responseDataModel: any) {
  }

}
