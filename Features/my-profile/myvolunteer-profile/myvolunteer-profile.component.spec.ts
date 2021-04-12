import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvolunteerProfileComponent } from './myvolunteer-profile.component';

describe('MyvolunteerProfileComponent', () => {
  let component: MyvolunteerProfileComponent;
  let fixture: ComponentFixture<MyvolunteerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyvolunteerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvolunteerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
