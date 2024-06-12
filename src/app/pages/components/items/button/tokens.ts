import {ThemeTokens} from '../../../../interfaces/token-interface';

// --usa-button-stroke-width: var(--usa-border-width-md);
// --usa-button-width: auto;
// --usa-button-width-mobile: 100%;
// --usa-button-font-weight: var(--usa-font-weight-medium);
// --usa-button-margin-right: var(--usa-spacing-0);
// --usa-button-lg-padding-y: var(--usa-spacing-2);
// --usa-button-lg-padding-x: var(--usa-spacing-3);
// --usa-button-padding-y: var(--usa-spacing-1);
// --usa-button-padding-x: var(--usa-spacing-2);
// --usa-button-outline-offset: var(--usa-focus-offset);
// --usa-button-small-width: var(--usa-spacing-6);
// --usa-button-inverse-active-color: var(--usa-link-reverse-active-color);
// --usa-button-border-radius: var(--usa-border-radius-md);
// --usa-button-lg-font-size: var(--usa-font-size-lg);
// --usa-button-inverse-hover-color: var(--usa-link-reverse-hover-color);
// --usa-button-inverse-color: var(--usa-link-reverse-color);
// --usa-button-lg-border-radius: var(--usa-border-radius-md);
// --usa-button-font-size: var(--usa-font-size-xs);
// --usa-button-font-family: var(--usa-font-ui);
// --usa-button-line-height: var(--usa-line-height-2);
// --usa-button-gap: var(--usa-spacing-1);
// --usa-button-color: var(--usa-white);
// --usa-button-color-hover: var(--usa-white);
// --usa-button-color-active: var(--usa-white);
// --usa-button-color-visited: var(--usa-primary-lighter);
// --usa-button-background: var(--usa-primary-dark);
// --usa-button-background-hover: var(--usa-primary-darker);
// --usa-button-background-active: var(--usa-primary-darker);
// --usa-button-icon-size: var(--usa-spacing-3);
// --usa-button-lg-icon-size: var(--usa-spacing-4);

// --usa-button-outline-background: var(--usa-transparent);
// --usa-button-outline-background-hover: var(--usa-transparent);
// --usa-button-outline-background-active: var(--usa-transparent);
// --usa-button-outline-color: var(--usa-primary);
// --usa-button-outline-hover-color: var(--usa-primary-dark);
// --usa-button-outline-active-color: var(--usa-primary-darker);
// --usa-button-outline-border-color: var(--usa-primary);
// --usa-button-outline-border-hover-color: var(--usa-primary-dark);
// --usa-button-outline-border-active-color: var(--usa-primary-darker);

// --usa-button-flex-direction: row;
// --usa-button-flex-align: center;

// --usa-button-transition-duration: var(--usa-transition-duration-sm);
// --usa-button-transition-timing-function: var(--usa-transition-timing-function);
// --usa-button-transition-property: all;

// --usa-button-text-decoration: none;
// --usa-button-text-decoration-unstyled: none;
// --usa-button-text-decoration-hover: none;
// --usa-button-text-decoration-active: none;

// --usa-button-box-shadow: none;
// --usa-button-box-shadow-hover: none;
// --usa-button-box-shadow-active: none;

// --usa-button-cursor: pointer;

// --usa-button-text-transform: none;

export const key = 'button';

