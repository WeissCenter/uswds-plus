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
    color = 'default',
    layout = 'default',
    family = 'default',
  ) {
    this.fontSize = fontSize;
    this.spacing = spacing;
    this.color = color;
    this.layout = layout;
    this.family = family;
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
    this.applySettings();

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

  fontSizeUpdate() {
    // Cycle through available font sizes when clicking button
    // If we're at the end of the array, start over
    const currentIndex = this.availableFontSizes.indexOf(this.font_size);
    if (currentIndex === this.availableFontSizes.length - 1) {
      this.font_size = this.availableFontSizes[0];
    } else {
      this.font_size = this.availableFontSizes[currentIndex + 1];
    }
    this.statusMessage = `Font size set to ${this.font_size}`;
    this.applyFontSize();
  }

  applyFontSize() {
    this.accessibility_settings.fontSize = this.font_size;
    console.log('Font size set:', this.accessibility_settings.fontSize);
    document.documentElement.setAttribute(
      'data-a11y-font-size',
      this.accessibility_settings.fontSize
    );
    this.saveSettingsLocally();
  }

  availableColorThemes = ['default', 'high-contrast'];

  colorThemeUpdate() {
    // Cycle through available themes when clicking button
    // If we're at the end of the array, start over
    const currentIndex = this.availableColorThemes.indexOf(this.color_theme);
    if (currentIndex === this.availableColorThemes.length - 1) {
      this.color_theme = this.availableColorThemes[0];
    } else {
      this.color_theme = this.availableColorThemes[currentIndex + 1];
    }
    this.statusMessage = `Color theme set to ${this.color_theme}`;
    this.applyColorTheme();
  }

  applyColorTheme() {
    this.accessibility_settings.color = this.color_theme;
    console.log('Color set:', this.accessibility_settings.color);
    document.documentElement.setAttribute(
      'data-a11y-color-theme',
      this.accessibility_settings.color
    );
    this.saveSettingsLocally();
  }

  availableFontFamiles = ['default', 'easy'];

  familyUpdate() {
    // Cycle through available fanilies when clicking button
    // If we're at the end of the array, start over
    const currentIndex = this.availableFontFamiles.indexOf(this.family);
    if (currentIndex === this.availableFontFamiles.length - 1) {
      this.family = this.availableFontFamiles[0];
    } else {
      this.family = this.availableFontFamiles[currentIndex + 1];
    }
    this.statusMessage = `Font family set to ${this.family}`;
    this.applyFontFamily();
  }

  applyFontFamily() {

    this.accessibility_settings.family = this.family;
    document.documentElement.setAttribute(
      'data-a11y-font-family',
      this.accessibility_settings.family.toString()
    );
    this.saveSettingsLocally();
  }

  availableLayouts = ['default', 'single'];

  layoutUpdate() {
    // Cycle through available layout options when clicking button
    // If we're at the end of the array, start over
    const currentIndex = this.availableLayouts.indexOf(this.layout);
    if (currentIndex === this.availableLayouts.length - 1) {
      this.layout = this.availableLayouts[0];
    } else {
      this.layout = this.availableLayouts[currentIndex + 1];
    }
    this.statusMessage = `Site column layout set to ${this.layout}`;
    this.applyLayout();
  }


  applyLayout() {
    this.accessibility_settings.layout = this.layout;
    console.log('Layout set:', this.accessibility_settings.layout);
    document.documentElement.setAttribute(
      'data-a11y-layout',
      this.accessibility_settings.layout
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




  close() {
    this.accessibilityWidgetService.toggleWidgetVisibility();
  }

  reset() {
    this.accessibility_settings = new AccessibilitySettings();
    this.statusMessage = `Accessibility updates have been reset.`;
    this.applySettings();
  }

  updateView(view: string) {
    this.current_view = view;
  }

  applySettings() {
    this.font_size = this.accessibility_settings.fontSize;
    this.spacing = this.accessibility_settings.spacing;
    this.color_theme = this.accessibility_settings.color;
    this.layout = this.accessibility_settings.layout;
    this.family = this.accessibility_settings.family;
    this.applyColorTheme();
    this.applyFontSize();
    this.applyFontFamily();
    this.applyLayout();
  }

  saveSettingsLocally() {
    localStorage.setItem(
      'adapt-accessibility-settings',
      JSON.stringify(this.accessibility_settings)
    );
  }
}
