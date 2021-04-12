import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreatedDialogComponent } from './account-created-dialog.component';

describe('AccountCreatedDialogComponent', () => {
  let component: AccountCreatedDialogComponent;
  let fixture: ComponentFixture<AccountCreatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
