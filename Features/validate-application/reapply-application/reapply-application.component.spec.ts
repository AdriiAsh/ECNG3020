import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReapplyApplicationComponent } from './reapply-application.component';

describe('ReapplyApplicationComponent', () => {
  let component: ReapplyApplicationComponent;
  let fixture: ComponentFixture<ReapplyApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReapplyApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReapplyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
