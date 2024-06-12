import {ThemeTokens} from '../../../../interfaces/token-interface';

export const key = 'modal';

// --usa-modal-background-color: var(--usa-color-global-white);
// --usa-modal-footer-margin-top: var(--usa-spacing-3);
// --usa-modal-close-icon-hover-color: var(--usa-base-darkest);
// --usa-modal-close-icon-color: var(--usa-base-base);
// --usa-modal-close-icon-size: var(--usa-spacing-3);
// --usa-modal-lg-max-width: var(--usa-spacing-tablet);
// --usa-modal-lg-content-max-width: var(--usa-spacing-tablet-lg);
// --usa-modal-default-max-width: var(--usa-spacing-mobile-lg);
// --usa-modal-large-padding-x: var(--usa-spacing-4);
// --usa-modal-large-padding-y: var(--usa-spacing-3);
// --usa-modal-padding-x: var(--usa-spacing-205);
// --usa-modal-padding-y: var(--usa-spacing-2);
// --usa-modal-border-width: var(--usa-spacing-05);
// --usa-modal-border-color: var(--usa-base-lighter);
// --usa-modal-text-color: var(--usa-text-color);
// --usa-modal-border-radius: var(--usa-border-radius-lg);
// --usa-modal-overlay-background-color: var(--usa-color-black-transparent-70);
// 

const tokens: ThemeTokens = {
  base: {
    'background-color': {
      value: '{white}',
      type: 'colors',
      description: 'Modal background color',
    },
    'footer-margin-top': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Modal footer margin top',
    },
    'close-icon-hover-color': {
      value: '{base.darkest}',
      type: 'colors',
      description: 'Modal close icon hover color',
    },
    'close-icon-color': {
      value: '{base}',
      type: 'colors',
      description: 'Modal close icon color',
    },
    'close-icon-size': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Modal close icon size',
    },
    'lg-max-width': {
      value: '{spacing.tablet}',
      type: 'spacing',
      description: 'Modal large max width',
    },
    'lg-content-max-width': {
      value: '{spacing.tablet-lg}',
      type: 'spacing',
      description: 'Modal large content max width',
    },
    'default-max-width': {
      value: '{spacing.mobile-lg}',
      type: 'spacing',
      description: 'Modal default max width',
    },
    'large-padding-x': {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Modal large padding x',
    },
    'large-padding-y': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Modal large padding y',
    },
    'padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Modal padding x',
    },
    'padding-y': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Modal padding y',
    },
    'border-width': {
      value: '{spacing.05}',
      type: 'spacing',
      description: 'Modal border width',
    },
    'border-color': {
      value: '{base.lighter}',
      type: 'colors',
      description: 'Modal border color',
    },
    'text-color': {
      value: '{ink}',
      type: 'colors',
      description: 'Modal text color',
    },
    'border-radius': {
      value: '{border-radius.lg}',
      type: 'spacing',
      description: 'Modal border radius',
    },
    'overlay-background-color': {
      value: '{color.black.transparent.70}',
      type: 'colors',
      description: 'Modal overlay background color',
    },
  },
  weiss: {
    'background-color': {
      value: '{accent-cool.base}',
      type: 'colors',
      description: 'Modal background color',
    },
    'footer-margin-top': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Modal footer margin top',
    },
    'close-icon-hover-color': {
      value: '{white}',
      type: 'colors',
      description: 'Modal close icon hover color',
    },
    'close-icon-color': {
      value: '{white}',
      type: 'colors',
      description: 'Modal close icon color',
    },
    'close-icon-size': {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Modal close icon size',
    },
    'lg-max-width': {
      value: '{spacing.widescreen}',
      type: 'spacing',
      description: 'Modal large max width',
    },
    'lg-content-max-width': {
      value: '{spacing.widescreen}',
      type: 'spacing',
      description: 'Modal large content max width',
    },
    'default-max-width': {
      value: '{spacing.tablet-lg}',
      type: 'spacing',
      description: 'Modal default max width',
    },
    'large-padding-x': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Modal large padding x',
    },
    'large-padding-y': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Modal large padding y',
    },
    'padding-x': {
      value: '{spacing.205}',
      type: 'spacing',
      description: 'Modal padding x',
    },
    'padding-y': {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Modal padding y',
    },
    'border-width': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Modal border width',
    },
    'border-color': {
      value: '{base.lighter}',
      type: 'colors',
      description: 'Modal border color',
    },
    'text-color': {
      value: '{ink}',
      type: 'colors',
      description: 'Modal text color',
    },
    'border-radius': {
      value: '{border.radius.lg}',
      type: 'spacing',
      description: 'Modal border radius',
    },
    'overlay-background-color': {
      value: '{color.black.transparent.70}',
      type: 'colors',
      description: 'Modal overlay background color',
    },
  },
};

export default tokens;