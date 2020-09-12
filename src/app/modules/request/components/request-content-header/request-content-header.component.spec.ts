import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestContentHeaderComponent } from './request-content-header.component';

describe('RequestContentHeaderComponent', () => {
  let component: RequestContentHeaderComponent;
  let fixture: ComponentFixture<RequestContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
