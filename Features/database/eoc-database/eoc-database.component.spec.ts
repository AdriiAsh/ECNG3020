import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EocDatabaseComponent } from './eoc-database.component';

describe('EocDatabaseComponent', () => {
  let component: EocDatabaseComponent;
  let fixture: ComponentFixture<EocDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EocDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EocDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
