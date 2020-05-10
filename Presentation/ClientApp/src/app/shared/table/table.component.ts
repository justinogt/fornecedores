import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export type FormatFn<T> = (value?: any, row?: T, index?: number) => any;

export interface Column<T> {
  header: string;
  field?: keyof T;
  format?: FormatFn<T>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T = any> implements OnInit, OnDestroy {
  @Input() columns$: Observable<Column<T>[]>;
  @Input() data$: Observable<T[]>;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  formatProperty(col: Column<T>, row: any, index: number) {
    return col.format ? col.format(row[col.field], row, index) : row[col.field];
  }

}
