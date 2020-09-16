import { createAction, props } from '@ngrx/store';

import { RequestModel } from '../../models/request.model';

export const loadRequests = createAction(
  '[Request/API] Load Requests'
);

export const loadRequestsSuccess = createAction(
  '[Request/API] Load Requests Success', 
  props<{ requests: RequestModel[] }>()
);

export const loadRequestsFailure = createAction(
  '[Request/API] Load Requests Failure', 
  props<{ error: any }>()
);


export const loadRequest = createAction(
  '[Request/API] Load Request',
  props<{id: string}>()
);

export const loadRequestSuccess = createAction(
  '[Request/API] Load Request Success', 
  props<{ requests: RequestModel }>()
);

export const loadRequestFailure = createAction(
  '[Request/API] Load Request Failure', 
  props<{ error: any }>()
);
