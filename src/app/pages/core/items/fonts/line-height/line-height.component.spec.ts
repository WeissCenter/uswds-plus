import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineHeightComponent } from './line-height.component';

describe('LineHeightComponent', () => {
  let component: LineHeightComponent;
  let fixture: ComponentFixture<LineHeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineHeightComponent]
    });
    fixture = TestBed.createComponent(LineHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
