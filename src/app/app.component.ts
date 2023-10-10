import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uswds-css-custom-props';

  constructor() {
    // Set the theme to light by default
    document.documentElement.setAttribute('data-theme', 'light');
  }

  setTheme(theme:string) {
    // Set the new theme
    document.documentElement.setAttribute('data-theme', theme);
  }

  seFontSize(size:string) {
    // Set the new theme
    document.documentElement.setAttribute('data-font-size', size);
  }
}
