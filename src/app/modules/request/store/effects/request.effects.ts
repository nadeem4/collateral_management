import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RequestActions from '../actions/request.actions';

import { RequestService } from '../../services/request.service';

@Injectable()
export class RequestEffects {

   
  loadRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestActions.loadRequests),
      concatMap(() =>
        this.requestService.getRequestData().pipe(
          map((data) => RequestActions.loadRequestsSuccess({ requests: data })),
          catchError((error) =>
            of(RequestActions.loadRequestsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}
}
