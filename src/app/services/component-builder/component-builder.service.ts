import { ComponentFactoryResolver, ComponentRef, Injectable } from '@angular/core';
// import { WIDGET_LIBRARY } from 'src/app/app-constants';
// import { PlaceHolderComponent } from 'src/app/modules/shared/place-holder/place-holder.component';

// import { BarChartA4Component } from 'src/app/modules/widgets/barchart/bar-chart-a4/bar-chart-a4.component';
// import { BarChartA4Model, BarChartA4ConfigModel } from 'src/app/modules/widgets/barchart/bar-chart-a4/bar-chart-a4-model';
// import { PieChartA2Component } from 'src/app/modules/widgets/piechart/pie-chart-a2/pie-chart-a2.component';
// import { PieChartA2Model, PieChartA2ConfigModel } from 'src/app/modules/widgets/piechart/pie-chart-a2/pie-chart-a2-model';
// import { LineChartA2Component } from 'src/app/modules/widgets/linechart/line-chart-a2/line-chart-a2.component';
// import { LineChartA2Model, LineChartA2ConfigModel } from 'src/app/modules/widgets/linechart/line-chart-a2/line-chart-a2-model';
// import { ProgressBarA2Component } from 'src/app/modules/widgets/progressbar/progress-bar-a2/progress-bar-a2.component';
// import { ProgressA2Model, ProgressA2ConfigModel } from 'src/app/modules/widgets/progressbar/progress-bar-a2/progress-bar-a2-model';
// import { BarLineComboChartA1Component } from 'src/app/modules/widgets/comboChart/bar-line-combo-chart-a1/bar-line-combo-chart-a1.component';
// import { BarLineComboChartA1A1Model, BarLineComboChartA1ConfigModel } from 'src/app/modules/widgets/comboChart/bar-line-combo-chart-a1/bar-line-combo-chart-a1-model';
// import { PieGridA1Component } from 'src/app/modules/widgets/piegrid/pie-grid-a1/pie-grid-a1.component';
// import { PieGridA1Model, PieGridA1ConfigModel } from 'src/app/modules/widgets/piegrid/pie-grid-a1/pie-grid-a1-model';
// import { ProgressBarA1Component } from 'src/app/modules/widgets/progressbar/progress-bar-a1/progress-bar-a1.component';
// import { ProgressA1Model, ProgressA1ConfigModel } from 'src/app/modules/widgets/progressbar/progress-bar-a1/progress-a1-model';
// import { AreaChartA1Component } from 'src/app/modules/widgets/areachart/area-chart-a1/area-chart-a1.component';
// import { AreaChartA1Model, AreaChartA1ConfigModel } from 'src/app/modules/widgets/areachart/area-chart-a1/area-chart-a1-model';
// import { StepperA1Component } from 'src/app/modules/widgets/stepper/stepper-a1/stepper-a1.component';
// import { StepperA1Model, StepperA1ConfigModel } from 'src/app/modules/widgets/stepper/stepper-a1/stepper-a1-model';
// import { StatReportA1Component } from 'src/app/modules/widgets/statreport/stat-report-a1/stat-report-a1.component';
// import { StatReportA1Model, StatReportA1ConfigModel } from 'src/app/modules/widgets/statreport/stat-report-a1/stat-report-a1-model';
// import { MatBA1Component } from 'src/app/modules/widget-app/data-input/mat-bil-a1/mat-b-a1/mat-b-a1.component';
// import { MatBDataA1ConfigModel, MatBDataA1Model } from 'src/app/modules/widget-app/data-input/mat-bil-a1/mat-b-a1/mat-b-a1-model';
// import { BillingFormA1Model, BillingFormA1ConfigModel } from 'src/app/modules/widget-app/billing-form/billing-form-a1/billing-form-a1-model';
// import { BillingFormA1Component } from 'src/app/modules/widget-app/billing-form/billing-form-a1/billing-form-a1.component';
// import { ButtonA1Component } from 'src/app/modules/widgets/button/button-a1/button-a1.component';
// import { ButtonA1Model, ButtonA1ConfigModel } from 'src/app/modules/widgets/button/button-a1/button-a1-model';
// import { AddButtonComponent } from 'src/app/modules/widget-app/add-button/add-button.component';
// import { AddButtonModel, AddButtonConfigModel } from 'src/app/modules/widget-app/add-button/add-button-model';
// import { DataFormComponent } from 'src/app/modules/widget-app/dataForm/data-form/data-form.component';
// import { DataFormConfigModel, DataFormModel } from 'src/app/modules/widget-app/dataForm/data-form/data-form-model';
// import { VerticalTimelineComponent } from 'src/app/modules/widget-app/vertical-timeline/vertical-timeline.component';
// import { VerticalTimelineModel, VerticalTimelineConfigModel } from 'src/app/modules/widget-app/vertical-timeline/vertical-timeline-model';
// import { NavigationComponent } from 'src/app/modules/widget-app/navigation/navigation.component';
// import { NavigationConfigModel, NavigationModel } from 'src/app/modules/widget-app/navigation/navigation-model';
// import { FileExplorerComponent } from 'src/app/modules/widget-app/fileExplorer/file-explorer/file-explorer.component';
// import { FileExplorerModel, FileExplorerConfigModel } from 'src/app/modules/widget-app/fileExplorer/file-explorer/file-explorer-model';
// import { FileUploadComponent } from 'src/app/modules/widget-app/file-upload/file-upload.component';
// import { FileUploadModel, FileUploadConfigModel } from 'src/app/modules/widget-app/file-upload/file-upload-model';
// import { NewRegistrationComponent } from 'src/app/modules/widget-app/new-registration/new-registration.component';
// import { NewRegistrationModel, NewRegistrationConfigModel } from 'src/app/modules/widget-app/new-registration/new-registration-model';
// import { RegistrationFormComponent } from 'src/app/modules/widget-app/registration-form/registration-form.component';
// import { RegistrationFormConfigModel, RegistrationFormModel } from 'src/app/modules/widget-app/registration-form/registration-form-model';
// import { ContactFormComponent } from 'src/app/modules/widget-app/contact-form/contact-form.component';
// import { ContactFormConfigModel, ContactFormModel } from 'src/app/modules/widget-app/contact-form/contact-form-model';
// import { TaxFormComponent } from 'src/app/modules/widget-app/tax-form/tax-form.component';
// import { TaxFormConfigModel, TaxFormModel } from 'src/app/modules/widget-app/tax-form/tax-form-model';
// import { OrganizationFormComponent } from 'src/app/modules/widget-app/organization-form/organization-form.component';
// import { OrganizationFormModel, OrganizationFormConfigModel } from 'src/app/modules/widget-app/organization-form/organization-form-model';
// import { AccountDeptComponent } from 'src/app/modules/widget-app/account-dept/account-dept.component';
// import { AccountDeptConfigModel, AccountDeptModel } from 'src/app/modules/widget-app/account-dept/account-dept-model';
// import { BankFormComponent } from 'src/app/modules/widget-app/bank-form/bank-form.component';
// import { BankFormModel, BankFormConfigModel } from 'src/app/modules/widget-app/bank-form/bank-form-model';
// import { GstFormComponent } from 'src/app/modules/widget-app/gst-form/gst-form.component';
// import { GstFormModel, GstFormConfigModel } from 'src/app/modules/widget-app/gst-form/gst-form-model';
// import { ContinueRegistrationComponent } from 'src/app/modules/widget-app/continue-registration/continue-registration.component';
// import { ContinueRegFormModel, ContinueRegFormConfigModel } from 'src/app/modules/widget-app/continue-registration/continue-registration-model';
// import { DropdownA1Component } from 'src/app/modules/widget-app/dropdown-a1/dropdown-a1.component';
// import { dropdownFormModel, DropdownA1Model, DropdownA1ConfigModel } from 'src/app/modules/widget-app/dropdown-a1/dropdown-a1-model';
// import { DragdropComponent } from 'src/app/modules/widget-app/drag-drop/dragdrop.component';
// import { CrAddCaseinfoFormComponent } from 'src/app/modules/widget-app/cr-add-caseinfo-form/cr-add-caseinfo-form.component';
// import { CaseInformationModel, CaseInformationConfigModel } from 'src/app/modules/widget-app/cr-add-caseinfo-form/cr-add-caseinfo-form.model';
// import { CrSelectCertificateFormComponent } from 'src/app/modules/widget-app/cr-select-certificate-form/cr-select-certificate-form.component';
// import { SelectCertificateDataModel, SelectCertificateFormConfigModel } from 'src/app/modules/widget-app/cr-select-certificate-form/cr-select-certificate-form.model';
// import { DragdropModel, DragdropConfigModel } from 'src/app/modules/widget-app/drag-drop/dragdrop-model';
// import { BillingDataModel, BillingConfigModel } from 'src/app/modules/widget-app/cr-add-billing/cr-add-billing.model';
// import { CrAddBillingComponent } from 'src/app/modules/widget-app/cr-add-billing/cr-add-billing.component';
// import { CrAddBillingManufactureDetailsComponent } from 'src/app/modules/widget-app/cr-add-billing-manufacture-details/cr-add-billing-manufacture-details.component';
// import { BillingMDDataModel, BillingMDConfigModel } from 'src/app/modules/widget-app/cr-add-billing-manufacture-details/cr-add-billing-manufacture-details.model';
// import { HorizontalStepperModel, HorizontalStepperConfigModel } from 'src/app/modules/widgets/horizontal-stepper/horizontal-stepper-model';
// import { HorizontalStepperComponent } from 'src/app/modules/widgets/horizontal-stepper/horizontal-stepper.component';
// import { ButtonA2Component } from 'src/app/modules/widgets/button/button-a2/button-a2.component';
// import { ButtonA2ConfigModel, ButtonA2DataModel } from 'src/app/modules/widgets/button/button-a2/button-a2.model';
// import { VehicleModelSelectionComponent } from 'src/app/modules/widget-app/vehicle-model-selection/vehicle-model-selection.component';
// import { ModelSelectionModel, ModelSelectionConfigModel } from 'src/app/modules/widget-app/vehicle-model-selection/vehicle-model-selection-model';
// import { TableA2Component } from 'src/app/modules/widget-app/data-input/table-a1/table-a2.component';
// import { TableA2Model, TableA2ConfigModel } from 'src/app/modules/widget-app/data-input/table-a1/table-a2-model';
// import { CrAddShippingFormComponent } from 'src/app/modules/widget-app/cr-add-shipping-form/cr-add-shipping-form.component';
// import { CrAddCaseCoOrdFormComponent } from 'src/app/modules/widget-app/cr-add-case-co-ord-form/cr-add-case-co-ord-form.component';
// import { CaseCoOrdinatiorDataModel, CaseCoOrdinatiorConfigModel } from 'src/app/modules/widget-app/cr-add-case-co-ord-form/cr-add-case-co-ord.model';
// import { ShippingConfigModel, ShippingDataModel } from 'src/app/modules/widget-app/cr-add-shipping-form/cr-add-shipping-form.model';
// import { UploadFormComponent } from 'src/app/modules/widget-app/upload-form/upload-form.component';
// import { UploadFormModel, UploadFormConfigModel } from 'src/app/modules/widget-app/upload-form/upload-form-model';
// import { DropdownA2Component } from 'src/app/modules/widget-app/dropdown-a2/dropdown-a2.component';
// import { DropdownA2ConfigModel, DropdownA2Model } from 'src/app/modules/widget-app/dropdown-a2/dropdown-a2-model';
// // import { CrAddShippingFormComponent } from 'src/app/modules/widget-app/cr-add-shipping-form/cr-add-shipping-form.component';
// // import { ShippingDataModel, ShippingConfigModel } from 'src/app/modules/widget-app/cr-add-shipping-form/cr-add-shipping-form.model';
// import { CrUploadDocExcelTablesComponent } from 'src/app/modules/widget-app/cr-upload-doc-excel-tables/cr-upload-doc-excel-tables.component';
// import { UploadDocExcelTablesDataModel, UploadDocExcelTablesConfigModel } from 'src/app/modules/widget-app/cr-upload-doc-excel-tables/cr-upload-doc-excel-tables-model';
// import { DocumentVerificationComponent } from 'src/app/modules/widget-app/document-verification/document-verification.component';
// import { DocumentVerificationModel, DocumentVerificationConfigModel } from 'src/app/modules/widget-app/document-verification/document-verification-model';
// import { ConfirmationTextComponent } from 'src/app/modules/widget-app/confirmation-text/confirmation-text.component';
// import { ConfirmationTextModel, ConfirmationTextConfigModel } from 'src/app/modules/widget-app/confirmation-text/confirmation-text-model';
// // import { TableA2Component } from 'src/app/modules/widget-app/data-input/table-a1/table-a2.component';
// import { CaseListRegistrationModel, CaseListRegistrationConfigModel } from 'src/app/modules/widget-app/case-list-registration/case-list-registration-model';
// import { CaseListRegistrationComponent } from 'src/app/modules/widget-app/case-list-registration/case-list-registration.component';
// import { CaseListDetailsComponent } from 'src/app/modules/widget-app/case-list-details/case-list-details.component';
// import { CaseListDetailsConfigModel, CaseListDetailsModel } from 'src/app/modules/widget-app/case-list-details/case-list-details-model';
// import { UserAddComponent } from 'src/app/modules/widget-app/user-management/user-add/user-add.component';
// import { AddUserConfigModel, AddUserDataModel } from 'src/app/modules/widget-app/user-management/user-add/user-add-form.model';
// import { NewRegistrationForm2Component } from 'src/app/modules/widget-app/new-registration-form2/new-registration-form2.component';
// import { NewRegistrationForm2Model, NewRegistrationForm2ConfigModel } from 'src/app/modules/widget-app/new-registration-form2/new-registration-form2-model';
// import { UserFilterConfigModel, UserFilterDataModel } from 'src/app/modules/widget-app/user-management/user-filter/user-filter-form.model';
// import { UserFilterComponent } from 'src/app/modules/widget-app/user-management/user-filter/user-filter.component';
// import { QuotationSearchComponent } from 'src/app/modules/widget-app/quotation/quotation-search/quotation-search.component';
// import { QuotationSearchConfigModel, QuotationSearchDataModel } from 'src/app/modules/widget-app/quotation/quotation-search/quotation-search.model';
// import { ChangePasswordDataModel, ChangePasswordConfigModel } from 'src/app/modules/widget-app/user-management/change-password/change-password-form.model';
// import { ChangePasswordComponent } from 'src/app/modules/widget-app/user-management/change-password/change-password.component';
// import { MatTabComponent } from 'src/app/modules/widget-app/mat-tab/mat-tab.component';
// import { MatTabModel, MatTabConfigModel } from 'src/app/modules/widget-app/mat-tab/mat-tab-model';
// import { CaseSearchConfigModel, CaseSearchDataModel } from 'src/app/modules/widget-app/case/case-search/case-search-model';
// import { CaseSearchComponent } from 'src/app/modules/widget-app/case/case-search/case-search.component';
// import { AddShippingSearchComponent } from 'src/app/modules/widget-app/add-shipping/add-shipping-search/add-shipping-search.component';
// import { AddShippingSearchConfigModel, AddShippingSearchDataModel } from 'src/app/modules/widget-app/add-shipping/add-shipping-search/add-shipping-search-model';
// import { CrCaseCoOrdSearchComponent } from 'src/app/modules/widget-app/cr-case-co-ord-search/cr-case-co-ord-search.component';
// import { MatTabA1ConfigModel, MatTabA1Model } from 'src/app/modules/widget-app/mat-tab-a1/mat-tab-a1-model';
// import { MatTabA1Component } from 'src/app/modules/widget-app/mat-tab-a1/mat-tab-a1.component';
// import { CompanyFilterComponent } from 'src/app/modules/widget-app/company/company-filter/company-filter.component';
// import { CompanyFilterConfigModel, CompanyFilterDataModel } from 'src/app/modules/widget-app/company/company-filter/company-filter.model';
// import { CompRegConfirmationComponent } from 'src/app/modules/widget-app/comp-reg-confirmation/comp-reg-confirmation.component';
// import { CompRegConfirmationConfigModel, CompRegConfirmationDataModel } from 'src/app/modules/widget-app/comp-reg-confirmation/comp-reg-confirmatiom.model';
// import { CompanyApproveComponent } from 'src/app/modules/widget-app/company/company-approve/company-approve.component';
// import { CompanyApproveConfigModel, CompanyApproveDataModel } from 'src/app/modules/widget-app/company/company-approve/company-approve.model';
// import { VerticalMenuConfigModel, VerticalMenuDataModel } from 'src/app/modules/widgets/vertical-menu/vertical-menu-model';
// import { VerticalMenuComponent } from 'src/app/modules/widgets/vertical-menu/vertical-menu.component';
// import { AlertsFilterComponent } from 'src/app/modules/widget-app/alerts/alerts-filter/alerts-filter.component';
// import { AlertsFilterConfigModel, AlertsFilterDataModel } from 'src/app/modules/widget-app/alerts/alerts-filter/alerts-filter-form.model';
// import { QueryFilterComponent } from 'src/app/modules/widget-app/case-query/query-filter/query-filter.component';
// import { QueryFilterConfigModel, QueryFilterDataModel } from 'src/app/modules/widget-app/case-query/query-filter/query-filter-form.model';
// import { QueryFormComponent } from 'src/app/modules/widget-app/case-query/query-form/query-form.component';
// import { QueryFormConfigModel, QueryFormDataModel } from 'src/app/modules/widget-app/case-query/query-form/query-form-model';
// import { RemarkFilterComponent } from 'src/app/modules/widget-app/case-remark/remark-filter/remark-filter.component';
// import { RemarkFilterConfigModel, RemarkFilterDataModel } from 'src/app/modules/widget-app/case-remark/remark-filter/remark-filter-form-model';
// import { CaseViewFormComponent } from 'src/app/modules/widget-app/case/case-view-form/case-view-form.component';
// import { CaseViewFormConfigModel, CaseViewFormDataModel } from 'src/app/modules/widget-app/case/case-view-form/case-view-form-model';
// import { DocumentsFilterComponent } from 'src/app/modules/widget-app/case-docs/documents-filter/documents-filter.component';
// import { DocumentsFilterConfigModel, DocumentsFilterDataModel } from 'src/app/modules/widget-app/case-docs/documents-filter/documents-filter-form.model';
// import { DocHistoryFilterComponent } from 'src/app/modules/widget-app/case-docs/doc-history-filter/doc-history-filter.component';
// import { DocHistoryFilterDataModel, DocHistoryFilterConfigModel } from 'src/app/modules/widget-app/case-docs/doc-history-filter/doc-history-filter.model';
// import { DocHistoryDetailsComponent } from 'src/app/modules/widget-app/case-docs/doc-history-details/doc-history-details.component';
// import { DocHistoryDetailsDataModel, DocHistoryDetailsConfigModel } from 'src/app/modules/widget-app/case-docs/doc-history-details/doc-history-details.model';
// import { CvCaseDeptContainerComponent } from 'src/app/modules/request-data/case-view/cv-case-dept-container/cv-case-dept-container.component';
// import { CvDeptFilterComponent } from 'src/app/modules/widget-app/case/cv-dept-filter/cv-dept-filter.component';
// import { DeptFilterConfigModel, DeptFilterDataModel } from 'src/app/modules/widget-app/case/cv-dept-filter/cv-dept-filter-model';
// import { DeptViewFormConfigModel, DeptViewFormDataModel } from 'src/app/modules/widget-app/case/dept-view-form/dept-view-form-model';
// import { DeptViewFormComponent } from 'src/app/modules/widget-app/case/dept-view-form/dept-view-form.component';
// import { TinyMceEditorComponent } from 'src/app/modules/widget-app/tiny-mce-editor/tiny-mce-editor.component';
// import { TinyMceEditorConfigModel, TinyMceEditorDataModel } from 'src/app/modules/widget-app/tiny-mce-editor/tiny-mce-editor-model';
// import { CkEditorComponent } from 'src/app/modules/widgets/ck-editor/ck-editor.component';
// import { CrDyanamicTextComponent } from 'src/app/modules/widget-app/cr-dyanamic-text/cr-dyanamic-text.component';
// import { CrDyanamicTextDataModel, CrDyanamicTextConfigModel } from 'src/app/modules/widget-app/cr-dyanamic-text/cr-dyanamic-text.model';
// import { CrAddNewAddressComponent } from 'src/app/modules/widget-app/cr-add-new-address/cr-add-new-address.component';
// import { CrAddNewAddressDataModel, CrAddNewAddressConfigModel } from 'src/app/modules/widget-app/cr-add-new-address/cr-add-new-address.model';
// import { CrAddNewCoOrdinatorComponent } from 'src/app/modules/widget-app/cr-add-new-co-ordinator/cr-add-new-co-ordinator.component';
// import { CrAddNewCoOrdinatorDataModel, CrAddNewCoOrdinatorConfigModel } from 'src/app/modules/widget-app/cr-add-new-co-ordinator/cr-add-new-co-ordinator.model';
// import { ResetPassFormComponent } from 'src/app/modules/widget-app/reset-pass-form/reset-pass-form.component';
// import { ResetPasswordFormConfigModel, ResetPasswordFormDataModel } from 'src/app/modules/widget-app/reset-pass-form/reset-pass-form.model';
// import { InvoiceSearchComponent } from 'src/app/modules/widget-app/invoice/invoice-search/invoice-search.component';
// import { InvoiceSearchConfigModel, InvoiceSearchDataModel } from 'src/app/modules/widget-app/invoice/invoice-search/invoice-search.model';
// import { StorageRepoFilterComponent } from 'src/app/modules/widget-app/storage-repo-filter/storage-repo-filter.component';
// import { StorageRepoFilterConfigModel, StorageRepoFilterDataModel } from 'src/app/modules/widget-app/storage-repo-filter/storage-repo-filter-model';
// import { CaseViewInfoComponent } from 'src/app/modules/widget-app/case-view-info/case-view-info.component';
// import { CaseViewInfoConfigModel, CaseViewInfoDataModel } from 'src/app/modules/widget-app/case-view-info/case-view-info-model';
// import { DataTemplatesFilterComponent } from 'src/app/modules/widget-app/data-templates/data-templates-filter/data-templates-filter.component';
// import { DataTemplatesFilterConfigModel, DataTemplatesFilterDataModel } from 'src/app/modules/widget-app/data-templates/data-templates-filter/data-templates-model';
// import { AlertViewFormDataModel, AlertViewFormConfigModel } from 'src/app/modules/widget-app/alerts/alert-view-form/alert-view-form.model';
// import { AlertViewFormComponent } from 'src/app/modules/widget-app/alerts/alert-view-form/alert-view-form.component';
// import { AllCasesAlertsFilterComponent } from 'src/app/modules/widget-app/alerts/all-cases-alerts-filter/all-cases-alerts-filter.component';
// import { AllCasesAlertsFilterConfigModel, AllCasesAlertsFilterDataModel } from 'src/app/modules/widget-app/alerts/all-cases-alerts-filter/all-cases-alerts-filter.model';

