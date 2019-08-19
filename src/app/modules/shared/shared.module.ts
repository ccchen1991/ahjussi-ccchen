import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';

@NgModule({
  declarations: [
    TableLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableLayoutComponent
  ]
})
export class SharedModule { }
