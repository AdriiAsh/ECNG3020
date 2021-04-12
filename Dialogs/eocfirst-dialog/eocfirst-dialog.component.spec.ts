import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOCFirstDialogComponent } from './eocfirst-dialog.component';

describe('EOCFirstDialogComponent', () => {
  let component: EOCFirstDialogComponent;
  let fixture: ComponentFixture<EOCFirstDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOCFirstDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EOCFirstDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