@Injectable({
    providedIn: 'root'
})
export class ComponentBuilderService {

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {

    }

    // CreateComponet(componetName: string, holderRef: PlaceHolderComponent) {

    //     let componentFactory;
    //     let componentRef: ComponentRef<any>
    //     let isSuccess: boolean = false;

    //     let viewContainerRef = holderRef.viewContainerRef;

    //     viewContainerRef.clear();

    //     switch (componetName) {
    //         case WIDGET_LIBRARY.CONST_BAR_CHART_A4_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(BarChartA4Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = BarChartA4Model.getInstance();
    //             componentRef.instance.configModel = BarChartA4ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         // case WIDGET_LIBRARY.CONST_PIE_CHART_A2_NAME:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(PieChartA2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = PieChartA2Model.getInstance();
    //         //     componentRef.instance.configModel = PieChartA2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_PIE_CHART_A3_NAME:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(PieChartA3Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = PieChartA3Model.getInstance();
    //         //     componentRef.instance.configModel = PieChartA3ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         case WIDGET_LIBRARY.CONST_LINE_CHART_A2_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(LineChartA2Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = LineChartA2Model.getInstance();
    //             componentRef.instance.configModel = LineChartA2ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_PROGRESS_BAR_A2_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ProgressBarA2Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ProgressA2Model.getInstance();
    //             componentRef.instance.configModel = ProgressA2ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_BAR_LINE_COMBO_CHART_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(BarLineComboChartA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = BarLineComboChartA1A1Model.getInstance();
    //             componentRef.instance.configModel = BarLineComboChartA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_PIE_GRID_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(PieGridA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = PieGridA1Model.getInstance();
    //             componentRef.instance.configModel = PieGridA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_PROGRESS_BAR_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ProgressBarA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ProgressA1Model.getInstance();
    //             componentRef.instance.configModel = ProgressA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_AREA_CHART_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(AreaChartA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = AreaChartA1Model.getInstance();
    //             componentRef.instance.configModel = AreaChartA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;


