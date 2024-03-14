import { Component, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import * as USWDS from '@uswds/uswds/js';
import defaultTokenObj, { key as tokenKey } from './tokens';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent {
  themeSubscription!: Subscription;
  currentTheme!: string;

  tokenKey = tokenKey;
  defaultTokenObj = defaultTokenObj;

  defaultTokenArr: any[] = [];
  defaultCSSVars: any[] = [];

  currentTokenArr: any[] = [];
  currentVars = [...this.defaultCSSVars];

  constructor(
    public el: ElementRef,
    private themeService: ThemeService
  ) {
    this.themeSubscription = this.themeService.getTokenData(tokenKey, defaultTokenObj).subscribe(data => {
      console.log('data', data);
      this.defaultTokenArr = data.defaultTokenArr;
      this.currentTokenArr = [...this.defaultTokenArr]
      this.defaultCSSVars = data.defaultCSSVars;
    });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
