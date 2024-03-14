import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: ComponentOverviewComponent;
  let fixture: ComponentFixture<ComponentOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentOverviewComponent]
    });
    fixture = TestBed.createComponent(ComponentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