    //         case WIDGET_LIBRARY.CONST_STEPPER_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(StepperA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = StepperA1Model.getInstance();
    //             componentRef.instance.configModel = StepperA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;


    //         case WIDGET_LIBRARY.CONST_STAT_REPORT_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(StatReportA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = StatReportA1Model.getInstance();
    //             componentRef.instance.configModel = StatReportA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_Mat_B_A1:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(MatBA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = MatBDataA1Model.getInstance();
    //             componentRef.instance.configModel = MatBDataA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_Billing_Form_A1:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(BillingFormA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = BillingFormA1Model.getInstance();
    //             componentRef.instance.configModel = BillingFormA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_BUTTON_A1_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ButtonA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ButtonA1Model.getInstance();
    //             componentRef.instance.configModel = ButtonA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_DATA_FORM_NAME:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DataFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DataFormModel.getInstance();
    //             componentRef.instance.configModel = DataFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_ADD_BUTTON:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(AddButtonComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = AddButtonModel.getInstance();
    //             componentRef.instance.configModel = AddButtonConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_VERTICAL_TIMELINE:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(VerticalTimelineComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = VerticalTimelineModel.getInstance();
    //             componentRef.instance.configModel = VerticalTimelineConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_NAVIGATION:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(NavigationComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = NavigationModel.getInstance();
    //             componentRef.instance.configModel = NavigationConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_FILE_EXPLORER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(FileExplorerComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = FileExplorerModel.getInstance();
    //             componentRef.instance.configModel = FileExplorerConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_FILE_UPLOAD:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(FileUploadComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = FileUploadModel.getInstance();
    //             componentRef.instance.configModel = FileUploadConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_NEW_REGISTRATION:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(NewRegistrationComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = NewRegistrationModel.getInstance();
    //             componentRef.instance.configModel = NewRegistrationConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_REGISTRATION_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(RegistrationFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = RegistrationFormModel.getInstance();
    //             componentRef.instance.configModel = RegistrationFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CONTACT_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ContactFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ContactFormModel.getInstance();
    //             componentRef.instance.configModel = ContactFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_TAX_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(TaxFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = TaxFormModel.getInstance();
    //             componentRef.instance.configModel = TaxFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_ORGANIZATION_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(OrganizationFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = OrganizationFormModel.getInstance();
    //             componentRef.instance.configModel = OrganizationFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_ACCOUNT_DEPT_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(AccountDeptComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = AccountDeptModel.getInstance();
    //             componentRef.instance.configModel = AccountDeptConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_BANK_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(BankFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = BankFormModel.getInstance();
    //             componentRef.instance.configModel = BankFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_GST_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(GstFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = GstFormModel.getInstance();
    //             componentRef.instance.configModel = GstFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CONTINUE_REG_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ContinueRegistrationComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ContinueRegFormModel.getInstance();
    //             componentRef.instance.configModel = ContinueRegFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_DROPDOWN_A1:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DropdownA1Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DropdownA1Model.getInstance();
    //             componentRef.instance.configModel = DropdownA1ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_DRAG_DROP:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DragdropComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DragdropModel.getInstance();
    //             componentRef.instance.configModel = DragdropConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_INFORMATION:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddCaseinfoFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CaseInformationModel.getInstance();
    //             componentRef.instance.configModel = CaseInformationConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CR_SELECT_CERTIFICATE:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrSelectCertificateFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = SelectCertificateDataModel.getInstance();
    //             componentRef.instance.configModel = SelectCertificateFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_HORIZONTAL_STEPPER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(HorizontalStepperComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = HorizontalStepperModel.getInstance();
    //             componentRef.instance.configModel = HorizontalStepperConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_VERTICAL_MENU:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(VerticalMenuComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = VerticalMenuDataModel.getInstance();
    //             componentRef.instance.configModel = VerticalMenuConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CR_ADD_BILLING:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddBillingComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = BillingDataModel.getInstance();
    //             componentRef.instance.configModel = BillingConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CR_ADD_BILLING_MANU_DETAILS:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddBillingManufactureDetailsComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = BillingMDDataModel.getInstance();
    //             componentRef.instance.configModel = BillingMDConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CR_ADD_SHIPPING_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddShippingFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ShippingDataModel.getInstance();
    //             componentRef.instance.configModel = ShippingConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_BUTTON_A2:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ButtonA2Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ButtonA2DataModel.getInstance();
    //             componentRef.instance.configModel = ButtonA2ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CR_ADD_CASE_CO_ORD_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddCaseCoOrdFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CaseCoOrdinatiorDataModel.getInstance();
    //             componentRef.instance.configModel = CaseCoOrdinatiorConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_MODEL_SELECTION:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(VehicleModelSelectionComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ModelSelectionModel.getInstance();
    //             componentRef.instance.configModel = ModelSelectionConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CASE_LIST_REGISTRATION:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseListRegistrationComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CaseListRegistrationModel.getInstance();
    //             componentRef.instance.configModel = CaseListRegistrationConfigModel.getInstance();
    //             isSuccess = true;
    //             break;


