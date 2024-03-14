import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenTableComponent } from './token-table.component';

describe('TokenTableComponent', () => {
  let component: TokenTableComponent;
  let fixture: ComponentFixture<TokenTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenTableComponent]
    });
    fixture = TestBed.createComponent(TokenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
