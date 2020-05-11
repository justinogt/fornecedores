import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PageCardComponent } from './page-card/page-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, PageCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TableComponent, PageCardComponent]
})
export class SharedModule { }