    //         case WIDGET_LIBRARY.CONST_CASE_LIST_DETAILS:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseListDetailsComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CaseListDetailsModel.getInstance();
    //             componentRef.instance.configModel = CaseListDetailsConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         // case WIDGET_LIBRARY.CONST_TABLE_A2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(TableA2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = TableA2Model.getInstance();
    //         //     componentRef.instance.configModel = TableA2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         // break;
    //         case WIDGET_LIBRARY.CONST_TABLE_A2:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(TableA2Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = TableA2Model.getInstance();
    //             componentRef.instance.configModel = TableA2ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_UPLOAD_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(UploadFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = UploadFormModel.getInstance();
    //             componentRef.instance.configModel = UploadFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_DROPDOWN_A2:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DropdownA2Component);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DropdownA2Model.getInstance();
    //             componentRef.instance.configModel = DropdownA2ConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         // case WIDGET_LIBRARY.CONST_UPLOAD_DOC_EXCEL_TABLES:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrUploadDocExcelTablesComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = UploadDocExcelTablesDataModel.getInstance();
    //         //     componentRef.instance.configModel = UploadDocExcelTablesConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_CV_TABLE89:
    //         //         componentFactory = this._componentFactoryResolver.resolveComponentFactory(CvTable8Table9Component);
    //         //         componentRef = viewContainerRef.createComponent(componentFactory);
    //         //         componentRef.instance.dataModel = CvTable8Table9DataModel.getInstance();
    //         //         componentRef.instance.configModel = CvTable8Table9ConfigModel.getInstance();
    //         //         isSuccess = true;
    //         //         break;

