import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotvalidTimeComponent } from './notvalid-time.component';

describe('NotvalidTimeComponent', () => {
  let component: NotvalidTimeComponent;
  let fixture: ComponentFixture<NotvalidTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotvalidTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotvalidTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
