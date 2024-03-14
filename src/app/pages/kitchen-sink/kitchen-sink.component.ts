import { Component } from '@angular/core';
import * as USWDS from '@uswds/uswds/js';
const { accordion, password, table } = USWDS;

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent {
  ngAfterViewInit() {
    console.log(USWDS);
    accordion.on(document.body);
    password.on(document.body);
    table.on(document.body);
  }
}