const tokens: ThemeTokens = {
  base: {
    'text-transform': {
      value: 'none',
      type: 'textTransform',
      description: 'Button text transform',
    },
    'color': {
      value: '{white}',
      type: 'color',
      description: 'Button color',
    },
    'color-hover': {
      value: '{white}',
      type: 'color',
      description: 'Button hover color',
    },
    'color-active': {
      value: '{white}',
      type: 'color',
      description: 'Button active color',
    },
    'background': {
      value: '{primary}',
      type: 'color',
      description: 'Button background color',
    },
    'background-hover': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button hover background color',
    },
    'background-active': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button active background color',
    },
    'inverse-color': {
      value: '{link.reverse-color}',
      type: 'color',
      description: 'Button inverse color',
    },
    'inverse-hover-color': {
      value: '{link.reverse-hover-color}',
      type: 'color',
      description: 'Button inverse hover color',
    },
    'inverse-active-color': {
      value: '{link.reverse-active-color}',
      type: 'color',
      description: 'Button inverse active color',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'fontFamilies',
      description: 'Button font family',
    },
    'font-size': {
      value: '{font-size.md}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'line-height': {
      value: '{line-height.1}',
      type: 'lineHeights',
      description: 'Button line height',
    },
    'lg-font-size': {
      value: '{font-size.xl}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'font-weight': {
      value: '{font-weight.bold}',
      type: 'fontWeights',
      description: 'Button font weight',
    },
    'border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'lg-border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'small-width': {
      value: '{spacing.6}',
      type: 'sizing',
      description: 'Small button width',
    },
    'stroke-width': {
      value: '{border-width.md}',
      type: 'borderWidth',
      description: 'Button stroke width',
    },
    'outline-offset': {
      value: '{focus.offset}',
      type: 'spacing',
      description: 'Button outline offset',
    },
    'padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'lg-padding-x': {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'lg-padding-y': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'margin-right': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Button margin right',
    },
    'icon-size': {
      value: '{spacing.3}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'lg-icon-size': {
      value: '{spacing.4}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'outline-background': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline background',
    },
    'outline-background-hover': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline hover background',
    },
    'outline-background-active': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline active background',
    },
    'outline-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline color',
    },
    'outline-hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline hover color',
    },
    'outline-active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button outline active color',
    },
    'outline-border-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline border color',
    },
    'outline-border-hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline border hover color',
    },
    'outline-border-active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button outline border active color',
    },

  },
  haystack: {
    'text-transform': {
      value: 'none',
      type: 'textTransform',
      description: 'Button text transform',
    },
    'color': {
      value: '{base.darkest}',
      type: 'color',
      description: 'Button color',
    },
    'color-hover': {
      value: '{base.darkest}',
      type: 'color',
      description: 'Button hover color',
    },
    'color-active': {
      value: '{base.darkest}',
      type: 'color',
      description: 'Button active color',
    },
    'background': {
      value: '{primary.light}',
      type: 'color',
      description: 'Button background color',
    },
    'background-hover': {
      value: '{primary.lighter}',
      type: 'color',
      description: 'Button hover background color',
    },
    'background-active': {
      value: '{primary.lighter}',
      type: 'color',
      description: 'Button active background color',
    },
    'inverse-color': {
      value: '{link.reverse-color}',
      type: 'color',
      description: 'Button inverse color',
    },
    'inverse-hover-color': {
      value: '{link.reverse-hover-color}',
      type: 'color',
      description: 'Button inverse hover color',
    },
    'inverse-active-color': {
      value: '{link.reverse-active-color}',
      type: 'color',
      description: 'Button inverse active color',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'fontFamilies',
      description: 'Button font family',
    },
    'font-size': {
      value: '{font-size.xs}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'line-height': {
      value: '{line-height.3}',
      type: 'lineHeights',
      description: 'Button line height',
    },
    'lg-font-size': {
      value: '{font-size.md}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'font-weight': {
      value: '{font-weight.normal}',
      type: 'fontWeights',
      description: 'Button font weight',
    },
    'border-radius': {
      value: '{border-radius.sm}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'lg-border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'small-width': {
      value: '{spacing.6}',
      type: 'sizing',
      description: 'Small button width',
    },
    'stroke-width': {
      value: '{border-width.sm}',
      type: 'borderWidth',
      description: 'Button stroke width',
    },
    'outline-offset': {
      value: '{focus.offset}',
      type: 'spacing',
      description: 'Button outline offset',
    },
    'padding-x': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'padding-y': {
      value: '{spacing.05}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'lg-padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'lg-padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'margin-right': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Button margin right',
    },
    'icon-size': {
      value: '{spacing.2}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'lg-icon-size': {
      value: '{spacing.3}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'outline-background': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline background',
    },
    'outline-background-hover': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline hover background',
    },
    'outline-background-active': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline active background',
    },
    'outline-color': {
      value: '{primary.light}',
      type: 'color',
      description: 'Button outline color',
    },
    'outline-hover-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline hover color',
    },
    'outline-active-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline active color',
    },
    'outline-border-color': {
      value: '{primary.light}',
      type: 'color',
      description: 'Button outline border color',
    },
    'outline-border-hover-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline border hover color',
    },
    'outline-border-active-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline border active color',
    },
  },
  coi: {
    'text-transform': {
      value: 'none',
      type: 'textTransform',
      description: 'Button text transform',
    },
    'color': {
      value: '{ink}',
      type: 'color',
      description: 'Button color',
    },
    'color-hover': {
      value: '{ink}',
      type: 'color',
      description: 'Button hover color',
    },
    'color-active': {
      value: '{ink}',
      type: 'color',
      description: 'Button active color',
    },
    'background': {
      value: '{primary}',
      type: 'color',
      description: 'Button background color',
    },
    'background-hover': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button hover background color',
    },
    'background-active': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button active background color',
    },
    'inverse-color': {
      value: '{link.reverse-color}',
      type: 'color',
      description: 'Button inverse color',
    },
    'inverse-hover-color': {
      value: '{link.reverse-hover-color}',
      type: 'color',
      description: 'Button inverse hover color',
    },
    'inverse-active-color': {
      value: '{link.reverse-active-color}',
      type: 'color',
      description: 'Button inverse active color',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'fontFamilies',
      description: 'Button font family',
    },
    'font-size': {
      value: '{font-size.md}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'line-height': {
      value: '{line-height.3}',
      type: 'lineHeights',
      description: 'Button line height',
    },
    'lg-font-size': {
      value: '{font-size.lg}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'font-weight': {
      value: '{font-weight.medium}',
      type: 'fontWeights',
      description: 'Button font weight',
    },
    'border-radius': {
      value: '{border-radius.sm}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'lg-border-radius': {
      value: '{border-radius.lg}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'small-width': {
      value: '{spacing.6}',
      type: 'sizing',
      description: 'Small button width',
    },
    'stroke-width': {
      value: '{border-width.md}',
      type: 'borderWidth',
      description: 'Button stroke width',
    },
    'outline-offset': {
      value: '{focus.offset}',
      type: 'spacing',
      description: 'Button outline offset',
    },
    'padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'lg-padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'lg-padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'margin-right': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Button margin right',
    },
    'icon-size': {
      value: '{spacing.205}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'lg-icon-size': {
      value: '{spacing.3}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'outline-background': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline background',
    },
    'outline-background-hover': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline hover background',
    },
    'outline-background-active': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline active background',
    },
    'outline-color': {
      value: '{primary.light}',
      type: 'color',
      description: 'Button outline color',
    },
    'outline-hover-color': {
      value: '{primary.lighter}',
      type: 'color',
      description: 'Button outline hover color',
    },
    'outline-active-color': {
      value: '{primary.lighter}',
      type: 'color',
      description: 'Button outline active color',
    },
    'outline-border-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline border color',
    },
    'outline-border-hover-color': {
      value: '{primary.base}',
      type: 'color',
      description: 'Button outline border hover color',
    },
    'outline-border-active-color': {
      value: '{primary.base}',
      type: 'color',
      description: 'Button outline border active color',
    },
  },
  adapt: {
    'text-transform': {
      value: 'capitalize',
      type: 'textTransform',
      description: 'Button text transform',
    },
    'color': {
      value: '{white}',
      type: 'color',
      description: 'Button color',
    },
    'color-hover': {
      value: '{white}',
      type: 'color',
      description: 'Button hover color',
    },
    'color-active': {
      value: '{white}',
      type: 'color',
      description: 'Button active color',
    },
    'background': {
      value: '{primary}',
      type: 'color',
      description: 'Button background color',
    },
    'background-hover': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button hover background color',
    },
    'background-active': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button active background color',
    },
    'inverse-color': {
      value: '{link.reverse-color}',
      type: 'color',
      description: 'Button inverse color',
    },
    'inverse-hover-color': {
      value: '{link.reverse-hover-color}',
      type: 'color',
      description: 'Button inverse hover color',
    },
    'inverse-active-color': {
      value: '{link.reverse-active-color}',
      type: 'color',
      description: 'Button inverse active color',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'fontFamilies',
      description: 'Button font family',
    },
    'font-size': {
      value: '{font-size.sm}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'line-height': {
      value: '{line-height.3}',
      type: 'lineHeights',
      description: 'Button line height',
    },
    'lg-font-size': {
      value: '{font-size.md}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'font-weight': {
      value: '{font-weight.bold}',
      type: 'fontWeights',
      description: 'Button font weight',
    },
    'border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'lg-border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'small-width': {
      value: '{spacing.6}',
      type: 'sizing',
      description: 'Small button width',
    },
    'stroke-width': {
      value: '{border-width.2px}',
      type: 'borderWidth',
      description: 'Button stroke width',
    },
    'outline-offset': {
      value: '{focus.offset}',
      type: 'spacing',
      description: 'Button outline offset',
    },
    'padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'lg-padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'lg-padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'margin-right': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Button margin right',
    },
    'icon-size': {
      value: '{spacing.3}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'lg-icon-size': {
      value: '{spacing.4}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'outline-background': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline background',
    },
    'outline-background-hover': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline hover background',
    },
    'outline-background-active': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline active background',
    },
    'outline-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline color',
    },
    'outline-hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline hover color',
    },
    'outline-active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button outline active color',
    },
    'outline-border-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline border color',
    },
    'outline-border-hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline border hover color',
    },
    'outline-border-active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button outline border active color',
    },

  },
  weiss: {
    'text-transform': {
      value: 'none',
      type: 'textTransform',
      description: 'Button text transform',
    },
    'color': {
      value: '{white}',
      type: 'color',
      description: 'Button color',
    },
    'color-hover': {
      value: '{white}',
      type: 'color',
      description: 'Button hover color',
    },
    'color-active': {
      value: '{white}',
      type: 'color',
      description: 'Button active color',
    },
    'background': {
      value: '{primary}',
      type: 'color',
      description: 'Button background color',
    },
    'background-hover': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button hover background color',
    },
    'background-active': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button active background color',
    },
    'inverse-color': {
      value: '{link.reverse-color}',
      type: 'color',
      description: 'Button inverse color',
    },
    'inverse-hover-color': {
      value: '{link.reverse-hover-color}',
      type: 'color',
      description: 'Button inverse hover color',
    },
    'inverse-active-color': {
      value: '{link.reverse-active-color}',
      type: 'color',
      description: 'Button inverse active color',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'fontFamilies',
      description: 'Button font family',
    },
    'font-size': {
      value: '{font-size.sm}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'line-height': {
      value: '{line-height.3}',
      type: 'lineHeights',
      description: 'Button line height',
    },
    'lg-font-size': {
      value: '{font-size.md}',
      type: 'fontSizes',
      description: 'Button font size',
    },
    'font-weight': {
      value: '{font-weight.bold}',
      type: 'fontWeights',
      description: 'Button font weight',
    },
    'border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'lg-border-radius': {
      value: '{border-radius.md}',
      type: 'borderRadius',
      description: 'Button border radius',
    },
    'small-width': {
      value: '{spacing.6}',
      type: 'sizing',
      description: 'Small button width',
    },
    'stroke-width': {
      value: '{border-width.2px}',
      type: 'borderWidth',
      description: 'Button stroke width',
    },
    'outline-offset': {
      value: '{focus.offset}',
      type: 'spacing',
      description: 'Button outline offset',
    },
    'padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'lg-padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Button padding x',
    },
    'lg-padding-y': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Button padding y',
    },
    'margin-right': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Button margin right',
    },
    'icon-size': {
      value: '{spacing.3}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'lg-icon-size': {
      value: '{spacing.4}',
      type: 'sizing',
      description: 'Button icon size',
    },
    'outline-background': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline background',
    },
    'outline-background-hover': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline hover background',
    },
    'outline-background-active': {
      value: '{transparent}',
      type: 'color',
      description: 'Button outline active background',
    },
    'outline-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline color',
    },
    'outline-hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline hover color',
    },
    'outline-active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button outline active color',
    },
    'outline-border-color': {
      value: '{primary}',
      type: 'color',
      description: 'Button outline border color',
    },
    'outline-border-hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Button outline border hover color',
    },
    'outline-border-active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Button outline border active color',
    },

  },
};

export default tokens;