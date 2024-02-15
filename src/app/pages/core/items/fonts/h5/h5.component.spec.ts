import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontH5Component } from './h5.component';

describe('h2Component', () => {
  let component: FontH5Component;
  let fixture: ComponentFixture<FontH5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontH5Component]
    });
    fixture = TestBed.createComponent(FontH5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
