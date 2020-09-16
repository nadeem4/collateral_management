import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeDateFilterComponent } from './range-date-filter.component';

describe('RangeDateFilterComponent', () => {
  let component: RangeDateFilterComponent;
  let fixture: ComponentFixture<RangeDateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeDateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
