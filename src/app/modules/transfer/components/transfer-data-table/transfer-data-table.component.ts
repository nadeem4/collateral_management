import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-data-table',
  templateUrl: './transfer-data-table.component.html',
  styleUrls: ['./transfer-data-table.component.scss'],
})
export class TransferDataTableComponent implements OnInit {
  @Input() transferData$ = new Observable();
  @Input() columnDefs = []

  constructor() {
    
  }

  ngOnInit(): void {
    this.setColumnDefs()
  }

  private setColumnDefs() {
    this.columnDefs = [
      {
        checkboxSelection: true,
        filter: false,
        sortable: false,
        flex:0.5,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
      },
      {
        headerName: 'Symbol',
        field: 'symbol'
      },
      {
        headerName: 'ISIN',
        field: 'isin'
      },
      {
        headerName: 'Series',
        field: 'series'
      },
      {
        headerName: 'Custodian',
        field: 'custodian'
      },
      {
        headerName: 'TM Code',
        field: 'tmCode'
      },
      {
        headerName: 'Client Code',
        field: 'clientCode'
      },
      {
        headerName: 'Available Qty',
        field: 'availableQty'
      },
      {
        headerName: 'Pending for Release',
        field: 'pendingRelease'
      },
      {
        headerName: 'Pending for Transfer',
        field: 'pendingTransfer'
      },
      {
        headerName: 'Net Available Qty',
        field: 'netAvailableQty'
      },
      {
        headerName: 'Destination Segment',
        field: 'destinationSegment'
      }
    ]
  }

  
}
