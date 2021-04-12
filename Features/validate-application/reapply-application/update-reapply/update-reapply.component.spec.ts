import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReapplyComponent } from './update-reapply.component';

describe('UpdateReapplyComponent', () => {
  let component: UpdateReapplyComponent;
  let fixture: ComponentFixture<UpdateReapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
