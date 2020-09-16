import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRequestStore from '../../store/reducers/request.reducer';
import * as fromRequestAction from '../../store/actions/request.actions';
import * as fromRequestSelector from '../../store/selectors/request.selectors';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { SetFilterComponent } from 'src/app/shared/components/set-filter/set-filter.component';

@Component({
  selector: 'app-request-data-table',
  templateUrl: './request-data-table.component.html',
  styleUrls: ['./request-data-table.component.scss'],
})
export class RequestDataTableComponent implements OnInit {
  @Input() columnDefs = [];
  @Input() requestData$ = new Observable();
  frameworkComponents: { setFilter: any };

  constructor(
    private store: Store<fromRequestStore.State>,
    
  ) {}

  ngOnInit(): void {
    this.requestData$ = this.store.select(fromRequestSelector.selectRequests);
  }

 
}
