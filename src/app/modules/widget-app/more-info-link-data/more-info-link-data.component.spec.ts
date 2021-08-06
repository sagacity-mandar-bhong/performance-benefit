import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { NotificationService } from 'src/app/services/common/notification.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { MaterialModule } from '../../material/material.module';
import { MoreInfoFormConfigModel, MoreInfoFormDataModel } from './more-info-link-data-model';

import { MoreInfoLinkDataComponent } from './more-info-link-data.component';

describe('MoreInfoLinkDataComponent', () => {
  let component: MoreInfoLinkDataComponent;
  let fixture: ComponentFixture<MoreInfoLinkDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInfoLinkDataComponent ],
      providers: [
        FormBuilder,
        ServerApiInterfaceServiceService,
        DatePipe,
        SessionStorageService,
        ValidationService,
        AppRepoHelperService,
        NotificationService
      ],
      imports:[
        MaterialModule,
        HttpClientModule,FormsModule, ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoLinkDataComponent);
    component = fixture.componentInstance;
    component.dataModel = MoreInfoFormDataModel.getInstance();
    component.configModel = MoreInfoFormConfigModel.getInstance();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
