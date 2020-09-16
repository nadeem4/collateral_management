import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeTimeFilterComponent } from './range-time-filter.component';

describe('RangeTimeFilterComponent', () => {
  let component: RangeTimeFilterComponent;
  let fixture: ComponentFixture<RangeTimeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeTimeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeTimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
