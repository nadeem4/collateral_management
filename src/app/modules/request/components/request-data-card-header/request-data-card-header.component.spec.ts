import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDataCardHeaderComponent } from './request-data-card-header.component';

describe('RequestDataCardHeaderComponent', () => {
  let component: RequestDataCardHeaderComponent;
  let fixture: ComponentFixture<RequestDataCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDataCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDataCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
