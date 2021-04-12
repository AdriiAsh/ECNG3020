import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateApplicationComponent } from './validate-application.component';

describe('ValidateApplicationComponent', () => {
  let component: ValidateApplicationComponent;
  let fixture: ComponentFixture<ValidateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
