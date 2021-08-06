// import { dropdownFormModel } from 'src/app/modules/widget-app/dropdown-a1/dropdown-a1-model';
import { DropdownModel } from './dropdown-model';
import { MasterDataModel } from './master-data-model';
import { AppSettings } from './app-settings';


export class AppRepoModel {

    appSettingsMap: Map<string, AppSettings> = new Map<string, AppSettings>();
    masterDataByCategoryCode: Map<string, MasterDataModel[]> = new Map<string, MasterDataModel[]>();
    masterDataByCode: Map<string, MasterDataModel> = new Map<string, MasterDataModel>();
    navigationData: Map<string, any> = new Map<string, any>();

    
    constructor() {
       
    }

}