import {ThemeTokens} from '../../../../interfaces/tokens';

// --usa-button-outline-background: var(--usa-transparent);
// --usa-button-outline-background-hover: var(--usa-transparent);
// --usa-button-outline-background-active: var(--usa-transparent);
// --usa-button-outline-color: var(--usa-primary);
// --usa-button-outline-hover-color: var(--usa-primary-dark);
// --usa-button-outline-active-color: var(--usa-primary-darker);
// --usa-button-outline-border-color: var(--usa-primary);
// --usa-button-outline-border-hover-color: var(--usa-primary-dark);
// --usa-button-outline-border-active-color: var(--usa-primary-darker);

export const key = 'button';

const tokens: ThemeTokens = {
  base: {
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
  coi: {
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