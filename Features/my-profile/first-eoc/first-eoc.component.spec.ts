import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEOCComponent } from './first-eoc.component';

describe('FirstEOCComponent', () => {
  let component: FirstEOCComponent;
  let fixture: ComponentFixture<FirstEOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstEOCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
