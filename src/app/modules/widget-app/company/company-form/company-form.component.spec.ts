import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { NotificationService } from 'src/app/services/common/notification.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { CompanyFormComponent } from './company-form.component';
import { CompanyFormConfigModel, CompanyFormDataModel } from './company-form.model';

describe('CompanyFormComponent', () => {
  let component: CompanyFormComponent;
  let fixture: ComponentFixture<CompanyFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CompanyFormComponent],
        providers: [
          FormBuilder,
          ServerApiInterfaceServiceService,
          DatePipe,
          SessionStorageService,
          ValidationService,
          AppRepoHelperService,
          NotificationService
        ],
        imports:[HttpClientModule,FormsModule, ReactiveFormsModule,
          RouterModule,
          ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
          })]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFormComponent);
    component = fixture.componentInstance;
    component.dataModel = CompanyFormDataModel.getInstance();
    component.configModel = CompanyFormConfigModel.getInstance();
    fixture.detectChanges();
  });

  it('should create', () => {   
    expect(component).toBeTruthy();
  });
});
