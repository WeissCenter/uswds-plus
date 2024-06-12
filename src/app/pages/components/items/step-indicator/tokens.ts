import {ThemeTokens} from '../../../../interfaces/token-interface';

// --usa-step-indicator-background-color: var(--usa-body-background);
// --usa-step-indicator-counter-gap: var(--usa-spacing-05);
// --usa-step-indicator-counter-border-width: var(--usa-spacing-05);
// --usa-step-indicator-font-family: var(--usa-font-ui);
// --usa-step-indicator-heading-color: var(--usa-text-color);
// --usa-step-indicator-heading-font-family: var(--usa-font-ui);
// --usa-step-indicator-heading-font-size: var(--usa-font-size-lg);
// --usa-step-indicator-heading-font-size-small: var(--usa-font-size-md);
// --usa-step-indicator-label-font-size: var(--usa-font-size-sm);
// --usa-step-indicator-label-line-height: var(--usa-line-height-2);
// --usa-step-indicator-label-font-weight: var(--usa-font-weight-normal);
// --usa-step-indicator-label-font-weight-current: var(--usa-font-weight-bold);
// --usa-step-indicator-min-width: var(--usa-spacing-tablet);
// --usa-step-indicator-segment-color-pending: var(--usa-base-lighter);
// --usa-step-indicator-segment-color-complete: var(--usa-secondary-darker);
// --usa-step-indicator-segment-color-current: var(--usa-accent-cool-dark);
// --usa-step-indicator-segment-gap: var(--usa-spacing-2px);
// --usa-step-indicator-segment-height: var(--usa-spacing-1);
// --usa-step-indicator-segment-max-width: var(--usa-spacing-card-lg);
// --usa-step-indicator-text-pending-color: var(--usa-base-dark);
// --usa-step-indicator-label-margin-top: var(--usa-spacing-1);
// --usa-step-indicator-margin-bottom: var(--usa-spacing-4);
// --usa-step-indicator-header-margin-top: var(--usa-spacing-4);
// --usa-step-indicator-header-margin-top-sm: var(--usa-spacing-2);
// --usa-step-indicator-segment-height-mobile: var(--usa-spacing-1);
// --usa-step-indicator-counter-size: var(--usa-spacing-5);
// --usa-step-indicator-counter-size-sm: var(--usa-spacing-3);

export const key = 'step-indicator';

