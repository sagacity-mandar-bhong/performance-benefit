import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { WidgetConstants } from './widget-constants';

// rename to widgetpagebase
export class WidgetPageBase {

  protected pageReq = { "page": "Operational Dashboard" }

  getCurrentMonth?: Date;
  eventHandler?: Function;
  compRefInstancesMap = new Map<string, any>();
  globalParameters = new Map<string, any>();
  pageDataApiUrl = '/v1/widget/getpagedata';
  pageSubmitDataApiUrl = '/v1/widget/getpagesubmitdata';
  dynamicMethod?: Function;
  pageprop: any;
  submitData: any;
  requestCount: number = 0;
  pageInstance: any;

  constructor(private _baseServerApiBase: ServerApiInterfaceServiceService,
    private _baseEventActionServiceBase: EventActionService,
    private _baseSessionStorageService: SessionStorageService,
    private _baseRouter: Router,
    private _baseSpinner: NgxSpinnerService
  ) {
    this.pageInstance = this;
    if (!_baseRouter)
      return;

    if (!_baseSessionStorageService)
      return;

    _baseRouter.events.forEach((event) => {
      // set data to global parameters
      if (event instanceof NavigationStart) {

        let navigation_data_keys = this.globalParameters.get("navigationDataKeys");

        if (!navigation_data_keys)
          return;

        let navigationData = new Map<string, object>();

        navigation_data_keys.forEach((element:any) => {
          navigationData.set(element, this.globalParameters.get(element));
        });

        _baseSessionStorageService.setNavigationData(navigationData);

      }
    });

    this.initNavigationData();

  }

  initBase() {
    // this.getSubmitData().then(() => {
    //     this.getPageData();
    // });
  }


  initNavigationData() {

    if (!this._baseSessionStorageService)
      return;

    let navigationData = this._baseSessionStorageService.getNavigationData();

    if (!navigationData || !(navigationData instanceof Map))
      return;

    navigationData.forEach((value, key) => {
      this.globalParameters.set(key, value);
    });
  }

  ObjectDeepAssign(target:any, source:any) {
    let output = Object.assign({}, target);
    Object.keys(source).forEach(key => {
      if (Object.prototype.toString.call(source[key]) == '[object Object]') {
        if (target[key]) {
          const obj = this.ObjectDeepAssign(target[key], source[key])
          Object.assign(output, { [key]: obj });
        } else {
          Object.assign(output, { [key]: source[key] });
        }

      } else {
        Object.assign(output, { [key]: source[key] });
      }
    })
    return output;
  }

  componentEventHandler(wigDataContext: any, eventItem: any, eventparams: any) {
    this.eventHandler = this._baseEventActionServiceBase.getEventHandler(eventItem.action)
    this.eventHandler!(wigDataContext, eventItem.params, eventparams, eventItem.posteventaction) //Executing method in current context
  }

  pageEventHandler(eventItem: any, eventparams: any) {
    switch (eventItem) {
      case WidgetConstants.ON_REQUEST:

        this.showSpinner()
        break;
      case WidgetConstants.ON_REQUEST_COMPLETED:


        this.hideSpinner()

        break;
    }
  }

  showSpinner() {
    if (this._baseSpinner) {
      this.requestCount++;
      this._baseSpinner.show()
    }
  }

  hideSpinner() {
    if (this._baseSpinner) {
      this.requestCount--;
      if (this.requestCount == 0) {
        this._baseSpinner.hide()
      }
    }
  }

  RefreshData() {
    this.compRefInstancesMap.forEach(instance => {
      instance.configModel.CallerToComp.emit(WidgetConstants.CALLER_TO_COMP_REFRESH_DATA);
    });

  }

  removeListeners() {
    this.compRefInstancesMap.forEach(instance => {
      instance.configModel.CompToCaller.removeAllListeners();
    });
  }

  removeListener(configModel: any) {
    configModel.CompToCaller.removeAllListeners();
  }

  OnPropChangedRemoveListeners() {
    this.compRefInstancesMap.forEach(instance => {
      instance.configModel.CompToCaller.removeAllListeners();
    });
  }

  // add event listener
  addEventListener(eventActions: any, dataModel: any, configModel: any) {
    if (eventActions) {
      configModel.EventAction = new Map(eventActions);
      configModel.EventAction.forEach((events: any, eventName: string) => {
        configModel.CompToCaller.addListener(eventName, (eventparams:any) => {
          events.forEach((eventItem:any) => {
            this.componentEventHandler(dataModel, eventItem, eventparams)
          });
        });
      });
    }
    // add listner for spinner on Request / On Request Completed
    configModel.CompToCaller.addListener(WidgetConstants.ON_REQUEST, (eventparams:any) => {
      this.pageEventHandler(WidgetConstants.ON_REQUEST, eventparams)
    });

    configModel.CompToCaller.addListener(WidgetConstants.ON_REQUEST_COMPLETED, (eventparams:any) => {
      this.pageEventHandler(WidgetConstants.ON_REQUEST_COMPLETED, eventparams)
    });
  }

  setGlobalParams(dataModel: any) {
    if (this.globalParameters) {
      dataModel.globalParameters = new Map(this.globalParameters);
    }
  }

  pageAPIMethodPut(apiDataUrl:any, requestData:any) {
    this.showSpinner();
    return new Promise((resolve, reject) => {
      this._baseServerApiBase.put<any, any>(apiDataUrl, requestData).subscribe(
        response => {
          this.hideSpinner();
          try {
            if (response) {
              resolve(response)
            }
          } catch (e) {
          }
        }, error => {
          this.hideSpinner();
          reject()
        }
      );
    })
  }

  pageAPIMethodPost(apiDataUrl:any, requestData:any) {
    this.showSpinner();
    return new Promise((resolve, reject) => {
      this._baseServerApiBase.post<any, any>(apiDataUrl, requestData).subscribe(
        response => {
          this.hideSpinner();
          try {
            if (response) {
              resolve(response)
            }
          } catch (e) {
          }
        }, error => {
          this.hideSpinner();
          reject()
        }
      );
    })
  }

  pageAPIMethodGet(apiDataUrl: any, requestParam?: any) {
    this.showSpinner();
    return new Promise((resolve, reject) => {
      this._baseServerApiBase.get<any>(apiDataUrl, requestParam).subscribe(
        response => {
          this.hideSpinner();
          try {
            if (response) {
              resolve(response)
            }
          } catch (e) {
          }
        }, error => {
          this.hideSpinner();
          reject()
        }
      );
    })
  }

}
