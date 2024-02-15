import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: CoreOverviewComponent;
  let fixture: ComponentFixture<CoreOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreOverviewComponent]
    });
    fixture = TestBed.createComponent(CoreOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
