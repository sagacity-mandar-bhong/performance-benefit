import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { NotificationService } from 'src/app/services/common/notification.service';
import { SaveFileService } from 'src/app/services/common/save-file.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { WidgetPageBase } from '../../widget-utility/widget-page-base';
import {
  CompanyFormConfigModel,
  CompanyFormDataModel,
} from '../../widget-app/company/company-form/company-form.model';
import { GLOBAL_PERSISTANT_DATA } from 'src/app/constants/app-repo.constants';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-company-add-container',
  templateUrl: './company-add-container.component.html',
  styleUrls: ['./company-add-container.component.css'],
})
export class CompanyAddContainerComponent
  extends WidgetPageBase
  implements OnInit, AfterViewInit, OnDestroy {
  id: any;
  instance: any;
  popupHolderInstance: any;
  pageInstance: any;
  collapse?: boolean;
  display?: boolean;
  companyFormDataModel: CompanyFormDataModel;
  companyFormConfigModel: CompanyFormConfigModel;

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _sessionStorageService: SessionStorageService,
    private _eventActionService: EventActionService,
    private _router: Router,
    private route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    private _saveFileService: SaveFileService,
    private _notificationService: NotificationService,
    private _appRepoHelperService: AppRepoHelperService
  ) {
    super(
      _serverApi,
      _eventActionService,
      _sessionStorageService,
      _router,
      _spinner
    );

    this.pageReq = { page: 'company-add' };
    this.pageprop = Object();
    this.instance = this;
    this.pageInstance = this;
    this.popupHolderInstance = this;

    this.companyFormDataModel = CompanyFormDataModel.getInstance();
    this.companyFormConfigModel = CompanyFormConfigModel.getInstance();
  }

  ngOnInit(): void {
    this.bindCompanyFormDataModel();
    this.bindCompanyFormConfigModel();
  }

  bindCompanyFormConfigModel() {
    let companyId = this.globalParameters.get('companyId');
    let companyList = this._appRepoHelperService.getGlobalData(
      GLOBAL_PERSISTANT_DATA.COMPANY_LIST
    );
    this.companyFormDataModel.dataKey = GLOBAL_PERSISTANT_DATA.COMPANY_VIEW;
    if (companyList && companyList.data) {
      let company = companyList.data
        .map((data: any) => {
          return {
            companyId: data.companyId,
            companyName: data.companyname,
            pan: data.panno,
            partyCode: data.partycode,
          };
        })
        .find((d: any) => {
          return d.companyId == companyId;
        });
      this._appRepoHelperService.setGlobalData(
        this.companyFormDataModel.dataKey,
        company
      );
    }
    this.companyFormDataModel.validators = {
      controls: [
        {
          controlName: 'companyName',
          controlType: 'text',
          validations: [
            {
              name: 'required',
            },
          ],
        },
        {
          controlName: 'pan',
          controlType: 'text',
          validations: [
            {
              name: 'required',
            },
          ],
        },
        {
          controlName: 'partyCode',
          controlType: 'text',
          validations: [
            {
              name: 'required',
            },
          ],
        },
      ],
    };

    this.companyFormDataModel.permission = {
      add: {
        companyName: 'w',
        pan: 'w',
        partyCode: 'w',
        add: 'w',
        edit: 'n',
      },
      edit: {
        companyName: 'r',
        pan: 'w',
        partyCode: 'w',
        add: 'n',
        edit: 'w',
      },
      view: {
        companyName: 'r',
        pan: 'r',
        partyCode: 'r',
        add: 'n',
        edit: 'n',
      },
    };
    this.companyFormDataModel.isGlobalParams = true;
    this.companyFormDataModel.globalParamterKeys = ['mode', 'companyId'];
    this.companyFormDataModel.isSelfDataLoad = true;
    super.setGlobalParams(this.companyFormDataModel);
  }

  bindCompanyFormDataModel() {
    let events = [
      [
        'backBtn_click',
        [
          {
            action: 'navigate',
            params: {
              staticKeys: [],
              eventParamKeys: [],
              globalParamKeys: ['caseId', 'customerId'],
              location: {
                path: '/company/list',
                eventParamKey: '',
              },
            },
          },
        ],
      ],
      [
        'on_add',
        [
          {
            action: 'onsubmitwithuserdata',
            params: [
              {
                submitcode: 'ADD_COMPANY',
              },
            ],
            posteventaction: {
              success: [
                {
                  action: 'dynamicToaster',
                  params: {
                    'toaster.issuccess': true,
                    'toaster.msg': "'Company added successfully.'",
                  },
                },
                {
                  action: 'navigate',
                  params: {
                    staticKeys: [],
                    eventParamKeys: [],
                    globalParamKeys: [],
                    location: {
                      path: '/company/list',
                    },
                  },
                },
              ],
              failure: [
                {
                  action: 'dynamicToaster',
                  params: {
                    'toaster.issuccess': false,
                    'toaster.msg': 'src.tag.errormsg',
                  },
                },
              ],
            },
          },
        ],
      ],
      [
        'on_edit',
        [
          {
            action: 'dynamicToaster',
            params: {
              'toaster.issuccess': true,
              'toaster.msg': "'Company updated successfully.'",
            },
          },
          {
            action: 'navigate',
            params: {
              staticKeys: [],
              eventParamKeys: [],
              globalParamKeys: [],
              location: {
                path: '/company/list',
              },
            },
          }
        ]
      ],
    ];
    this.addEventListener(
      events,
      this.companyFormDataModel,
      this.companyFormConfigModel
    );
  }

  ngAfterViewInit(): void {
    super.initBase();
  }

  ngOnDestroy(): void {
    super.removeListeners();
  }
}
