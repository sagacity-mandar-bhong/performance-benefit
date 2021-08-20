import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { WidgetComponentBase } from '../../widget-utility/widget-component-base';
import { PerformanceCard2ConfigModel, PerformanceCard2DataModel } from './performance-card2-model';
// import { WidgetComponentBase } from 'src/app/utility/widget/widget-utility/widget-component-base';


@Component({
  selector: 'app-performance-card2',
  templateUrl: './performance-card2.component.html',
  styleUrls: ['./performance-card2.component.css']
})
export class PerformanceCard2Component extends WidgetComponentBase implements OnInit {
  ConvertData(response: any) {
    // throw new Error('Method not implemented.');
  }
  SetValue(responseDataModel: any) {
    // throw new Error('Method not implemented.');
  }

  @Input()  dataModel!: PerformanceCard2DataModel;
  @Input() configModel!: PerformanceCard2ConfigModel;
  
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
    // this.wgOnInint();
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
