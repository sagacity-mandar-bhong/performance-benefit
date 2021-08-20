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
import { PerformanceCard2ConfigModel, PerformanceCard2DataModel } from '../widget-app/performance-card2/performance-card2-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends WidgetPageBase
implements OnInit, AfterViewInit, OnDestroy {

  performanceCard1DataModel?: PerformanceCard1DataModel;
  performanceCard1ConfigModel?:PerformanceCard1ConfigModel;

  performanceCard1DataModel2?: PerformanceCard1DataModel;
  performanceCard1ConfigModel2?:PerformanceCard1ConfigModel;

  performanceCard1DataModel3?: PerformanceCard1DataModel;
  performanceCard1ConfigModel3?:PerformanceCard1ConfigModel;

  performanceCard1DataModel4?: PerformanceCard1DataModel;
  performanceCard1ConfigModel4?:PerformanceCard1ConfigModel;

  performanceCard2DataModel?: PerformanceCard2DataModel;
  performanceCard2ConfigModel?: PerformanceCard2ConfigModel;

  performanceCard2DataModel2?: PerformanceCard2DataModel;
  performanceCard2ConfigModel2?: PerformanceCard2ConfigModel;

  performanceCard2DataModel3?: PerformanceCard2DataModel;
  performanceCard2ConfigModel3?: PerformanceCard2ConfigModel;

  performanceCard2DataModel4?: PerformanceCard2DataModel;
  performanceCard2ConfigModel4?: PerformanceCard2ConfigModel;

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

    this.performanceCard1DataModel2 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel2 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel3 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel3 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel4 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel4 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel= PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel2= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel2= PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel3= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel3= PerformanceCard1ConfigModel.getInstance();
  
    this.performanceCard2DataModel4= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel4= PerformanceCard1ConfigModel.getInstance();
  }

   ngOnInit(): void {
    this.bindPerformanceCard1DataModel();
    this.bindPerformanceCard1DataModel2();
    this.bindPerformanceCard1DataModel3();
    this.bindPerformanceCard1DataModel4();

    this.bindperformanceCard2DataModel();
    this.bindperformanceCard2DataModel2();
    this.bindperformanceCard2DataModel3();
    this.bindperformanceCard2DataModel4();
    // this.bindPerformanceCard1ConfigModel();
  }


  bindPerformanceCard1DataModel(){
    // this.performanceCard1DataModel.count="34";
    // this.performanceCard1DataModel.icon="home";
    // this.performanceCard1DataModel.text="sfasfafa"




    

        this.performanceCard1DataModel.data={
          count:"430,000",
          icon:"volunteer_activism",
      countColor:"#70AD47",

          text:"Total cost of Street Works"
          }
      
  }

  bindPerformanceCard1DataModel2(){
    this.performanceCard1DataModel2.data={
      count:"380,000",
      icon:"checklist",
      countColor:"#70AD47",

      text:"Cost of Permits"
      }
  }
  bindPerformanceCard1DataModel3(){
    this.performanceCard1DataModel3.data={
      count:"40,000",
      icon:"edit_note",
      countColor:"#E62E2D",

      text:"Fine & Penalties"
      }
  }

  bindPerformanceCard1DataModel4(){
    this.performanceCard1DataModel4.data={
      count:"10,000",
      icon:"thumb_down",
      countColor:"#E62E2D",
      text:"Cost of Poor Planning"
      }
  }


  bindperformanceCard2DataModel(){
    this.performanceCard2DataModel.data={
      subtext:"Potential",
      icon:"sentiment_satisfied_alt",
      subtext2:"CMeX / CSAT Impact",
      text:"High",
      backgroundColor:"#8EC7EA"
      }
  }

  bindperformanceCard2DataModel2(){
    this.performanceCard2DataModel2.data={
      subtext:"Potential",
      icon:"badge",
      subtext2:"CMeX / CSAT Impact",
      text:"20",
      backgroundColor:"#8ACC42"
      }
  }

  bindperformanceCard2DataModel3(){
    this.performanceCard2DataModel3.data={
      subtext:"Potential",
      icon:"groups",
      subtext2:"CMeX / CSAT Impact",
      text:"80%",
      backgroundColor:"#E96455"
      }
  }

  bindperformanceCard2DataModel4(){
    this.performanceCard2DataModel4.data={
      subtext:"Potential",
      icon:"real_estate_agent",
      subtext2:"CMeX / CSAT Impact",
      text:"70%",
      backgroundColor:"#F2BF11"
      }
  }

  ngAfterViewInit(): void {
    super.initBase();
  }
  
  ngOnDestroy(): void {
    super.removeListeners();
  }

}
