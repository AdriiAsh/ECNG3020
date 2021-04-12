import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedDialogComponent } from './accepted-dialog.component';

describe('AcceptedDialogComponent', () => {
  let component: AcceptedDialogComponent;
  let fixture: ComponentFixture<AcceptedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
