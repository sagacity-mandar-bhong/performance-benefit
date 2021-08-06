import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformaceCard1Component } from './performace-card1.component';

describe('PerformaceCard1Component', () => {
  let component: PerformaceCard1Component;
  let fixture: ComponentFixture<PerformaceCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformaceCard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformaceCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
