import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import * as fromTransferStore from '../../store/reducers/transfer.reducer'
import * as fromTransferAction from '../../store/actions/transfer.actions'
import * as fromTransferSelector from '../../store/selectors/transfer.selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-home',
  templateUrl: './transfer-home.component.html',
  styleUrls: ['./transfer-home.component.scss']
})
export class TransferHomeComponent implements OnInit {

  transferData$ = new Observable()
  constructor( private store: Store<fromTransferStore.State>) { }

  ngOnInit(): void {
    this.store.dispatch(fromTransferAction.loadTransfers())
    
    this.transferData$ = this.store.select(fromTransferSelector.selectTransfers)
  }

}