    //         // case WIDGET_LIBRARY.CONST_DOCUMENT_VERIFICATION:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(DocumentVerificationComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = DocumentVerificationModel.getInstance();
    //         //     componentRef.instance.configModel = DocumentVerificationConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_CONFIRMATION_TEXT:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ConfirmationTextComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ConfirmationTextModel.getInstance();
    //         //     componentRef.instance.configModel = ConfirmationTextConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_NEW_REGISTRATION_FORM2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(NewRegistrationForm2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = NewRegistrationForm2Model.getInstance();
    //         //     componentRef.instance.configModel = NewRegistrationForm2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_USER_ADD:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(UserAddComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AddUserDataModel.getInstance();
    //         //     componentRef.instance.configModel = AddUserConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_USER_FILTER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(UserFilterComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = UserFilterDataModel.getInstance();
    //         //     componentRef.instance.configModel = UserFilterConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_QUOTATION_SEARCH:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(QuotationSearchComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = QuotationSearchDataModel.getInstance();
    //         //     componentRef.instance.configModel = QuotationSearchConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_INVOICE_SEARCH:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(InvoiceSearchComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = InvoiceSearchDataModel.getInstance();
    //         //     componentRef.instance.configModel = InvoiceSearchConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_CASE_SEARCH:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseSearchComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseSearchDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseSearchConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_MY_CASE_FILTER:
    //         //         componentFactory = this._componentFactoryResolver.resolveComponentFactory(MyCaseTabFilterComponent);
    //         //         componentRef = viewContainerRef.createComponent(componentFactory);
    //         //         componentRef.instance.dataModel = MyCaseTabFilterDataModel.getInstance();
    //         //         componentRef.instance.configModel = MyCaseTabFilterConfigModel.getInstance();
    //         //         isSuccess = true;
    //         //         break;    
    //         // case WIDGET_LIBRARY.CONST_NEW_CASE_TAB_FILTER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(NewTabCaseFilterComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = NewCaseTabFilterDataModel.getInstance();
    //         //     componentRef.instance.configModel = NewCaseTabFilterConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_ADD_SHIPPING_SEARCH:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(AddShippingSearchComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AddShippingSearchDataModel.getInstance();
    //         //     componentRef.instance.configModel = AddShippingSearchConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_CHANGE_PASSWORD:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ChangePasswordComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ChangePasswordDataModel.getInstance();
    //         //     componentRef.instance.configModel = ChangePasswordConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_MAT_TAB:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(MatTabComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = MatTabModel.getInstance();
    //         //     componentRef.instance.configModel = MatTabConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_MAT_TAB_A1:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(MatTabA1Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = MatTabA1Model.getInstance();
    //         //     componentRef.instance.configModel = MatTabA1ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_MAT_TAB_A2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(MatTabA2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = MatTabA2Model.getInstance();
    //         //     componentRef.instance.configModel = MatTabA2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         case WIDGET_LIBRARY.CONST_CASE_CO_ORD_SEARCH:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrCaseCoOrdSearchComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = MatTabModel.getInstance();
    //             componentRef.instance.configModel = MatTabConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_COMPANY_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CompanyFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CompanyFilterDataModel.getInstance();
    //             componentRef.instance.configModel = CompanyFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_COMP_REG_CONFIRMATION:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CompRegConfirmationComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CompRegConfirmationDataModel.getInstance();
    //             componentRef.instance.configModel = CompRegConfirmationConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_COMPANY_APPROVE:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CompanyApproveComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CompanyApproveDataModel.getInstance();
    //             componentRef.instance.configModel = CompanyApproveConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_ALERTS_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(AlertsFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = AlertsFilterDataModel.getInstance();
    //             componentRef.instance.configModel = AlertsFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_QUERY_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(QueryFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = QueryFilterDataModel.getInstance();
    //             componentRef.instance.configModel = QueryFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_QUERY_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(QueryFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = QueryFormDataModel.getInstance();
    //             componentRef.instance.configModel = QueryFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_REMARK_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(RemarkFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = RemarkFilterDataModel.getInstance();
    //             componentRef.instance.configModel = RemarkFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CONST_CASE_VIEW_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseViewFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CaseViewFormDataModel.getInstance();
    //             componentRef.instance.configModel = CaseViewFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_DOCUMENTS_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DocumentsFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DocumentsFilterDataModel.getInstance();
    //             componentRef.instance.configModel = DocumentsFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_DOC_HISTORY_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DocHistoryFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DocHistoryFilterDataModel.getInstance();
    //             componentRef.instance.configModel = DocHistoryFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CASE_DOC_HISTORY_DETAILS:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DocHistoryDetailsComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DocHistoryDetailsDataModel.getInstance();
    //             componentRef.instance.configModel = DocHistoryDetailsConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CV_DEPT_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CvDeptFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DeptFilterDataModel.getInstance();
    //             componentRef.instance.configModel = DeptFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_DEPT_VIEW_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DeptViewFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DeptViewFormDataModel.getInstance();
    //             componentRef.instance.configModel = DeptViewFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_TINY_MCE_EDITOR:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(TinyMceEditorComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = TinyMceEditorDataModel.getInstance();
    //             componentRef.instance.configModel = TinyMceEditorConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_CK_EDITOR:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CkEditorComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = TinyMceEditorDataModel.getInstance();
    //             componentRef.instance.configModel = TinyMceEditorConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CONST_DYANAMIC_TEXT:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrDyanamicTextComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CrDyanamicTextDataModel.getInstance();
    //             componentRef.instance.configModel = CrDyanamicTextConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CR_ADD_NEW_ADDRESS:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddNewAddressComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CrAddNewAddressDataModel.getInstance();
    //             componentRef.instance.configModel = CrAddNewAddressConfigModel.getInstance();
    //             isSuccess = true;
    //             break;
    //         case WIDGET_LIBRARY.CR_ADD_NEW_CO_ORDINATOR:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrAddNewCoOrdinatorComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CrAddNewCoOrdinatorDataModel.getInstance();
    //             componentRef.instance.configModel = CrAddNewCoOrdinatorConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.STORAGE_REPO_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(StorageRepoFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = StorageRepoFilterDataModel.getInstance();
    //             componentRef.instance.configModel = StorageRepoFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.RESET_USER_PASSWORD:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(ResetPassFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = ResetPasswordFormDataModel.getInstance();
    //             componentRef.instance.configModel = ResetPasswordFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.CASE_VIEW_INFO:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseViewInfoComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = CaseViewInfoDataModel.getInstance();
    //             componentRef.instance.configModel = CaseViewInfoConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.DATA_TEMPLATES_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DataTemplatesFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = DataTemplatesFilterDataModel.getInstance();
    //             componentRef.instance.configModel = DataTemplatesFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.ALERTS_VIEW_FORM:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(AlertViewFormComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = AlertViewFormDataModel.getInstance();
    //             componentRef.instance.configModel = AlertViewFormConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         case WIDGET_LIBRARY.ALL_CASES_ALERTS_FILTER:
    //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(AllCasesAlertsFilterComponent);
    //             componentRef = viewContainerRef.createComponent(componentFactory);
    //             componentRef.instance.dataModel = AllCasesAlertsFilterDataModel.getInstance();
    //             componentRef.instance.configModel = AllCasesAlertsFilterConfigModel.getInstance();
    //             isSuccess = true;
    //             break;

