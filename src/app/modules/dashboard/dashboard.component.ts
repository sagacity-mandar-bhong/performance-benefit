import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { PerformanceCard1ConfigModel, PerformanceCard1DataModel } from '../widget-app/performace-card1/performance-card1-model';
import { WidgetPageBase } from '../widget-utility/widget-page-base';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { NotificationService } from 'src/app/services/common/notification.service';
// import { SaveFileService } from 'src/app/services/common/save-file.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
// import { GLOBAL_PERSISTANT_DATA } from 'src/app/constants/app-repo.constants';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends WidgetPageBase
implements OnInit, AfterViewInit, OnDestroy {

  performanceCard1DataModel?: PerformanceCard1DataModel;
  performanceCard1ConfigModel?:PerformanceCard1ConfigModel;
  

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _sessionStorageService: SessionStorageService,
    private _eventActionService: EventActionService,
    private _router: Router,
    private route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    // private _saveFileService: SaveFileService,
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

    this.pageReq = { page: 'dashboard' };
    this.pageprop = Object();
    this.pageInstance = this;

    this.performanceCard1DataModel = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel = PerformanceCard1ConfigModel.getInstance();

   }

   ngOnInit(): void {
    // this.bindCompanyFormDataModel();
    // this.bindCompanyFormConfigModel();
  }

  ngAfterViewInit(): void {
    super.initBase();
  }
  
  ngOnDestroy(): void {
    super.removeListeners();
  }

}
