import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontH2Component } from './h2.component';

describe('h2Component', () => {
  let component: FontH2Component;
  let fixture: ComponentFixture<FontH2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontH2Component]
    });
    fixture = TestBed.createComponent(FontH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
