import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccessibilityWidgetService } from './accessibility-widget.service';
import * as USWDS from '@uswds/uswds/js';

export class AccessibilitySettings {
  fontSize: string;
  spacing: string;
  color: string;
  layout: string;
  family: string;

  constructor(
    fontSize = 'default',
    spacing = 'default',
    color = 'light',
    layout = 'default',
    family = 'default'
  ) {
    this.fontSize = fontSize;
    this.spacing = spacing;
    this.color = color;
    this.layout = layout;
    this.family = family
  }
}

@Component({
  selector: 'adapt-accessibility-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accessibility-widget.component.html',
  styleUrls: [
    './accessibility-widget.component.scss',
    './css/accessibility-font-sizes.css',
    // './css/accessibility-spacing.css',
    './css/accessibility-color-themes.css',
    './css/accessibility-layout.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AccessibilityWidgetComponent {
  @Input() show_accessibility_widget = false;
  @ViewChild('accessibilityPanel') panel?: ElementRef<HTMLElement>;
  @ViewChild('closeButton') close_button?: ElementRef<HTMLDivElement>;

  current_view = 'text';
  ref: HTMLElement;
  contrast = false;
  statusMessage = '';

  // Allow for passed in accessibility settings in case we want to pull in things from user objects or whatnot in future projects
  @Input() accessibility_settings: AccessibilitySettings =
    new AccessibilitySettings();
  // Broken into variables for easier access in template
  font_size = this.accessibility_settings.fontSize;
  spacing = this.accessibility_settings.spacing;
  color_theme = this.accessibility_settings.color;
  layout = this.accessibility_settings.layout;
  family = this.accessibility_settings.family;

  constructor(private accessibilityWidgetService: AccessibilityWidgetService) {
    this.ref = document.body;
    // Check for presence of localStorage saved accessibility variables
    const saved = JSON.parse(
      localStorage.getItem('adapt-accessibility-settings') || '{}'
    );
    if (saved.fontSize) this.accessibility_settings = saved;
    console.log('Saved settings:', saved);
    console.log('Accessibility settings:', this.accessibility_settings);
    this.applySettings(true);
    this.contrast =
      this.accessibility_settings.color === 'high-contrast' ? true : false;

    this.accessibilityWidgetService.showAccessibilityWidget$.subscribe(
      (show) => {
        this.show_accessibility_widget = show;
        if (show) {
          setTimeout(() => {
            this.close_button?.nativeElement.focus();
          }, 0);
        }
      }
    );
  }

  availableFontSizes = ['default', 'large', 'larger', 'largest'];

  fontSizeUpdate(skip_check: boolean = false) {
    // Cycle through available font sizes when clicking button
    // If we're at the end of the array, start over
    if (!skip_check) {
      const currentIndex = this.availableFontSizes.indexOf(this.font_size);
      if (currentIndex === this.availableFontSizes.length - 1) {
        this.font_size = this.availableFontSizes[0];
      } else {
        this.font_size = this.availableFontSizes[currentIndex + 1];
      }
      this.statusMessage = `Font size set to ${this.font_size}`;
    }
    this.accessibility_settings.fontSize = this.font_size;
    console.log('Font size set:', this.accessibility_settings.fontSize);
    document.documentElement.setAttribute(
      'data-a11y-font-size',
      this.accessibility_settings.fontSize
    );
    this.saveSettingsLocally();
  }

  spacingUpdate() {
    this.accessibility_settings.spacing = this.spacing;
    console.log('Spacing set:', this.accessibility_settings.spacing);
    document.documentElement.setAttribute(
      'data-a11y-line-height',
      this.accessibility_settings.spacing
    );
    this.saveSettingsLocally();
  }

  colorThemeUpdate() {
    this.accessibility_settings.color = this.color_theme;
    console.log('Color set:', this.accessibility_settings.color);
    document.documentElement.setAttribute(
      'data-a11y-color-theme',
      this.accessibility_settings.color
    );
    this.saveSettingsLocally();
  }
  private firstFocusableElement: HTMLElement | null = null;
  private lastFocusableElement: HTMLElement | null = null;
  private focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], li[tabindex="0"], li[tabindex="-1"], tr[tabindex="0"], tr[tabindex="-1"]';

  // Close panel when user hits escape key
  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.show_accessibility_widget) {
      const focusableElements = this.panel?.nativeElement.querySelectorAll(
        this.focusableElementsString
      ) as NodeListOf<HTMLElement>;
      console.log('Focusable elements:', this.panel);
      this.firstFocusableElement = focusableElements[0];
      this.lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      const deepActiveElement = document.activeElement;
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          /* shift + tab */
          if (deepActiveElement === this.firstFocusableElement) {
            event.preventDefault();
            this.lastFocusableElement?.focus();
          }
        } else {
          /* tab */
          if (deepActiveElement === this.lastFocusableElement) {
            event.preventDefault();
            this.firstFocusableElement?.focus();
          }
        }
      } else if (event.key === 'Escape') {
        this.close();
      }
    }
  }

  contrastUpdate() {
    if (this.accessibility_settings.color === 'default') {
      this.accessibility_settings.color = 'high-contrast';
      this.contrast = true;
    } else {
      this.accessibility_settings.color = 'default';
      this.contrast = false;
    }
    this.statusMessage = `Contrast set to ${this.accessibility_settings.color}`;
    console.log('Contrast set:', this.accessibility_settings.color);
    document.documentElement.setAttribute(
      'data-a11y-color-theme',
      this.accessibility_settings.color.toString()
    );
    this.saveSettingsLocally();
  }

  familyUpdate(skip_update: boolean = false) {
    if (!skip_update) {
      if (this.accessibility_settings.family === 'default') {
        this.accessibility_settings.family = 'easy';
      } else {
        this.accessibility_settings.family = 'default';
      }
      this.family = this.accessibility_settings.family;
      this.statusMessage = `Font family set to ${this.accessibility_settings.family}`;
      console.log('Font family set:', this.accessibility_settings.family);
    }
  
    document.documentElement.setAttribute(
      'data-a11y-font-family',
      this.accessibility_settings.family.toString()
    );
    this.saveSettingsLocally();
  }

  layoutUpdate() {
    this.accessibility_settings.layout = this.layout;
    console.log('Layout set:', this.accessibility_settings.layout);
    document.documentElement.setAttribute(
      'data-a11y-layout',
      this.accessibility_settings.layout
    );
    this.saveSettingsLocally();
  }

  close() {
    this.accessibilityWidgetService.toggleWidgetVisibility();
  }

  reset() {
    this.accessibility_settings = new AccessibilitySettings();
    this.applySettings();
  }

  updateView(view: string) {
    this.current_view = view;
  }

  applySettings(skip_check: boolean = false) {
    this.font_size = this.accessibility_settings.fontSize;
    this.spacing = this.accessibility_settings.spacing;
    this.color_theme = this.accessibility_settings.color;
    this.layout = this.accessibility_settings.layout;
    this.family = this.accessibility_settings.family;
    this.colorThemeUpdate();
    this.fontSizeUpdate(skip_check);
    this.familyUpdate(true);
  }

  saveSettingsLocally() {
    localStorage.setItem(
      'adapt-accessibility-settings',
      JSON.stringify(this.accessibility_settings)
    );
  }
}
