import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyColorComponent } from './body.component';

describe('PrimaryComponent', () => {
  let component: BodyColorComponent;
  let fixture: ComponentFixture<BodyColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyColorComponent]
    });
    fixture = TestBed.createComponent(BodyColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
