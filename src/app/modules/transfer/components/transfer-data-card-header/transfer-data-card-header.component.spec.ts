import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDataCardHeaderComponent } from './transfer-data-card-header.component';

describe('TransferDataCardHeaderComponent', () => {
  let component: TransferDataCardHeaderComponent;
  let fixture: ComponentFixture<TransferDataCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDataCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDataCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
