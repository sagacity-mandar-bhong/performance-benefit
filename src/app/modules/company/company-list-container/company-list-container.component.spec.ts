import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';

import { CompanyListContainerComponent } from './company-list-container.component';

describe('CompanyListContainerComponent', () => {
  let component: CompanyListContainerComponent;
  let fixture: ComponentFixture<CompanyListContainerComponent>;
 
  const fakeActivatedRoute =({ data: of({ label: 'hello' }) } as any) as ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyListContainerComponent],
      imports:[FormsModule, HttpClientModule,
        RouterTestingModule],
      providers:[
         ServerApiInterfaceServiceService,
         SessionStorageService,
         EventActionService,
         Router,
         {provide: ActivatedRoute, useValue: fakeActivatedRoute},
         NgxSpinnerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListContainerComponent,);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
