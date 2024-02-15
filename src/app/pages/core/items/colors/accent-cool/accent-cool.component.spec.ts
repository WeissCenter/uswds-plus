import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentCoolComponent } from './accent-cool.component';

describe('AccentCoolComponent', () => {
  let component: AccentCoolComponent;
  let fixture: ComponentFixture<AccentCoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccentCoolComponent]
    });
    fixture = TestBed.createComponent(AccentCoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
