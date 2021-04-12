import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReapplyingApplicationComponent } from './view-reapplying-application.component';

describe('ViewReapplyingApplicationComponent', () => {
  let component: ViewReapplyingApplicationComponent;
  let fixture: ComponentFixture<ViewReapplyingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReapplyingApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReapplyingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
