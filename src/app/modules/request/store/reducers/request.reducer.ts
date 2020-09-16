import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { RequestModel } from '../../models/request.model';
import * as RequestActions from '../actions/request.actions';

export const requestFeatureKey = 'requests';

export interface State extends EntityState<RequestModel> {
  error: any;
  selectedRequestId: number;
}

export const adapter: EntityAdapter<RequestModel> = createEntityAdapter<
  RequestModel
>({
  selectId: (request: RequestModel) => request.requestId,
});

export const initialState: State = adapter.getInitialState({
  error: null,
  selectedRequestId: null,
});

export const reducer = createReducer(
  initialState,
  on(RequestActions.loadRequestsSuccess, (state, action) =>
    adapter.setAll(action.requests, state)
  ),
  on(RequestActions.loadRequestsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(RequestActions.loadRequestSuccess, (state, action) => {
    return {
      ...state,
      selectedRequestId: action.requests.requestId,
    };
  }),
  on(RequestActions.loadRequestFailure, (state, action) => {
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
