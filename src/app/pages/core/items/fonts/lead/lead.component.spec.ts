import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontLeadComponent } from './lead.component';

describe('BodyComponent', () => {
  let component: FontLeadComponent;
  let fixture: ComponentFixture<FontLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontLeadComponent]
    });
    fixture = TestBed.createComponent(FontLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
