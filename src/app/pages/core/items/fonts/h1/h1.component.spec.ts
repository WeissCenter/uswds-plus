import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontH1Component } from './h1.component';

describe('h1Component', () => {
  let component: FontH1Component;
  let fixture: ComponentFixture<FontH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontH1Component]
    });
    fixture = TestBed.createComponent(FontH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
