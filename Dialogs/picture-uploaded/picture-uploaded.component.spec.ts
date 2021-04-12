import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUploadedComponent } from './picture-uploaded.component';

describe('PictureUploadedComponent', () => {
  let component: PictureUploadedComponent;
  let fixture: ComponentFixture<PictureUploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureUploadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
