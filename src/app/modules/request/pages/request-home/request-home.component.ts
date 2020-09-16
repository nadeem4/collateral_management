import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import * as fromRequestStore from '../../store/reducers/request.reducer'
import * as fromRequestAction from '../../store/actions/request.actions'
import * as fromRequestSelector from '../../store/selectors/request.selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request-home',
  templateUrl: './request-home.component.html',
  styleUrls: ['./request-home.component.scss']
})
export class RequestHomeComponent implements OnInit {

  constructor( private store: Store<fromRequestStore.State>) { }

  requestData$ = new Observable()

  ngOnInit(): void {

    this.store.dispatch(fromRequestAction.loadRequests());
    
  }

}
