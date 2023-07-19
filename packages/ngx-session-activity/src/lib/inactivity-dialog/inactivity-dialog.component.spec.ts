import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Idle, IdleExpiry } from '@ng-idle/core';
import { TranslateModule } from '@ngx-translate/core';

import { InactivityDialogComponent } from './inactivity-dialog.component';

export class MockExpiry extends IdleExpiry {
  public lastDate = new Date();
  public mockNow = new Date();

  last(value?: Date): Date {
    if (value !== void 0) {
      this.lastDate = value;
    }

    return this.lastDate;
  }

  override now(): Date {
    return this.mockNow || new Date();
  }
}

describe('InactivityDialogComponent', () => {
  let component: InactivityDialogComponent;
  let fixture: ComponentFixture<InactivityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InactivityDialogComponent],
      imports: [MatDialogModule, TranslateModule.forRoot()],
      providers: [
        Idle,
        { provide: IdleExpiry, useClass: MockExpiry },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
