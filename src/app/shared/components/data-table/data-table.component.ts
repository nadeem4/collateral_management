import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SetFilterComponent } from '../set-filter/set-filter.component';
import { RangeDateFilterComponent } from '../range-date-filter/range-date-filter.component';
import { RangeTimeFilterComponent } from '../range-time-filter/range-time-filter.component';
import { DownloadService } from '../../services/download.service';
import { TableSearchComponent } from '../table-search/table-search.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  private gridApi;
  private gridColumnApi;
  @Input() frameworkComponents;
  @Input() columnDefs;
  @Input() tableData$ = new Observable();

  icons = {
    sortAscending:
      '<img src="/assets/images/sort-blue.svg"   alt="" srcset="">',
    sortDescending:
      '<img src="/assets/images/sort-blue.svg"  alt="" srcset="">',
    filter: '<img src=""  alt="" srcset="">',
    sortUnSort: '<img src="/assets/images/sort-blue.svg"  alt="" srcset="">'
  };

  defaultColDef;
  rowData: [];

  constructor(private downnloadService: DownloadService) {
    this.defaultColDef = {
      sortable: true,
      flex: 1,
      minWidth: 120,
      filter: true,
      floatingFilter: true,
      floatingFilterComponent: 'textFilter',
      floatingFilterComponentParams: {
        debounceMs: 1000
      },
      
      suppressMenu: true,
      unSortIcon:true
      
    };
    this.setFrameworkComponents();
    this.exportDataToCsv();
  }

  setFrameworkComponents() {
    this.frameworkComponents = {
      setFilter: SetFilterComponent,
      dataRangeFilter: RangeDateFilterComponent,
      timeRangeFilter: RangeTimeFilterComponent,
      textFilter: TableSearchComponent
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.tableData$.subscribe((res: []) => {
      this.rowData = res;
      console.log({ data: this.rowData });
    });
  }

  exportDataToCsv() {
    this.downnloadService.download.subscribe((res) => {
      console.log(res);

      var params = this.getParams(res['selected']);

      this.gridApi.exportDataAsCsv(params);
    });
  }
  getParams(selected: boolean) {
    return {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'request_data.csv',
      onlySelected: selected
    };
  }
}
