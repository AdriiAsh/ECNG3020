import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDatabaseComponent } from './volunteer-database.component';

describe('VolunteerDatabaseComponent', () => {
  let component: VolunteerDatabaseComponent;
  let fixture: ComponentFixture<VolunteerDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
