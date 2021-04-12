import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUserpasswordComponent } from './reset-userpassword.component';

describe('ResetUserpasswordComponent', () => {
  let component: ResetUserpasswordComponent;
  let fixture: ComponentFixture<ResetUserpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetUserpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetUserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
