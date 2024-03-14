import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenToCssService } from 'src/app/services/token-to-css.service';
import { ToolboxService } from 'src/app/services/toolbox.service';
import defaultTokenObj from './tokens';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss'],
})
export class SizesComponent {
  tokenForm!: FormGroup;
  themeSubscription!: Subscription;
  currentTheme!: string;

  defaultTokenArr: any[] = [];
  defaultVars: any[] = [];

  currentTokenArr: any[] = [];
  currentVars = [...this.defaultVars];

  constructor(
    private tokenToCssService: TokenToCssService,
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
      (this.defaultTokenArr = this.toolboxService.convertObjectToArray(
        defaultTokenObj[this.currentTheme]
      )),
        'name';
      this.currentTokenArr = [...this.defaultTokenArr];
      let cssVars = this.tokenToCssService.cssVars(
        defaultTokenObj[this.currentTheme],
        'usa',
        'letter-spacing'
      );
      console.log(this.currentTokenArr);
      this.currentVars = this.tokenToCssService.parseCssVariables(cssVars);
      this.buildForm();
      this.applyStyles();
    });
  }

  buildForm() {
    const formControls = this.currentTokenArr.reduce((controls, token) => {
      controls[token.name] = this.fb.control(token.value);
      return controls;
    }, {});

    this.tokenForm = this.fb.group(formControls);
  }

  generateNewTokenJSON() {
    console.log(
      this.tokenToCssService.generateTokenObjectWithFormValues(
        defaultTokenObj[this.currentTheme],
        this.tokenForm.value
      )
    );
  }

  applyStyles() {
    // copy default token object, then map over the values from the form (this restores the a11y and description properties to pass along to the service while also capturing new data) TODO: can we keep all that extra info available on the form object?
    const newTokenObj = {... defaultTokenObj[this.currentTheme]};
    Object.keys(this.tokenForm.value).map((key, index) => {
      newTokenObj[key].value = this.tokenForm.value[key];
    });


    const css = this.tokenToCssService.cssVars(
      newTokenObj,
      'usa',
      'letter-spacing'
    );

    this.tokenToCssService.injectCssStyleTag(css, 'letter-spacing');
  }

 

  resetStyles() {
    const styleTag = document.getElementById('letter-spacing') as HTMLStyleElement;
    if (styleTag) {
      styleTag.remove();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
    this.resetStyles();
  }
}
