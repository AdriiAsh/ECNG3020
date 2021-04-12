import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEOCComponent } from './edit-eoc.component';

describe('EditEOCComponent', () => {
  let component: EditEOCComponent;
  let fixture: ComponentFixture<EditEOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEOCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
