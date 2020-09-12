import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferContentHeaderComponent } from './transfer-content-header.component';

describe('TransferContentHeaderComponent', () => {
  let component: TransferContentHeaderComponent;
  let fixture: ComponentFixture<TransferContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