    //         // case WIDGET_LIBRARY.CONST_SELECT_COMPANY:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CrSelectCompanyComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = SelectCompanyDataModel.getInstance();
    //         //     componentRef.instance.configModel = SelectCompanyConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_COMPANY_REJECT:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CompanyRejectComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CompanyRejectDataModel.getInstance();
    //         //     componentRef.instance.configModel = CompanyRejectConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_ASSIGN_FC_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseAssignFcFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseAssignFCDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseAssignFCConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_CASE_APPROVE_BASIC_INFO:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseApproveBasicInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseApproveBasicInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseViewFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_CASE_APPROVE_EDIT_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseApproveEditCaseComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseApproveEditCaseDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseApproveEditCaseConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_CASE_ADD_REMARK_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(AddCaseRemarkFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AddCaseRemarkDataModel.getInstance();
    //         //     componentRef.instance.configModel = AddCaseRemarkConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_DEPT_ALLOCATE:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CvAllocateDeptComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AllocateDeptDataModel.getInstance();
    //         //     componentRef.instance.configModel = AllocateDeptConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.CONST_REQUEST_NOTES_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(RequestNotesFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = RequestNotesFormDataModel.getInstance();
    //         //     componentRef.instance.configModel = RequestNotesFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_REQUEST_NOTES_FORM2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(RequestNotesForm2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = RequestNotesForm2DataModel.getInstance();
    //         //     componentRef.instance.configModel = RequestNotesForm2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.QUOTATION_INVOICE_UPLOAD_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(QuotationInvoiceUploadComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = QuotationInvoiceUploadDataModel.getInstance();
    //         //     componentRef.instance.configModel = QuotationInvoiceUploadConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.CLEARANCE_NOTE_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ClearanceNoteFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ClearanceNoteFormDataModel.getInstance();
    //         //     componentRef.instance.configModel = ClearanceNoteFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_REPORTS_FILTER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ReportsFilterComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ReportsFilterDataModel.getInstance();
    //         //     componentRef.instance.configModel = ReportsFilterConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_REPORTS_UPLOAD:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ReportsUploadComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ReportsUploadDataModel.getInstance();
    //         //     componentRef.instance.configModel = ReportsUploadConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CLEARANCE_NOTE_TABLE:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ClearanceNoteTableComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ClearanceNoteTableDataModel.getInstance();
    //         //     componentRef.instance.configModel = ClearanceNoteTableConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CLEARANCE_NOTE_DROPDOWN:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ClearanceNoteDropdownComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ClearanceNoteDropdownDataModel.getInstance();
    //         //     componentRef.instance.configModel = ClearanceNoteDropdownConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_REG_BTN:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseRegBtnComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseRegBtnDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseRegBtnConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_ENGINEERS_FILTER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(EngineersFilterComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = EngineersFilterDataModel.getInstance();
    //         //     componentRef.instance.configModel = EngineersFilterConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_CASE_ACTION_BTN:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseActionButtonsComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseActionButtonsModel.getInstance();
    //         //     componentRef.instance.configModel = CaseActionButtonsConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.SELECT_TAGGING:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(SelectTaggingComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = SelectTaggingDataModel.getInstance();
    //         //     componentRef.instance.configModel = SelectTaggingConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.TAGGING_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(TaggingFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = TaggingFormDataModel.getInstance();
    //         //     componentRef.instance.configModel = TaggingFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CONST_DEPT_SCHEDULE:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CvDeptScheduleComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CvDeptScheduleDataModel.getInstance();
    //         //     componentRef.instance.configModel = CvDeptScheduleConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_DEPT_SCHEDULE:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CvDeptScheduleComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CvDeptScheduleDataModel.getInstance();
    //         //     componentRef.instance.configModel = CvDeptScheduleConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_CLARANCE_FILTER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ClearanceFilterComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ClearanceFilterDataModel.getInstance();
    //         //     componentRef.instance.configModel = ClearanceFilterConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_CERTIFIACTE_HANDLER_FILTER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CertificateHandlerFilterComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CertificateHandlerFilterDataModel.getInstance();
    //         //     componentRef.instance.configModel = CertificateHandlerFilterConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.FORGOT_PASS_USR_NAME_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ForgotPassUsernameFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ForgotPassUsernameFormDataModel.getInstance();
    //         //     componentRef.instance.configModel = ForgotPassUsernameFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.MORE_INFO_LINK_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(MoreInfoLinkDataComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = MoreInfoFormDataModel.getInstance();
    //         //     componentRef.instance.configModel = MoreInfoFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.SYNC_INFO_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(SyncInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = SyncInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = SyncInfoConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.CASE_DOC_TABLE_A2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(DocumentTableA2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = DocumentTableA2DataModel.getInstance();
    //         //     componentRef.instance.configModel = DocumentTableA2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.ADD_BTN_COMP_REG_DOC_UPLOAD:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(AddBtnCompRegDocUploadComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AddBtnCompRegDocUploadDataModel.getInstance();
    //         //     componentRef.instance.configModel = AddBtnCompRegDocUploadConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CSP_SEARCH:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CspSearchComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CSPSearchDataModel.getInstance();
    //         //     componentRef.instance.configModel = CSPSearchConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CSP_INFO:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CspInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CSPInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = CSPInfoConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.ADD_BTN_ADD_ENGINEER:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(AddBtnAddEngineerComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AddBtnAddEngineerDataModel.getInstance();
    //         //     componentRef.instance.configModel = AddBtnAddEngineerConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.SHORT_CLOSE_REMARK:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(ShortCloseRemarkComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = ShortCloseRemarkDataModel.getInstance();
    //         //     componentRef.instance.configModel = ShortCloseRemarkConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.SHORT_CLOSE_VIEW_INFO:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseShortCloseViewInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseShortCloseViewInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseShortCloseViewInfoConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_STATUS_CARD_GROUP:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseStatusCardGroupComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseStatusCardGroupDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseStatusCardGroupConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.DEPT_CASE_CARD_GROUP:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(DeptCaseCardGroupComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = DeptCaseCardGroupDataModel.getInstance();
    //         //     componentRef.instance.configModel = DeptCaseCardGroupConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CASE_TYPE_CARD_GROUP:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseTypeCardGroupComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseTypeCardGroupDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseTypeCardGroupConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_BAR_CHART_A5_NAME:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(BarChartA5Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = BarChartA5Model.getInstance();
    //         //     componentRef.instance.configModel = BarChartA5ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.FINANCE_CARD:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(FinanceCardComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = FinanceCardDataModel.getInstance();
    //         //     componentRef.instance.configModel = FinanceCardConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.DASH_CHART_FILTER_A1:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(DashChartFilterA1Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = DashChartFilterA1DataModel.getInstance();
    //         //     componentRef.instance.configModel = DashChartFilterA1ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.TABLE_ACTION_BTN:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(TableActionBtnComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = TableActionBtnDataModel.getInstance();
    //         //     componentRef.instance.configModel = TableActionBtnConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_STATUS_CARD_GROUP_A2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseStatusCardGroupA2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseStatusCardGroupA2DataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseStatusCardGroupA2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_ACCORDION_A1:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(AccordionA1Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AccordionA1Model.getInstance();
    //         //     componentRef.instance.configModel = AccordionA1ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_STATUS_CARD_GROUP_A3:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseStatusCardGroupA3Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseStatusCardGroupA3DataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseStatusCardGroupA3ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.DISPATCH_SEARCH:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(DispatchSearchComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = DispatchSearchDataModel.getInstance();
    //         //     componentRef.instance.configModel = DispatchSearchConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.CASE_TEST_STOP_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(CaseTestStopFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = CaseTestStopDataModel.getInstance();
    //         //     componentRef.instance.configModel = CaseTestStopConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.DISPATCH_INFO:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(DispatchInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = DispatchInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = DispatchInfoConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.LINE_CHART_DROPDOWN_A1:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(LineChartDropdownA1Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = LineChartDropdownA1DataModel.getInstance();
    //         //     componentRef.instance.configModel = LineChartDropdownA1ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.LINE_CHART_DROPDOWN_A2:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(LineChartDropdownA2Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = LineChartDropdownA2DataModel.getInstance();
    //         //     componentRef.instance.configModel = LineChartDropdownA2ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.BAR_CHART_DROPDOWN_A1:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(BarChartDropdownA1Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = BarChartDropdownA1DataModel.getInstance();
    //         //     componentRef.instance.configModel = BarChartDropdownA1ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.STACKED_BAR_CHART_A1:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(StackedBarChartA1Component);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = StackedBarChartA1Model.getInstance();
    //         //     componentRef.instance.configModel = StackedBarChartA1ConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;


