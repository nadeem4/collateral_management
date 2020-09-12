import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDataCardComponent } from './transfer-data-card.component';

describe('TransferDataCardComponent', () => {
  let component: TransferDataCardComponent;
  let fixture: ComponentFixture<TransferDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDataCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
