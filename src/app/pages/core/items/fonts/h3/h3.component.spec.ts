import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontH3Component } from './h3.component';

describe('h3Component', () => {
  let component: FontH3Component;
  let fixture: ComponentFixture<FontH3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontH3Component]
    });
    fixture = TestBed.createComponent(FontH3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
