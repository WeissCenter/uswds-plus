import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenToCssService } from 'src/app/services/token-to-css.service';
import {ThemeTokens} from '../../interfaces/tokens';

/**
 * Represents the TokenFormComponent class.
 * This component is responsible for managing a form that allows users to modify CSS tokens.
 */
@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.scss']
})
export class TokenFormComponent implements OnInit, OnChanges {
  tokenForm!: FormGroup;

  /**
   * The key of the token.
   */
  @Input() tokenKey!: string;

  /**
   * An array of tokens.
   */
  @Input() tokenArr: any[] = [];

  /**
   * The host element reference.
   */
  @Input() hostEl!: ElementRef;

  /**
   * The current theme.
   */
  @Input() currentTheme!: string;

  constructor(
    private tokenToCssService: TokenToCssService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {}

  /**
   * Lifecycle hook that is called when any of the input properties change.
   * It rebuilds the form and resets the styles.
   * @param changes - The changes object containing the changed properties.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tokenArr']) {
      this.resetStyles();
    }
  }

  /**
   * Builds the form based on the token array.
   * The form controls are built based on the token name and value.
   */
  buildForm() {
    const formControls = this.tokenArr.reduce((controls, token) => {
      controls[token.name] = this.fb.control(token.value);
      return controls;
    }, {});
    if (Object.keys(formControls).length > 0) {
      this.tokenForm = this.fb.group(formControls);
    } else {
      console.error(`Form controls not built for tokenKey: ${this.tokenKey}`);
    }
    this.applyUpdates();
  }

  /**
   * Applies the updates to the host element's style attribute based on the form values.
   * Keeps the styles scoped to the parent component.
   */
  applyUpdates() {
    const css = this.tokenToCssService.generateCssFromFormValue(
      this.tokenForm.value,
      'usa',
      this.tokenKey
    );
    this.renderer.setAttribute(this.hostEl.nativeElement, 'style', css);
  }

  /**
   * Doing it this way because the default theme tokens could have changed since the component was initialized. If we just created a copy on init and used that, it could be out of date.
   */
  resetStyles() {
    this.buildForm();
  }

  ngOnInit() {
    this.buildForm();
  }

    // generateNewTokenJSON() {
  //   console.log(
  //     this.tokenToCssService.generateTokenObjectWithFormValues(
  //       defaultTokenObj[this.currentTheme],
  //       this.tokenForm.value
  //     )
  //   );
  // }
}
