import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateVolunteerComponent } from './view-create-volunteer.component';

describe('ViewCreateVolunteerComponent', () => {
  let component: ViewCreateVolunteerComponent;
  let fixture: ComponentFixture<ViewCreateVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreateVolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreateVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
