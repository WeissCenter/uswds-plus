import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { aggregatedTokens } from '../aggregated-tokens';
import { TokenToCssService } from './token-to-css.service';
import { ToolboxService } from './toolbox.service';
import { ThemeTokens } from '../interfaces/token-interface';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<string>('adapt');
  public availableThemes: string[] = Object.keys(aggregatedTokens);
  public allTokens = aggregatedTokens;

  constructor(
    private tokenToCssService: TokenToCssService,
    private toolboxService: ToolboxService
  ) {
    console.log('Available themes:', this.availableThemes);
  }

  getCurrentTheme(): string {
    return this.currentTheme.getValue();
  }

  setTheme(theme: string): void {
    this.currentTheme.next(theme);
  }

  getTheme(): Observable<string> {
    return this.currentTheme.asObservable();
  }

  getTokenData(
    tokenKey: string,
    defaultTokenObj: ThemeTokens
  ): Observable<{ defaultTokenArr: any[]; defaultCSSVars: any[] }> {
    return this.currentTheme.pipe(
      switchMap((theme) => {
        // Ensure the theme exists in the defaultTokenObj; fallback to 'base' if not
        const effectiveTheme = defaultTokenObj.hasOwnProperty(theme) ? theme : 'base';
  
        // Now proceed with calculating the token data for the effectiveTheme
        const defaultTokenArr = this.toolboxService.sortArrayByKey(
          this.toolboxService.convertObjectToArray(defaultTokenObj[effectiveTheme]),
          'name'
        );
  
        const defaultCSSVars = this.toolboxService.sortArrayByKey(
          this.tokenToCssService.parseCssVariables(
            this.tokenToCssService.cssVars(
              defaultTokenObj[effectiveTheme],
              'usa',
              tokenKey
            )
          ),
          'name'
        );
  
        // Since we're directly transforming the theme change into token data,
        // no additional subscription is needed here; just return the data.
        return of({ defaultTokenArr, defaultCSSVars }); // Wrap the synchronous data with 'of' to return an Observable
      })
    );
  }


}
