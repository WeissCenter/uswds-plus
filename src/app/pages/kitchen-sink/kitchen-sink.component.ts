import { Component } from '@angular/core';
import * as USWDS from '@uswds/uswds/js';
const { accordion, password, table } = USWDS;

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss'],
})
export class KitchenSinkComponent {
  ngAfterViewInit() {
    console.log(USWDS);
    accordion.on(document.body);
    password.on(document.body);
    table.on(document.body);
  }

  lowVisionActive = false;

  toggleLowVisionPreset() {
    this.lowVisionActive = !this.lowVisionActive;
    if (this.lowVisionActive) {
      document.documentElement.setAttribute(
        'data-a11y-preset',
        'low-vision'
      );
    } else {
      document.documentElement.setAttribute(
        'data-a11y-preset',
        ''
      );
    }
  }

  dyslexiaPresetActive = false;

  toggleDyslexiaPreset() {
    this.dyslexiaPresetActive = !this.dyslexiaPresetActive;
    if (this.dyslexiaPresetActive) {
      document.documentElement.setAttribute(
        'data-a11y-preset',
        'dyslexia'
      );
    } else {
      document.documentElement.setAttribute(
        'data-a11y-preset',
        ''
      );
    }
  }
}
