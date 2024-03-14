import {ThemeTokens} from '../../../../interfaces/tokens';

// --usa-breadcrumb-icon-spacing: var(--usa-spacing-05);
// --usa-breadcrumb-padding-x: var(--usa-spacing-2);
// --usa-breadcrumb-font-weight: var(--usa-font-weight-normal);
// --usa-breadcrumb-icon-height: calc(var(--usa-spacing-2));
// --usa-breadcrumb-gap: calc(var(--usa-spacing-105));
// --usa-breadcrumb-separator-color: var(--usa-base);
// --usa-breadcrumb-padding-bottom: calc(var(--usa-spacing-2));
// --usa-breadcrumb-padding-top: calc(var(--usa-spacing-2));
// --usa-breadcrumb-min-width: calc(var(--usa-spacing-mobile-lg));
// --usa-breadcrumb-link-visited-color: var(--usa-link-visited-color);
// --usa-breadcrumb-line-height: var(--usa-line-height-2);
// --usa-breadcrumb-background: var(--usa-body-background);
// --usa-breadcrumb-link-active-color: var(--usa-link-active-color);
// --usa-breadcrumb-link-hover-color: var(--usa-link-hover-color);
// --usa-breadcrumb-link-color: var(--usa-link-color);
// --usa-breadcrumb-font-size: var(--usa-font-size-sm);
// --usa-breadcrumb-font-family: var(--usa-font-body);

export const key = 'breadcrumb';

const tokens: ThemeTokens = {
  base: {
    'icon-spacing': {
      value: '{spacing.05}',
      type: 'spacing',
      description: 'Breadcrumb icon spacing',
    },
    'padding-x': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Breadcrumb padding x',
    },
    'font-weight': {
      value: '{font-weight.normal}',
      type: 'fontWeights',
      description: 'Breadcrumb font weight',
    },
    'icon-height': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Breadcrumb icon height',
    },
    'gap': {
      value: '{spacing.105}',
      type: 'spacing',
      description: 'Breadcrumb gap',
    },
    'separator-color': {
      value: '{base}',
      type: 'colors',
      description: 'Breadcrumb separator color',
    },
    'padding-bottom': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Breadcrumb padding bottom',
    },
    'padding-top': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Breadcrumb padding top',
    },
    'min-width': {
      value: '{spacing.mobile-lg}',
      type: 'spacing',
      description: 'Breadcrumb min width',
    },
    'link-visited-color': {
      value: '{link-visited-color}',
      type: 'colors',
      description: 'Breadcrumb link visited color',
    },
    'line-height': {
      value: '{line-height.2}',
      type: 'lineHeights',
      description: 'Breadcrumb line height',
    },
    'background': {
      value: '{body-background}',
      type: 'colors',
      description: 'Breadcrumb background',
    },
    'link-active-color': {
      value: '{link-active-color}',
      type: 'colors',
      description: 'Breadcrumb link active color',
    },
    'link-hover-color': {
      value: '{link-hover-color}',
      type: 'colors',
      description: 'Breadcrumb link hover color',
    },
    'link-color': {
      value: '{link-color}',
      type: 'colors',
      description: 'Breadcrumb link color',
    },
    'font-size': {
      value: '{font-size.md}',
      type: 'fontSizes',
      description: 'Breadcrumb font size',
    },
    'font-family': {
      value: '{font.body}',
      type: 'fontFamilies',
      description: 'Breadcrumb font family',
    },


    
  },
};

export default tokens;