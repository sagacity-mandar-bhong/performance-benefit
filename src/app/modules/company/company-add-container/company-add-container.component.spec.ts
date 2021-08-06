import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { NotificationService } from 'src/app/services/common/notification.service';
// import { SaveFileService } from 'src/app/services/common/save-file.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { CompanyAddContainerComponent } from './company-add-container.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompanyAddContainerComponent', () => {
  let component: CompanyAddContainerComponent;
  let fixture: ComponentFixture<CompanyAddContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CompanyAddContainerComponent],
        providers: [
          ServerApiInterfaceServiceService,
          SessionStorageService,
          EventActionService,
          Router,
          ActivatedRoute,
          NgxSpinnerService,
          // SaveFileService,
          NotificationService,
          AppRepoHelperService,
        ],
        imports:[RouterTestingModule ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
