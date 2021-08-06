import {
  Component,
  OnInit,
  Input,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Subscription } from "rxjs";
import {
  MatBDataA1Model,
  MatBDataA1ConfigModel,
  CLICK_EVENT,
} from "./mat-b-a1-model";
import { ServerApiInterfaceServiceService } from "src/app/services/common/server-api-interface-service.service";
import { NotificationService } from "src/app/services/common/notification.service";
import { SaveFileService } from "src/app/services/common/save-file.service";
import { WidgetComponentBase } from "src/app/modules/widget-utility/widget-component-base";
import { DatePipe } from "@angular/common";
import { ValidationService } from "src/app/services/common/validation.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AppRepoHelperService } from "src/app/services/common/app-repo-helper.service";
import { GLOBAL_PERSISTANT_DATA } from "src/app/constants/app-repo.constants";

@Component({
  selector: "app-mat-b-a1",
  templateUrl: "./mat-b-a1.component.html",
  styleUrls: ["./mat-b-a1.component.css"],
  animations: [
    trigger("openClose", [
      // ...
      state(
        "open",
        style({
          position: "relative",
          // top: 0,
          left: 0,
          width: "100%",
        })
      ),
      state(
        "closed",
        style({
          left: "100%",
        })
      ),
      transition("open => closed", [animate("0.5s")]),
      transition("closed => open", [animate("0.3s")]),
      transition("* => closed", [animate("0.5s")]),
      transition("* => open", [animate("0.3s")]),
      transition("open <=> closed", [animate("0.3s")]),
      transition("* => open", [animate("0.5s", style({ opacity: "*" }))]),
      transition("* => *", [animate("0.5s")]),
    ]),

    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class MatBA1Component
  extends WidgetComponentBase
  implements OnInit, OnDestroy
{
  pageno: number;
  pagelimit: number;
  pageSize = 5;
  clickEvent = CLICK_EVENT;
  pageChangeSubscription: Subscription;
  displayedColumns: string[] = [];
  colData;
  @Input() dataModel: MatBDataA1Model;
  @Input() configModel: MatBDataA1ConfigModel;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  selectedRowDataId: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private _notificationService: NotificationService,
    private _saveFileService: SaveFileService,
    private datepipe: DatePipe,
    public formBuilder: FormBuilder,
    public _validationService: ValidationService,
    public _appRepoHelperService: AppRepoHelperService
  ) {
    super(formBuilder, _serverApi, datepipe, null, _appRepoHelperService);
  }

  ngOnInit() {
    // this.dataModel.dataSource = new MatTableDataSource<any>();
    // this.paginator.length = 100;
    // this.dataModel.dataSource.paginator = this.paginator;
    // this.dataModel.dataSource.paginator.length = 100;
    this.displayedColumns = this.dataModel.columndata.map((item) => item.field);
    this.pageno = this.paginator.pageIndex;
    this.pagelimit = this.dataModel.pageSize;
    this.SetRequestData();
    this.wgOnInint();

    this.pageChangeSubscription = this.paginator.page.subscribe(() => {
      this.pageno = this.paginator.pageIndex;
      this.pagelimit = this.paginator.pageSize;
      this.SetRequestData();
      this.wgGetControlData().then((response) => {
        this.ConvertData(response);
      });
    });
  }

  SetRequestData() {
    this.dataModel.apireqdata.fromlimit =
      this.pagelimit * this.pageno ? this.pagelimit * this.pageno : 0;
    this.dataModel.apireqdata.tolimit = this.pagelimit ? this.pagelimit : 0;
    this.dataModel.apireqdata.sortBy = this.sort
      ? this.sort.active
      : this.dataModel.defaultSortBy;
    this.dataModel.apireqdata.sortDirection = this.sort
      ? this.sort.direction
      : this.dataModel.defaultSortDirection;
  }

  ConvertData(resp) {
    this.dataModel.dataSource = resp.data;
    this.dataModel.length = resp.count;
    this.dataModel.dataSource.paginator = this.paginator;
    resp.data.forEach(function (rowData) {
      if (rowData.uiMetaData) {
        rowData.metadata = JSON.parse(rowData.uiMetaData);
      }
    });
  }

  clickEventHandler(clickmethod: string, i, data: any, actionName: string) {
    let eventDataObj:any = new Object();
    eventDataObj.dataContext = data;

    switch (clickmethod) {
      case "onClick":
        this.onClick(actionName, eventDataObj);
        break;
      case "onSubmitBtnClick":
        this.onSubmitBtnClick(actionName, data);
        break;
    }
  }

  onSubmitBtnClick(actionName, data) {
    let eventDataObj = Object();
    eventDataObj = this.dataModel.submitProperties;
    eventDataObj.queryAction = "insert";
    eventDataObj.dataContext = data;
    let action = actionName;

    if (this.configModel.EventAction.has(action)) {
      this.configModel.CompToCaller.emit(action, eventDataObj);
    }
  }

  onClick(actionname, data?: any) {
    if (this.configModel.EventAction.has(actionname)) {
      this.configModel.CompToCaller.emit(actionname, data);
    }
  }

  onSearch(filterValue: string) {
    this.SetRequestData();
    this.wgGetControlData().then((response) => {
      this.ConvertData(response);
    });
  }

  radioButtonClick(element: any) {
    this.onClick(this.clickEvent.ON_RADIO_BTN_CLICK, element);
  }

  GetValue() {
    this.dataModel.dataSource.filteredData;
  }

  ResetPagination() {
    this.paginator.pageIndex = 0;
    this.pageno = this.paginator.pageIndex;
  }

  sortData(event: any) {
    this.ResetPagination();
    this.SetRequestData();
    this.wgGetControlData().then((response) => {
      this.ConvertData(response);
    });
  }

  setFieldData() {}
  setMode(responseDataModel: any) {}
  SetValue(responseDataModel: any) {}

  getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  ngOnDestroy(): void {
    if (this.pageChangeSubscription) {
      this.pageChangeSubscription.unsubscribe();
    }
  }
}
