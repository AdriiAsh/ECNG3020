import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerUpdateDialogComponent } from './volunteer-update-dialog.component';

describe('VolunteerUpdateDialogComponent', () => {
  let component: VolunteerUpdateDialogComponent;
  let fixture: ComponentFixture<VolunteerUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
