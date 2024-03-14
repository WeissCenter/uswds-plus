import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontBodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: FontBodyComponent;
  let fixture: ComponentFixture<FontBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontBodyComponent]
    });
    fixture = TestBed.createComponent(FontBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
