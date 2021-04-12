import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinedApplicationComponent } from './declined-application.component';

describe('DeclinedApplicationComponent', () => {
  let component: DeclinedApplicationComponent;
  let fixture: ComponentFixture<DeclinedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclinedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
