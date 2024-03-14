import { Component, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import * as USWDS from '@uswds/uswds/js';
const { table } = USWDS;
import defaultTokenObj, { key as tokenKey } from './tokens';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
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
    table.on(document.body);
  }

  ngOnDestroy() {
    table.off(document.body);
    this.themeSubscription.unsubscribe();
  }
}
