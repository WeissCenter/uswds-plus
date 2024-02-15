import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontH6Component } from './h6.component';

describe('h2Component', () => {
  let component: FontH6Component;
  let fixture: ComponentFixture<FontH6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontH6Component]
    });
    fixture = TestBed.createComponent(FontH6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
