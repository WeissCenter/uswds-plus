import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSpacingComponent } from './letter-spacing.component';

describe('LetterSpacingComponent', () => {
  let component: LetterSpacingComponent;
  let fixture: ComponentFixture<LetterSpacingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterSpacingComponent]
    });
    fixture = TestBed.createComponent(LetterSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
