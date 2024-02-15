import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontH4Component } from './h4.component';

describe('h2Component', () => {
  let component: FontH4Component;
  let fixture: ComponentFixture<FontH4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontH4Component]
    });
    fixture = TestBed.createComponent(FontH4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
