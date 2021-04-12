import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTaskDialogComponent } from './event-task-dialog.component';

describe('EventTaskDialogComponent', () => {
  let component: EventTaskDialogComponent;
  let fixture: ComponentFixture<EventTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTaskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
