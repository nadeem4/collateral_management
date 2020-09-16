import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLayoutHeaderComponent } from './change-layout-header.component';

describe('ChangeLayoutHeaderComponent', () => {
  let component: ChangeLayoutHeaderComponent;
  let fixture: ComponentFixture<ChangeLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
