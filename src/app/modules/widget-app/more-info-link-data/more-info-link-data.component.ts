import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { AppRepoService } from 'src/app/services/common/app-repo.service';
import { NotificationService } from 'src/app/services/common/notification.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { IWidget } from '../../widget-utility/iwidget';
import { WidgetComponentBase } from '../../widget-utility/widget-component-base';
import { FormModeConstant } from '../../widget-utility/widget-constants';
import {  MoreInfoFormConfigModel, MoreInfoFormDataModel, MoreInfoFormModel } from './more-info-link-data-model';

@Component({
  selector: 'app-more-info-link-data',
  templateUrl: './more-info-link-data.component.html',
  styleUrls: ['./more-info-link-data.component.css']
})
export class MoreInfoLinkDataComponent extends WidgetComponentBase
  implements OnInit, IWidget {
  @Input() dataModel: MoreInfoFormDataModel;
  @Input() configModel: MoreInfoFormConfigModel;
  formData: any;

  constructor(
    private formBuilder: FormBuilder,
    private _serverApi: ServerApiInterfaceServiceService,
    private datepipe: DatePipe,
    private _sessionStorageService: SessionStorageService,

    public _validationService: ValidationService,
    private _appRepoHelperService: AppRepoHelperService,
    private _notificationService: NotificationService
  ) {
    super(formBuilder, _serverApi, datepipe, _validationService);
    this.formData = new Object();
    this.dataModel = this.dataModel;
    this.configModel = this.configModel;
    this.wgFormData = this.formData;
  }

  ngOnInit(): void {
    this.wgOnInint();
  }

  ConvertData(response: any) {
    this.dataModel.info = response.data[0];
  }

  setFieldData() {     
  }

  setMode(responseDataModel: any) {
  }

  SetValue(responseDataModel: any) {
  }

  GetValue() {
    return this.formData;
  }
  Reset() {
   
  }
}


