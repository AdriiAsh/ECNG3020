import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeventdialogComponent } from './deleteeventdialog.component';

describe('DeleteeventdialogComponent', () => {
  let component: DeleteeventdialogComponent;
  let fixture: ComponentFixture<DeleteeventdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteeventdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteeventdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
