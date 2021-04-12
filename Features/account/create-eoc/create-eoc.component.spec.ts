import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEOCComponent } from './create-eoc.component';

describe('CreateEOCComponent', () => {
  let component: CreateEOCComponent;
  let fixture: ComponentFixture<CreateEOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEOCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