    //         // case WIDGET_LIBRARY.ADD_DISPATCH_FORM:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(AddDispatchFormComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = AddDespFormDataModel.getInstance();
    //         //     componentRef.instance.configModel = AddDespFormConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;

    //         // case WIDGET_LIBRARY.QUERY_VIEW_INFO:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(QueryViewInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = QueryViewInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = QueryViewInfoConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.CONST_CASE_QUERY_REPLY:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(QueryReplyComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = QueryReplyDataModel.getInstance();
    //         //     componentRef.instance.configModel = QueryReplyConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
    //         // case WIDGET_LIBRARY.QUERY_RESPONSE_INFO:
    //         //     componentFactory = this._componentFactoryResolver.resolveComponentFactory(QueryResponseInfoComponent);
    //         //     componentRef = viewContainerRef.createComponent(componentFactory);
    //         //     componentRef.instance.dataModel = QueryResponseInfoDataModel.getInstance();
    //         //     componentRef.instance.configModel = QueryResponseInfoConfigModel.getInstance();
    //         //     isSuccess = true;
    //         //     break;
            
    //         //     case WIDGET_LIBRARY.CONST_REQUEST_NOTE_ACTION_BTN:
    //         //         componentFactory = this._componentFactoryResolver.resolveComponentFactory(RequestNoteActionBtnsComponent);
    //         //         componentRef = viewContainerRef.createComponent(componentFactory);
    //         //         componentRef.instance.dataModel = RequestNoteActionBtnsModel.getInstance();
    //         //         componentRef.instance.configModel = RequestNoteActionBtnsConfigModel.getInstance();
    //         //         isSuccess = true;
    //         //         break;