const tokens: ThemeTokens = {
  base: {
    'background-color': {
      value: '{body.background}',
      type: 'color',
      description: 'Step indicator background color',
    },
    'counter-gap': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator counter gap',
    },
    'counter-border-width': {
      value: '{spacing.05}',
      type: 'spacing',
      description: 'Step indicator counter border width',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'font',
      description: 'Step indicator font family',
    },
    'heading-color': {
      value: '{text.color}',
      type: 'color',
      description: 'Step indicator heading color',
    },
    'heading-font-family': {
      value: '{font.ui}',
      type: 'font',
      description: 'Step indicator heading font family',
    },
    'heading-font-size': {
      value: '{font.size.lg}',
      type: 'font',
      description: 'Step indicator heading font size',
    },
    'heading-font-size-small': {
      value: '{font.size.md}',
      type: 'font',
      description: 'Step indicator heading font size small',
    },
    'label-font-size': {
      value: '{font.size.sm}',
      type: 'font',
      description: 'Step indicator label font size',
    },
    'label-line-height': {
      value: '{line-height.2}',
      type: 'line-height',
      description: 'Step indicator label line height',
    },
    'label-font-weight': {
      value: '{font.weight.normal}',
      type: 'font',
      description: 'Step indicator label font weight',
    },
    'label-font-weight-current': {
      value: '{font.weight.bold}',
      type: 'font',
      description: 'Step indicator label font weight current',
    },
    'min-width': {
      value: '{spacing.tablet}',
      type: 'spacing',
      description: 'Step indicator min width',
    },
    'segment-color-pending': {
      value: '{base.lighter}',
      type: 'color',
      description: 'Step indicator segment color pending',
    },
    'segment-color-complete': {
      value: '{accent-cool.dark}',
      type: 'color',
      description: 'Step indicator segment color complete',
    },
    'segment-color-current': {
      value: '{secondary.base}',
      type: 'color',
      description: 'Step indicator segment color current',
    },
    'segment-gap': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Step indicator segment gap',
    },
    'segment-height': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator segment height',
    },
    'segment-max-width': {
      value: '{spacing.card-lg}',
      type: 'spacing',
      description: 'Step indicator segment max width',
    },
    'text-pending-color': {
      value: '{base.dark}',
      type: 'color',
      description: 'Step indicator text pending color',
    },
    'label-margin-top': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator label margin top',
    },
    'margin-bottom': {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Step indicator margin bottom',
    },
    'header-margin-top': {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Step indicator header margin top',
    },
    'header-margin-top-sm': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Step indicator header margin top small',
    },
    'segment-height-mobile': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator segment height mobile',
    },
    'counter-size': {
      value: '{spacing.5}',
      type: 'spacing',
      description: 'Step indicator counter size',
    },
    'counter-size-sm': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Step indicator counter size small',
    },  

  },
  adapt: {
    'background-color': {
      value: '{body.background}',
      type: 'color',
      description: 'Step indicator background color',
    },
    'counter-gap': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Step indicator counter gap',
    },
    'counter-border-width': {
      value: '{spacing.05}',
      type: 'spacing',
      description: 'Step indicator counter border width',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'font',
      description: 'Step indicator font family',
    },
    'heading-color': {
      value: '{text.color}',
      type: 'color',
      description: 'Step indicator heading color',
    },
    'heading-font-family': {
      value: '{font.ui}',
      type: 'font',
      description: 'Step indicator heading font family',
    },
    'heading-font-size': {
      value: '{font.size.lg}',
      type: 'font',
      description: 'Step indicator heading font size',
    },
    'heading-font-size-small': {
      value: '{font.size.md}',
      type: 'font',
      description: 'Step indicator heading font size small',
    },
    'label-font-size': {
      value: '{font.size.sm}',
      type: 'font',
      description: 'Step indicator label font size',
    },
    'label-line-height': {
      value: '{line-height.2}',
      type: 'line-height',
      description: 'Step indicator label line height',
    },
    'label-font-weight': {
      value: '{font.weight.normal}',
      type: 'font',
      description: 'Step indicator label font weight',
    },
    'label-font-weight-current': {
      value: '{font.weight.bold}',
      type: 'font',
      description: 'Step indicator label font weight current',
    },
    'min-width': {
      value: '{spacing.tablet}',
      type: 'spacing',
      description: 'Step indicator min width',
    },
    'segment-color-pending': {
      value: '{base.light}',
      type: 'color',
      description: 'Step indicator segment color pending',
    },
    'segment-color-complete': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Step indicator segment color complete',
    },
    'segment-color-current': {
      value: '{primary.base}',
      type: 'color',
      description: 'Step indicator segment color current',
    },
    'segment-gap': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Step indicator segment gap',
    },
    'segment-height': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator segment height',
    },
    'segment-max-width': {
      value: '{spacing.card-lg}',
      type: 'spacing',
      description: 'Step indicator segment max width',
    },
    'text-pending-color': {
      value: '{base.dark}',
      type: 'color',
      description: 'Step indicator text pending color',
    },
    'label-margin-top': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator label margin top',
    },
    'margin-bottom': {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Step indicator margin bottom',
    },
    'header-margin-top': {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Step indicator header margin top',
    },
    'header-margin-top-sm': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Step indicator header margin top small',
    },
    'segment-height-mobile': {
      value: '{spacing.1}',
      type: 'spacing',
      description: 'Step indicator segment height mobile',
    },
    'counter-size': {
      value: '{spacing.5}',
      type: 'spacing',
      description: 'Step indicator counter size',
    },
    'counter-size-sm': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Step indicator counter size small',
    },  

  }
};

export default tokens;