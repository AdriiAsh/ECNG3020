import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEventComponent } from './task-event.component';

describe('TaskEventComponent', () => {
  let component: TaskEventComponent;
  let fixture: ComponentFixture<TaskEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