    //         //         case WIDGET_LIBRARY.TAG_FILTER:
    //         //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(TagFilterComponent);
    //         //             componentRef = viewContainerRef.createComponent(componentFactory);
    //         //             componentRef.instance.dataModel = TagFilterDataModel.getInstance();
    //         //             componentRef.instance.configModel = TagFilterConfigModel.getInstance();
    //         //             isSuccess = true;
    //         //             break;
    //         //             case WIDGET_LIBRARY.MIS_REPORT_FILTER:
    //         //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(MisReportFilterComponent);
    //         //             componentRef = viewContainerRef.createComponent(componentFactory);
    //         //             componentRef.instance.dataModel = MISReportsFilterDataModel.getInstance();
    //         //             componentRef.instance.configModel = MISReportsFilterConfigModel.getInstance();
    //         //             isSuccess = true;
    //         //             break;
    //         //             case WIDGET_LIBRARY.DYNAMIC_TABLE:
    //         //             componentFactory = this._componentFactoryResolver.resolveComponentFactory(DynamicTableComponent);
    //         //             componentRef = viewContainerRef.createComponent(componentFactory);
    //         //             componentRef.instance.dataModel = DynamicTableDataModel.getInstance();
    //         //             componentRef.instance.configModel = DynamicTableDataConfigModel.getInstance();
    //         //             isSuccess = true;
    //         //             break;
    //         //             case WIDGET_LIBRARY.MIS_REPORTS_DETAILS:
    //         //                 componentFactory = this._componentFactoryResolver.resolveComponentFactory(MisReportDetailsComponent);
    //         //                 componentRef = viewContainerRef.createComponent(componentFactory);
    //         //                 componentRef.instance.dataModel = MISReportsDetailsDataModel.getInstance();
    //         //                 componentRef.instance.configModel = MISReportsDetailsConfigModel.getInstance();
    //         //                 isSuccess = true;
    //         //                 break;
    //         //             case WIDGET_LIBRARY.MIS_REPORT_ACTION_BUTTON:
    //         //                 componentFactory = this._componentFactoryResolver.resolveComponentFactory(MisReportActionButtonComponent);
    //         //                 componentRef = viewContainerRef.createComponent(componentFactory);
    //         //                 componentRef.instance.dataModel = MISReportsActionButtonModel.getInstance();
    //         //                 componentRef.instance.configModel = MISReportsActionButtonConfigModel.getInstance();
    //         //                 isSuccess = true;
    //         //                 break;

    //         //             case WIDGET_LIBRARY.DYNAMIC_FILTER:
    //         //                 componentFactory = this._componentFactoryResolver.resolveComponentFactory(DynamicFilterComponent);
    //         //                 componentRef = viewContainerRef.createComponent(componentFactory);
    //         //                 componentRef.instance.dataModel = DynamicFilterDataModel.getInstance();
    //         //                 componentRef.instance.configModel = DynamicFilterConfigModel.getInstance();
    //         //                 isSuccess = true;
    //         //                 break;
    //         //             case WIDGET_LIBRARY.CONST_CV_CASE_CHECK:
    //         //                 componentFactory = this._componentFactoryResolver.resolveComponentFactory(CvCaseChecklistComponent);
    //         //                 componentRef = viewContainerRef.createComponent(componentFactory);
    //         //                 componentRef.instance.dataModel = CvChechklistDataModel.getInstance();
    //         //                 componentRef.instance.configModel = CvChecklistConfigModel.getInstance();
    //         //                 isSuccess = true;
    //         //                 break;
    //         //             case WIDGET_LIBRARY.DOCUMENT_VIEWER:
    //         //                 componentFactory = this._componentFactoryResolver.resolveComponentFactory(DocumentViewerComponent);
    //         //                 componentRef = viewContainerRef.createComponent(componentFactory);
    //         //                 componentRef.instance.dataModel = DocumentViewerDataModel.getInstance();
    //         //                 componentRef.instance.configModel = DocumentViewerConfigModel.getInstance();
    //         //                 isSuccess = true;
    //         //                 break;
    //     }


    //     return { isSuccess, componentRef };
    // }




}
