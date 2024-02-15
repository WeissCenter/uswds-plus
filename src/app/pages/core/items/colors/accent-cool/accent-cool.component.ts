import { Component, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import * as USWDS from '@uswds/uswds/js';
import defaultTokenObj, { key as tokenKey } from './tokens';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accent-cool',
  templateUrl: './accent-cool.component.html',
  styleUrls: ['./accent-cool.component.scss']
})
export class AccentCoolComponent {
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
