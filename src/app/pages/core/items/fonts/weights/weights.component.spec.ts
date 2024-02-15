import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightsComponent } from './weights.component';

describe('WeightsComponent', () => {
  let component: WeightsComponent;
  let fixture: ComponentFixture<WeightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightsComponent]
    });
    fixture = TestBed.createComponent(WeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
