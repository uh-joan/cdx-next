import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAvatar } from './ai-avatar';

describe('AiAvatar', () => {
  let component: AiAvatar;
  let fixture: ComponentFixture<AiAvatar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AiAvatar],
    });
    fixture = TestBed.createComponent(AiAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
