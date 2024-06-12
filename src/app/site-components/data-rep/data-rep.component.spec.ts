import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataRepComponent } from './data-rep.component';

describe('DataRepComponent', () => {
  let component: DataRepComponent;
  let fixture: ComponentFixture<DataRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataRepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
