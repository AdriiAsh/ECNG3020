import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationdialogComponent } from './applicationdialog.component';

describe('ApplicationdialogComponent', () => {
  let component: ApplicationdialogComponent;
  let fixture: ComponentFixture<ApplicationdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
