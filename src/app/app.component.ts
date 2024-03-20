import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';
import * as USWDS from '@uswds/uswds/js';
import { Subscription } from 'rxjs';
import { aggregatedTokens } from './aggregated-tokens';
import { TokenToCssService } from './services/token-to-css.service';
import { AccessibilityWidgetService } from './accessibility-widget/accessibility-widget.service';
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
  a11yPanelOpen = false;
  mobileMenuOpen = false;

  constructor(
    private themeService: ThemeService,
    private tokenToCssService: TokenToCssService,
    private accessibilityWidgetService: AccessibilityWidgetService
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

      const partialCssString = this.tokenToCssService.cssVars(
        tokenObject, // Wrapping the tokenObject to match expected input structure
        'usa', // Adjust 'global' and 'component' prefixes as necessary
        key
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
    this.accessibilityWidgetService.showAccessibilityWidget$.subscribe(
      (show) => {
        this.a11yPanelOpen = show;
      }
    );
  }

  openA11yPanel() {
    this.accessibilityWidgetService.toggleWidgetVisibility();
    document.documentElement.setAttribute('data-a11y-panel', 'open');
  }

}
