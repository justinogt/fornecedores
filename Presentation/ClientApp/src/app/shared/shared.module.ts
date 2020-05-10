import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PageCardComponent } from './page-card/page-card.component';

@NgModule({
  declarations: [TableComponent, PageCardComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent, PageCardComponent]
})
export class SharedModule { }
