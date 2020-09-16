import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-request-data-card',
  templateUrl: './request-data-card.component.html',
  styleUrls: ['./request-data-card.component.scss']
})
export class RequestDataCardComponent implements OnInit {

  columnDefs = []
  showChangeLayout: boolean = false
  constructor( private requestService: RequestService,private dateFormatter: DatePipe,
    private titleCaseFormatter: TitleCasePipe) { }

  

  ngOnInit(): void {
    this.subscribeToChangeLayoutEvent()
    this.subscribeToCloseLayoutScreenEvent()
    this.subscribeToUpdateLayoutEvent()
    this.setColumnDefs()
  }

 
  subscribeToChangeLayoutEvent() {
    this.requestService.changeLayout$.subscribe( res => {
      this.showChangeLayout = true
    } )
  }

  subscribeToCloseLayoutScreenEvent() {
    this.requestService.closeUpdateLayoutScreen$.subscribe( res => this.showChangeLayout = false)
  }

  subscribeToUpdateLayoutEvent() {
    this.requestService.updatedLayout$.subscribe( res => {
      this.columnDefs = res['cols']
      this.showChangeLayout = false
      console.log({updatedCols: this.columnDefs})
    })
  }

  private setColumnDefs() {
    this.columnDefs = [
      {
        checkboxSelection: true,
        filter: false,
        sortable: false,
        flex: 0.5,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
      },
      {
        headerName: 'Request Date',
        field: 'requestDate',
        valueFormatter: (data) =>
          this.dateFormatter.transform(data.value, 'd MMM y'),
        
      },
      {
        headerName: 'Request ID',
        field: 'requestId',
        
      },
      {
        headerName: 'Request Status',
        field: 'status',
        
      },
      {
        headerName: 'TM Code',
        field: 'tmCode',
        
      },
      {
        headerName: 'Client Code',
        field: 'clientCode',
        
      },
      {
        headerName: 'Segment',
        field: 'segment',
        
      },
      {
        headerName: 'Collateral Type',
        field: 'collateral',
        valueFormatter: (data) => this.titleCaseFormatter.transform(data.value),
        
      },
      {
        headerName: 'Instrument Type',
        field: 'instrumentType',
        valueFormatter: (data) => this.titleCaseFormatter.transform(data.value),
        
      },
      {
        headerName: 'Instrument ID',
        field: 'instrumentId',
        
      },
      {
        headerName: 'Nature of Request',
        field: 'natureOfRequest',
        
      },
      {
        headerName: 'Request Type',
        field: 'requestType',
        valueFormatter: (data) => this.titleCaseFormatter.transform(data.value),
        
      },
      {
        headerName: 'Value Date',
        field: 'valueDate',
        valueFormatter: (data) =>
          this.dateFormatter.transform(data.value, 'd MMM y'),
          
      },
      {
        headerName: 'Time of Completion',
        field: 'processDate',
        valueFormatter: (data) =>
          this.dateFormatter.transform(data.value, 'h:mm'),
        
          
      },
    ];
  }

}
