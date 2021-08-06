import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopupModel } from 'src/app/models/common/popup-model';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { WidgetPageBase } from '../../widget-utility/widget-page-base';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  MatBDataA1ConfigModel,
  MatBDataA1Model,
} from '../../widgets/mat-b-a1/mat-b-a1-model';
import {
  MoreInfoFormConfigModel,
  MoreInfoFormDataModel,
} from '../../widget-app/more-info-link-data/more-info-link-data-model';
import { GLOBAL_PERSISTANT_DATA } from 'src/app/constants/app-repo.constants';

@Component({
  selector: 'app-company-list-container',
  templateUrl: './company-list-container.component.html',
  styleUrls: ['./company-list-container.component.css'],
})
export class CompanyListContainerComponent
  extends WidgetPageBase
  implements OnInit, AfterViewInit, OnDestroy {
  id: any;
  instance: any;
  popupHolderInstance: any;
  pageInstance: any;
  collapse: boolean;
  expand_collapse_flag: boolean;
  infoModel: PopupModel;
  matBDataA1ConfigModel: MatBDataA1ConfigModel;
  matBDataA1Model: MatBDataA1Model;
  moreInfoFormDataModel: MoreInfoFormDataModel;
  moreInfoFormConfigModel: MoreInfoFormConfigModel;
  companyId: any;
  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _sessionStorageService: SessionStorageService,
    private _eventActionService: EventActionService,
    private _router: Router,
    private route: ActivatedRoute,
    private _spinner: NgxSpinnerService
  ) {
    super(
      _serverApi,
      _eventActionService,
      _sessionStorageService,
      _router,
      _spinner
    );

    this.pageReq = { page: 'company-list' };
    this.pageprop = Object();
    this.instance = this;
    this.pageInstance = this;
    this.popupHolderInstance = this;
    this.infoModel = new PopupModel();
    this.matBDataA1Model = MatBDataA1Model.getInstance();
    this.matBDataA1ConfigModel = MatBDataA1ConfigModel.getInstance();

    this.moreInfoFormDataModel = MoreInfoFormDataModel.getInstance();
    this.moreInfoFormConfigModel = MoreInfoFormConfigModel.getInstance();
  }

  ngOnInit(): void {
    this.expand_collapse_flag = false;
    this.bindMatBDataA1ConfigModel();
    this.bindMatBDataA1Model();

    this.bindMoreInfoFormDataModel();
    this.bindmoreInfoFormConfigModel();
  }

  bindMoreInfoFormDataModel() {
    this.moreInfoFormDataModel.isSelfDataLoad = false;
    this.moreInfoFormDataModel.info = new Object();
  }

  bindmoreInfoFormConfigModel() {}

  bindMatBDataA1Model() {
    // let data: any[] = [
    //   {
    //     companyId: 1,
    //     companyname: 'Test',
    //     partycode: '0001',
    //     panno: 'ABCDE1',
    //     infoField: 'info',
    //     viewField: 'visibility',
    //     editField: 'edit',
    //   },
    //   {
    //     companyId: 2,
    //     companyname: 'Test2',
    //     partycode: '0002',
    //     panno: 'ABCDE2',
    //     infoField: 'info',
    //     viewField: 'visibility',
    //     editField: 'edit',
    //   },
    //   {
    //     companyId: 3,
    //     companyname: 'Test3',
    //     partycode: '0003',
    //     panno: 'ABCDE3',
    //     infoField: 'info',
    //     viewField: 'visibility',
    //     editField: 'edit',
    //   },
    // ];
    // this.matBDataA1Model.dataSource = data;
    this.matBDataA1Model.columndata = [
      {
        field: 'companyId',
        name: 'Company Id',
        isSort: true,
      },
      {
        field: 'companyname',
        name: 'Company Name',
        isSort: true,
      },
      {
        field: 'panno',
        name: 'PAN',
        widthperc: '0 0 11',
        isSort: true,
      },
      {
        field: 'partycode',
        name: 'Party Code',
        isSort: true,
      },
      {
        field: 'infoField',
        name: '',
        colType: 'icon',
        clickmethod: 'onClick',
        eventActionName: 'info_click',
      },
      {
        field: 'viewField',
        name: '',
        colType: 'icon',
        clickmethod: 'onClick',
        eventActionName: 'view_click',
      },
      {
        field: 'editField',
        name: '',
        colType: 'icon',
        clickmethod: 'onClick',
        eventActionName: 'edit_click',
      },
    ];
    this.matBDataA1Model.dataKey = GLOBAL_PERSISTANT_DATA.COMPANY_LIST;
    this.matBDataA1Model.isSelfDataLoad = true;
    this.matBDataA1Model.isSort = true;
    this.matBDataA1Model.defaultSortDirection = 'desc';
    this.matBDataA1Model.defaultSortBy = 'companyId';
    // this.matBDataA1Model.length = 100;   
  }

  bindMatBDataA1ConfigModel() {
    let events: any = [
      [
        'info_click',
        [
          {
            action: 'setPageProperties',
            params: [
              {
                'page.infoModel.visible': 'true',
                'page.infoModel.header': "'Info'",
                'page.companyId': "src.dataContext.companyId",
              },
            ],
          },
          {
            action: 'executePageMethod',
            params: [
              {
                methodname: 'page_on_info_click',
              },
            ],
          },
        ],
      ],
      [
        "view_click",
        [{
          "action": "navigate",
          "params": {
              "staticKeys": [
                ["mode", "view"],
                ["isSelfDataLoad", true]
              ],
              "eventParamKeys": [
                  {
                    "getKey": "companyId",
                    "setKey": "companyId"
                  }
              ],
              "globalParamKeys": [

              ],
              "location": {
                  "path": "/company/add",
                  "eventParamKey": ""
              }
          }
        }]
      ],
      [
        "edit_click",
        [{
          "action": "navigate",
          "params": {
              "staticKeys": [
                ["mode", "edit"],
                ["isSelfDataLoad", true]
              ],
              "eventParamKeys": [
                  {
                    "getKey": "companyId",
                    "setKey": "companyId"
                  }
              ],
              "globalParamKeys": [

              ],
              "location": {
                  "path": "/company/add",
                  "eventParamKey": ""
              }
          }
        }]
      ]
    ];

    this.addEventListener(
      events,
      this.matBDataA1Model,
      this.matBDataA1ConfigModel
    );
  }

  page_on_info_click() {
    this.moreInfoFormDataModel.info = this.matBDataA1Model.dataSource.find(
      (d: any) => {
        return d.companyId == this.companyId;
      }
    );
  }

  ExpandCollapse() {
    this.expand_collapse_flag = !this.expand_collapse_flag;
  }

  ngAfterViewInit(): void {
    super.initBase();
  }

  ngOnDestroy(): void {
    super.removeListeners();
  }
}
