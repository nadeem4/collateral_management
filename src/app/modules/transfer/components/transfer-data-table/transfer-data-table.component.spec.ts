import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDataTableComponent } from './transfer-data-table.component';

describe('TransferDataTableComponent', () => {
  let component: TransferDataTableComponent;
  let fixture: ComponentFixture<TransferDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
