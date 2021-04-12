import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewValidateApplicationComponent } from './view-validate-application.component';

describe('ViewValidateApplicationComponent', () => {
  let component: ViewValidateApplicationComponent;
  let fixture: ComponentFixture<ViewValidateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewValidateApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewValidateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
