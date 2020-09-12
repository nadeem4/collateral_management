import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDataCardComponent } from './request-data-card.component';

describe('RequestDataCardComponent', () => {
  let component: RequestDataCardComponent;
  let fixture: ComponentFixture<RequestDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDataCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
