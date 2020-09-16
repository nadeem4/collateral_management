import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequest from '../reducers/request.reducer';

export const selectRequestState = createFeatureSelector<fromRequest.State>(
  fromRequest.requestFeatureKey
);

export const selectRequests = createSelector(
  selectRequestState,
  fromRequest.selectAll
);

export const selectRequest = createSelector(
  selectRequestState,
  (state: fromRequest.State) => state.selectedRequestId
);
