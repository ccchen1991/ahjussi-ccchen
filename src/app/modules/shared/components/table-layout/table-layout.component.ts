import { Component, OnChanges, Input } from '@angular/core';
import { ColumnSetting } from '../../models/table-layout.model';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent implements OnChanges {

  @Input() records: any[];
  @Input() settings: ColumnSetting[];
  columnSettings: ColumnSetting[];
  keys: string[];

  ngOnChanges() {
    if (this.settings) {
      this.columnSettings = this.settings;
    } else {
      this.columnSettings = Object.keys(this.records[0])
        .map(k => {
          return {
            key: k,
            header: k
          };
        });
    }
  }

}
