import { EventEmitter } from 'events';

export class PerformanceCard1ConfigModel {
  static getInstance<T>(): PerformanceCard1ConfigModel {
    let model = new PerformanceCard1ConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class PerformanceCard1DataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data: any;
    promoterPrefix: any;
    widgetStyle: any;
    static getInstance<T>(): PerformanceCard1DataModel {
      let model = new PerformanceCard1DataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
      return model;
    }
  }

  export interface PerformanceCard1Data {
    isIconEnable: boolean,
    isMatIcon: boolean,
    icon: string,
    iconColor: string,
    isTextEnable: boolean,
    text: string,
    textColor: string,
    isCountEnable: boolean,
    count: string,
    countColor: string,
    backgroundColor: string,
    widgetStyle : any
  }