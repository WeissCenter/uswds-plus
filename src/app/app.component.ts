import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';
import * as USWDS from '@uswds/uswds/js';
import { Subscription } from 'rxjs';
import { aggregatedTokens } from './aggregated-tokens';
import { TokenToCssService } from './services/token-to-css.service';
const { banner, inPageNavigation, navigation, accordion } = USWDS;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uswds-css-custom-props';
  @ViewChild('banner', { static: false }) bannerElement!: ElementRef;
  availableThemes: string[] = [];
  themeSubscription!: Subscription;
  currentTheme!: string;

  // Shortcut for now to identify tokens that need an a11y modifier
  a11yModifierTokens = [{ 
    id: 'font-size', 
    value: 'a11y-font-size-modifier' 
  }, {
    id: 'line-height', 
    value: 'a11y-line-height-modifier' 
  },
  {
    id: 'letter-spacing', 
    value: 'a11y-letter-spacing-modifier'
  }
  ];

  constructor(
    private themeService: ThemeService,
    private tokenToCssService: TokenToCssService
  ) {
    this.availableThemes = this.themeService.availableThemes;
    this.themeSubscription = this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
      this.applyTokens(theme);
    });
  }

  applyTokens(theme: string): void {
    const themeTokens = aggregatedTokens[theme];

    if (!themeTokens) {
      console.warn(`No tokens found for theme: ${theme}`);
      return;
    }

    // Prepare a string to accumulate CSS variables for the current theme
    let cssVariablesString = '';

    // Iterate over each token in the selected theme
    Object.entries(themeTokens).forEach(([key, tokenObject]) => {
      // For each token, generate CSS variables string
      // Assuming tokenObject is compatible with the service's expected input
      let a11yModifier = undefined;
      let modify = this.a11yModifierTokens.find((token) => token.id === key);
      if (modify) {
        a11yModifier = `--${modify.value}`;
      }
      const partialCssString = this.tokenToCssService.cssVars(
        tokenObject, // Wrapping the tokenObject to match expected input structure
        'usa', // Adjust 'global' and 'component' prefixes as necessary
        key,
        a11yModifier
      );
      cssVariablesString += partialCssString;
    });

    // Inject CSS Variables into the DOM for the selected theme
    this.tokenToCssService.injectCssStyleTag(
      cssVariablesString,
      'theme-variables'
    );
    // console.log(cssVariablesString);
  }

  ngAfterViewInit() {
    console.log(aggregatedTokens);
    // console.log(USWDS);
    // banner.on(document.body);
    inPageNavigation.on(document.body);
    navigation.on(document.body);
    accordion.on(document.body);
  }

  setTheme(theme: string) {
    // Set the new theme
    this.themeService.setTheme(theme);
  }

  setA11y(type: string, value: string) {
    // Set the new theme
    document.documentElement.setAttribute(`data-${type}`, value);
  }
}
