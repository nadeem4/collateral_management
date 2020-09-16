import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTransfer from '../reducers/transfer.reducer';

export const selectTransferState = createFeatureSelector<fromTransfer.State>(
  fromTransfer.transferFeatureKey
);

export const selectTransfers = createSelector(
  selectTransferState,
  fromTransfer.selectAll
);
