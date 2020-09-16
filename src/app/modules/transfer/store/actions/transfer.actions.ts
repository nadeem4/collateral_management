import { createAction, props } from '@ngrx/store';

import { TransferModel } from '../../models/transfer.model';

export const loadTransfers = createAction(
  '[Transfer/API] Load Transfers'
);

export const loadTransfersSuccess = createAction(
  '[Transfer/API] Load Transfers Success', 
  props<{ transfers: TransferModel[] }>()
);


export const loadTransfersFailure = createAction(
  '[Transfer/API] Load Transfers Failuer', 
  props<{ error: any }>()
);


