import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { NotificationService } from 'src/app/services/common/notification.service';
import { SaveFileService } from 'src/app/services/common/save-file.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { MatBA1Component } from './mat-b-a1.component';

describe('MatBA1Component', () => {
  let component: MatBA1Component;
  let fixture: ComponentFixture<MatBA1Component>;
  const fakeActivatedRoute = ({
    data: of({ label: 'hello' }),
  } as any) as ActivatedRoute;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MatBA1Component],
        providers: [
          ServerApiInterfaceServiceService,
          Router,
          {provide: ActivatedRoute, useValue: fakeActivatedRoute} ,
          NotificationService,
          SaveFileService,
          DatePipe,
          FormBuilder,
          ValidationService,
          AppRepoHelperService,
        ],
        imports: [HttpClientModule, FormsModule, RouterTestingModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
