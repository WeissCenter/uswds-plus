import { ThemeTokens } from '../../../../interfaces/tokens';

export const key = 'radio';

// --usa-radio-size: var(--usa-sizing-205);
//     --usa-radio-background-color: var(--usa-input-background-color);
//     --usa-radio-label-color: var(--usa-ink);
//     --usa-radio-border-color: var(--usa-input-border-color);
//     --usa-radio-border-width: var(--usa-input-border-width);
//     --usa-radio-border-radius: var(--usa-border-radius-pill);
//     --usa-radio-checked-background-color: var(--usa-primary);
//     --usa-radio-checked-border-color: var(--usa-primary);
//     --usa-radio-focus-border-color: var(--usa-input-focus-border-color);
//     --usa-radio-focus-border-width: var(--usa-input-focus-border-width);
//     --usa-radio-focus-box-shadow: var(--usa-input-focus-box-shadow);
//     --usa-radio-disabled-background-color: var(--usa-input-disabled-background-color);
//     --usa-radio-disabled-border-color: var(--usa-input-disabled-border-color);
//     --usa-radio-disabled-color: var(--usa-input-disabled-color);
//     --usa-radio-tile-padding-y: var(--usa-spacing-2);
//     --usa-radio-tile-background-color: var(--usa-radio-background-color);
//     --usa-radio-tile-label-color: var(--usa-radio-label-color);
//     --usa-radio-tile-border-radius: var(--usa-input-border-radius);
//     --usa-radio-tile-border-color: var(--usa-radio-border-color);
//     --usa-radio-tile-border-width: var(--usa-radio-border-width);
//     --usa-radio-tile-checked-background-color: var(--usa-primary-lightest);
//     --usa-radio-tile-checked-border-color: var(--usa-radio-checked-border-color);

const tokens: ThemeTokens = {
  base: {
    'size': {
      value: '{sizing.205}',
      type: 'size',
      description: 'Radio button size',
    },
    'background-color': {
      value: '{input.background-color}',
      type: 'color',
      description: 'Radio button background color',
    },
    'label-color': {
      value: '{ink}',
      type: 'color',
      description: 'Radio button label color',
    },
    'border-color': {
      value: '{input.border-color}',
      type: 'color',
      description: 'Radio button border color',
    },
    'border-width': {
      value: '{input.border-width}',
      type: 'size',
      description: 'Radio button border width',
    },
    'border-radius': {
      value: '{border-radius.pill}',
      type: 'size',
      description: 'Radio button border radius',
    },
    'checked-background-color': {
      value: '{primary}',
      type: 'color',
      description: 'Radio button checked background color',
    },
    'checked-border-color': {
      value: '{primary}',
      type: 'color',
      description: 'Radio button checked border color',
    },
    'focus-border-color': {
      value: '{input.focus-border-color}',
      type: 'color',
      description: 'Radio button focus border color',
    },
    'focus-border-width': {
      value: '{input.focus-border-width}',
      type: 'size',
      description: 'Radio button focus border width',
    },
    'disabled-background-color': {
      value: '{input.disabled-background-color}',
      type: 'color',
      description: 'Radio button disabled background color',
    },  
    'disabled-border-color': {
      value: '{input.disabled-border-color}',
      type: 'color',
      description: 'Radio button disabled border color',
    },
    'disabled-color': {
      value: '{input.disabled-color}',
      type: 'color',
      description: 'Radio button disabled color',
    },
    'tile-padding-y': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Radio button tile padding y',
    },
    'tile-background-color': {
      value: '{radio.background-color}',
      type: 'color',
      description: 'Radio button tile background color',
    },
    'tile-label-color': {
      value: '{radio.label-color}',
      type: 'color',
      description: 'Radio button tile label color',
    },
    'tile-border-radius': {
      value: '{input.border-radius}',
      type: 'size',
      description: 'Radio button tile border radius',
    },
    'tile-border-color': {
      value: '{radio.border-color}',
      type: 'color',
      description: 'Radio button tile border color',
    },
    'tile-border-width': {
      value: '{radio.border-width}',
      type: 'size',
      description: 'Radio button tile border width',
    },
    'tile-checked-background-color': {
      value: '{primary.lightest}',
      type: 'color',
      description: 'Radio button tile checked background color',
    },
    'tile-checked-border-color': {
      value: '{radio.checked-border-color}',
      type: 'color',
      description: 'Radio button tile checked border color',
    }

  },
  coi: {
    'size': {
      value: '{sizing.205}',
      type: 'size',
      description: 'Radio button size',
    },
    'background-color': {
      value: '{body.background-color}',
      type: 'color',
      description: 'Radio button background color',
    },
    'label-color': {
      value: '{ink}',
      type: 'color',
      description: 'Radio button label color',
    },
    'border-color': {
      value: '{base.dark}',
      type: 'color',
      description: 'Radio button border color',
    },
    'border-width': {
      value: '{border-width.sm}',
      type: 'size',
      description: 'Radio button border width',
    },
    'border-radius': {
      value: '{border-radius.pill}',
      type: 'size',
      description: 'Radio button border radius',
    },
    'checked-background-color': {
      value: '{secondary}',
      type: 'color',
      description: 'Radio button checked background color',
    },
    'checked-border-color': {
      value: '{secondary}',
      type: 'color',
      description: 'Radio button checked border color',
    },
    'focus-border-color': {
      value: '{input.focus-border-color}',
      type: 'color',
      description: 'Radio button focus border color',
    },
    'focus-border-width': {
      value: '{input.focus-border-width}',
      type: 'size',
      description: 'Radio button focus border width',
    },
    'disabled-background-color': {
      value: '{input.disabled-background-color}',
      type: 'color',
      description: 'Radio button disabled background color',
    },  
    'disabled-border-color': {
      value: '{input.disabled-border-color}',
      type: 'color',
      description: 'Radio button disabled border color',
    },
    'disabled-color': {
      value: '{input.disabled-color}',
      type: 'color',
      description: 'Radio button disabled color',
    },
    'tile-padding-y': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Radio button tile padding y',
    },
    'tile-background-color': {
      value: '{radio.background-color}',
      type: 'color',
      description: 'Radio button tile background color',
    },
    'tile-label-color': {
      value: '{radio.label-color}',
      type: 'color',
      description: 'Radio button tile label color',
    },
    'tile-border-radius': {
      value: '{input.border-radius}',
      type: 'size',
      description: 'Radio button tile border radius',
    },
    'tile-border-color': {
      value: '{radio.border-color}',
      type: 'color',
      description: 'Radio button tile border color',
    },
    'tile-border-width': {
      value: '{radio.border-width}',
      type: 'size',
      description: 'Radio button tile border width',
    },
    'tile-checked-background-color': {
      value: '{primary.lightest}',
      type: 'color',
      description: 'Radio button tile checked background color',
    },
    'tile-checked-border-color': {
      value: '{radio.checked-border-color}',
      type: 'color',
      description: 'Radio button tile checked border color',
    }

  },
};

export default tokens;
