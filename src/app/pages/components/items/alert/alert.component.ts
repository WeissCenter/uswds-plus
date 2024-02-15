import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenToCssService } from 'src/app/services/token-to-css.service';
import { ToolboxService } from 'src/app/services/toolbox.service';
import defaultTokenObj from './tokens';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  tokenForm!: FormGroup;
  themeSubscription!: Subscription;
  currentTheme!: string;

  defaultTokenArr:any[] = [];
  defaultVars: any[] = [];

  currentTokenArr: any[] = [];
  currentVars = [...this.defaultVars];

  constructor(
    private tokenToCssService: TokenToCssService,
    private el: ElementRef,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private toolboxService: ToolboxService,
    private themeService: ThemeService
  ) {
    this.themeSubscription = this.themeService.getTheme().subscribe((theme) => {
      this.currentTheme = theme;
      if (defaultTokenObj.hasOwnProperty(theme as string)) {
      } else {
        console.error(`Theme '${theme}' not found in defaultTokenObj`);
        this.currentTheme = 'base';
      }
      this.defaultTokenArr = this.toolboxService.sortArrayByKey(
        this.toolboxService.convertObjectToArray(defaultTokenObj[this.currentTheme]),
        'name'
      );
      this.currentTokenArr = [...this.defaultTokenArr];
      let cssVars = this.tokenToCssService.cssVars(
        defaultTokenObj[this.currentTheme],
        'usa',
        'alert'
      );
      this.currentVars = this.toolboxService.sortArrayByKey(
        this.tokenToCssService.parseCssVariables(cssVars),
        'name'
      );
      this.buildForm();
      this.applyStyles(cssVars);
    });
  }

  buildForm() {
    const formControls = this.currentTokenArr.reduce((controls, token) => {
      controls[token.name] = this.fb.control(token.value);
      return controls;
    }, {});

    this.tokenForm = this.fb.group(formControls);
  }

  applyUpdates() {
    const css = this.tokenToCssService.generateCssFromFormValue(
      this.tokenForm.value,
      'usa',
      'alert'
    );
    this.applyStyles(css);
  }

  generateNewTokenJSON() {
    console.log(
      this.tokenToCssService.generateTokenObjectWithFormValues(
        defaultTokenObj[this.currentTheme],
        this.tokenForm.value
      )
    );
  }

  applyStyles(cssVars: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'style', cssVars);
  }

  resetStyles() {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'style',
      this.tokenToCssService.cssVars(defaultTokenObj[this.currentTheme], 'usa', 'alert')
    );
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
