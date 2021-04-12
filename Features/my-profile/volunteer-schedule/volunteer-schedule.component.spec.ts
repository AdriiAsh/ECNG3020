import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerScheduleComponent } from './volunteer-schedule.component';

describe('VolunteerScheduleComponent', () => {
  let component: VolunteerScheduleComponent;
  let fixture: ComponentFixture<VolunteerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
