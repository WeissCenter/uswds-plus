import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentWarmComponent } from './accent-warm.component';

describe('AccentWarmComponent', () => {
  let component: AccentWarmComponent;
  let fixture: ComponentFixture<AccentWarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccentWarmComponent]
    });
    fixture = TestBed.createComponent(AccentWarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
