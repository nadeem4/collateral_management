import { Component, OnInit, Input } from '@angular/core';
import {
  IAfterGuiAttachedParams,
  IDoesFilterPassParams,
  IFilterParams,
  RowNode,
  IFloatingFilter,
  DateFilterModel,
  TextFilterModel,
  TextFilter,
  IFloatingFilterParams
} from 'ag-grid-community';
import { AgFrameworkComponent } from 'ag-grid-angular';


export interface SliderFloatingFilterParams extends IFloatingFilterParams {
  text: string
}

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss'],
})
export class TableSearchComponent implements OnInit, IFloatingFilter, AgFrameworkComponent<SliderFloatingFilterParams> {
  private params: SliderFloatingFilterParams;
  public text;
  constructor() {}

  ngOnInit(): void {
   
  }

  valueChanged(data) {
    console.log({event: event})
    let valueToUse = this.text === '' ? '' : data;
    this.params.parentFilterInstance(function (instance) {
      (<TextFilter>instance).onFloatingFilterChanged(
        'contains',
        valueToUse
      );
    });
  }

  
  agInit(params: SliderFloatingFilterParams): void {
    this.params = params;
    this.text = params.text
  }

  onParentModelChanged(parentModel: TextFilterModel): void {
    if (!parentModel) {
      this.text = '';
    } else {
      // note that the filter could be anything here, but our purposes we're assuming a greater than filter only,
      // so just read off the value and use that
      this.text = parentModel.filter;
      console.log({text: this.text})
    }
  }

}
