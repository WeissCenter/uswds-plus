import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenFormComponent } from './token-form.component';

describe('TokenFormComponent', () => {
  let component: TokenFormComponent;
  let fixture: ComponentFixture<TokenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenFormComponent]
    });
    fixture = TestBed.createComponent(TokenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
