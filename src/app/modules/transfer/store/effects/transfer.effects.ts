import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TransferActions from '../actions/transfer.actions';

import { TransferService } from '../../services/transfer.service';

@Injectable()
export class TransferEffects {
  loadTransfers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransferActions.loadTransfers),
      concatMap(() =>
        this.transferService.getTransferData().pipe(
          map((data) =>
            TransferActions.loadTransfersSuccess({ transfers: data })
          ),
          catchError((error) =>
            of(TransferActions.loadTransfersFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private transferService: TransferService
  ) {}
}
