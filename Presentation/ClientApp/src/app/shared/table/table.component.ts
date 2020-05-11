import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export type FormatFn<T> = (value?: any, row?: T, index?: number) => any;

export interface Column<T> {
  header: string;
  field?: keyof T;
  format?: FormatFn<T>;
}

export type FilterData<T> = {
  [P in keyof T]: string;
};

export function formatField<T>(col: Column<T>, row: any, index: number): string {
  return col.format ? col.format(row[col.field], row, index) : row[col.field] || '';
}

export function filterTable<T>(filter: FilterData<T>, rawColumns: Column<T>[], rawData: T[], data: T[]): T[] {
  // Filter is clear
  if (Object.keys(filter).length === 0 && data.length !== rawData.length)
    return rawData;

  return data.filter((item: any, index: number) => {
    for (const key in filter) {
      const col = rawColumns.find(c => c.field === key);
      if (formatField(col, item, index).toLowerCase().indexOf(filter[key].toLowerCase()) === -1)
        return false;
    }
    return true;
  });
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T = any> {
  @Input() columns$: Observable<Column<T>[]>;
  @Input() data$: Observable<T[]>;

  @Output() filter = new EventEmitter<FilterData<T>>();
  @Output() delete = new EventEmitter<T>();
  @Output() edit = new EventEmitter<T>();

  filterData = { };

  constructor() {}

  formatField(col: Column<T>, row: any, index: number) {
    return formatField(col, row, index);
  }

  filterAction() {
    if (Object.values(this.filterData).filter(item => item).length === 0)
      this.filterData = {};
    this.filter.emit(this.filterData as FilterData<T>);
  }
}
