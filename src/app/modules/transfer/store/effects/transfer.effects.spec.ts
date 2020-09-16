import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TransferEffects } from './transfer.effects';

describe('TransferEffects', () => {
  let actions$: Observable<any>;
  let effects: TransferEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransferEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TransferEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
