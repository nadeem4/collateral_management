import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDatepicker,
} from '@ng-bootstrap/ng-bootstrap';
import {
  IAfterGuiAttachedParams,
  IDoesFilterPassParams,
  IFilterParams,
  RowNode,
  IFloatingFilter,
  DateFilterModel
} from 'ag-grid-community';

@Component({
  selector: 'app-range-date-filter',
  templateUrl: './range-date-filter.component.html',
  styleUrls: ['./range-date-filter.component.scss'],
})
export class RangeDateFilterComponent  implements IFloatingFilter {
  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null | string;
  toDate: NgbDate | null | string;

  @ViewChild('datepicker', {read: ElementRef}) datepicker: ElementRef

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10)
  }

 
  agInit(params: IFilterParams): void {
    this.params = params;
  }

  onParentModelChanged(parentModel: DateFilterModel): void {
    if (!parentModel) {
      this.fromDate = null;
    } else {
      // note that the filter could be anything here, but our purposes we're assuming a greater than filter only,
      // so just read off the value and use that
      this.fromDate = parentModel.dateFrom;
      this.toDate = parentModel.dateTo
    }
  }


  /* onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  } */
}
