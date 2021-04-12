import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOCFirstDialog2Component } from './eocfirst-dialog2.component';

describe('EOCFirstDialog2Component', () => {
  let component: EOCFirstDialog2Component;
  let fixture: ComponentFixture<EOCFirstDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOCFirstDialog2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EOCFirstDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
