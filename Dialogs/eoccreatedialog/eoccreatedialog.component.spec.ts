import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOCCreatedialogComponent } from './eoccreatedialog.component';

describe('EOCCreatedialogComponent', () => {
  let component: EOCCreatedialogComponent;
  let fixture: ComponentFixture<EOCCreatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EOCCreatedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EOCCreatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
