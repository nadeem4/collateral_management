import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TransferModel } from '../../models/transfer.model';
import * as TransferActions from '../actions/transfer.actions';

export const transferFeatureKey = 'transfers';

export interface State extends EntityState<TransferModel> {
  error: any;
}

export const adapter: EntityAdapter<TransferModel> = createEntityAdapter<
  TransferModel
>({
  selectId: (transfer: TransferModel) => transfer.requestId,
});

export const initialState: State = adapter.getInitialState({
  error: undefined,
});

export const reducer = createReducer(
  initialState,

  on(TransferActions.loadTransfersSuccess, (state, action) =>
    adapter.setAll(action.transfers, state)
  ),
  on(TransferActions.loadTransfersFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
