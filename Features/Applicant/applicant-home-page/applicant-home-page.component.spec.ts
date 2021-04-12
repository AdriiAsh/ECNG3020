import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantHomePageComponent } from './applicant-home-page.component';

describe('ApplicantHomePageComponent', () => {
  let component: ApplicantHomePageComponent;
  let fixture: ComponentFixture<ApplicantHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
