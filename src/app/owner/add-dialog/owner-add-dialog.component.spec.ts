import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddDialogComponent } from './owner-add-dialog.component.ts';

describe('AddDialogComponent', () => {
  let component: OwnerAddDialogComponent;
  let fixture: ComponentFixture<OwnerAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
