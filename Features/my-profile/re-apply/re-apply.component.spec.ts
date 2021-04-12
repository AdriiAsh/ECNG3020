import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReApplyComponent } from './re-apply.component';

describe('ReApplyComponent', () => {
  let component: ReApplyComponent;
  let fixture: ComponentFixture<ReApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
