import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLayoutComponent } from './change-layout.component';

describe('ChangeLayoutComponent', () => {
  let component: ChangeLayoutComponent;
  let fixture: ComponentFixture<ChangeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
