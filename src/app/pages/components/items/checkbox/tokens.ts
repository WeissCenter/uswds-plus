import { ThemeTokens } from '../../../../interfaces/token-interface';

export const key = 'checkbox';

// --usa-checkbox-size: var(--usa-spacing-205);
// --usa-checkbox-vertical-offset: var(--usa-spacing-2px);
// --usa-checkbox-gap: var(--usa-spacing-1);
// --usa-checkbox-margin-top: var(--usa-spacing-05);
// --usa-checkbox-background-color: var(--usa-input-background-color);
// --usa-checkbox-label-color: var(--usa-ink);
// --usa-checkbox-border-color: var(--usa-border-color-base);
// --usa-checkbox-border-width: var(--usa-input-border-width);
// --usa-checkbox-border-radius: var(--usa-input-border-radius);
// --usa-checkbox-box-shadow: 0 0 0 var(--usa-checkbox-border-width) var(--usa-checkbox-border-color);
// --usa-checkbox-checked-background-color: var(--usa-primary);
// --usa-checkbox-checked-border-color: var(--usa-primary);
// --usa-checkbox-checked-box-shadow: 0 0 0 var(--usa-checkbox-border-width) var(--usa-checkbox-checked-background-color);
// --usa-checkbox-focus-border-color: var(--usa-input-focus-border-color);
// --usa-checkbox-focus-border-width: var(--usa-input-focus-border-width);
// --usa-checkbox-focus-box-shadow: var(--usa-input-focus-box-shadow);
// --usa-checkbox-disabled-background-color: var(--usa-input-disabled-background-color);
// --usa-checkbox-disabled-border-color: var(--usa-input-disabled-border-color);
// --usa-checkbox-disabled-box-shadow: 0 0 0 var(--usa-checkbox-border-width) var(--usa-checkbox-disabled-border-color);
// --usa-checkbox-disabled-color: var(--usa-input-disabled-color);
// --usa-checkbox-tile-padding-y: var(--usa-spacing-2);
// --usa-checkbox-tile-padding-x: var(--usa-spacing-2);
// --usa-checkbox-tile-background-color: var(--usa-checkbox-background-color);
// --usa-checkbox-tile-label-color: var(--usa-checkbox-label-color);
// --usa-checkbox-tile-border-radius: var(--usa-input-border-radius);
// --usa-checkbox-tile-border-color: var(--usa-checkbox-border-color);
// --usa-checkbox-tile-border-width: var(--usa-checkbox-border-width);
// --usa-checkbox-tile-checked-background-color: var(--usa-primary-lightest);
// --usa-checkbox-tile-checked-border-color: var(--usa-checkbox-checked-border-color);
// --usa-checkbox-check-icon: url('#{$assetFilePath}usa-icons/check.svg');
// --usa-checkbox-check-icon-color: var(--usa-white);
// --usa-checkbox-check-icon-size: var(--usa-spacing-2);

const tokens: ThemeTokens = {
  base: {
    'size': {
      value: '{spacing.205}',
      type: 'size',
      description: 'Size of checkbox itself',
    },
    'vertical-offset': {
      value: '{spacing.2px}',
      type: 'size',
      description: 'Checkbox vertical offset',
    },
    'gap': {
      value: '{spacing.1}',
      type: 'size',
      description: 'Gap between checkbox and label',
    },
    'margin-top': {
      value: '{spacing.05}',
      type: 'size',
      description: 'Margin top of checkbox',
    },
    'background-color': {
      value: '{input.background-color}',
      type: 'color',
      description: 'Checkbox background color',
    },
    'label-color': {
      value: '{ink}',
      type: 'color',
      description: 'Checkbox label color',
    },
    'border-color': {
      value: '{border.color.base}',
      type: 'color',
      description: 'Checkbox border color',
    },
    'border-width': {
      value: '{input.border-width}',
      type: 'size',
      description: 'Checkbox border width',
    },
    'border-radius': {
      value: '{input.border-radius}',
      type: 'size',
      description: 'Checkbox border radius',
    },
    'box-shadow': {
      value: 'none',
      type: 'shadow',
      description: 'Checkbox box shadow',
    },
    'checked-background-color': {
      value: '{primary}',
      type: 'color',
      description: 'Checkbox checked background color',
    },
    'checked-border-color': {
      value: '{primary}',
      type: 'color',
      description: 'Checkbox checked border color',
    },
    'checked-box-shadow': {
      value: 'none',
      type: 'shadow',
      description: 'Checkbox checked box shadow',
    },
    'focus-border-color': {
      value: '{input.focus-border-color}',
      type: 'color',
      description: 'Checkbox focus border color',
    },
    'focus-border-width': {
      value: '{input.focus-border-width}',
      type: 'size',
      description: 'Checkbox focus border width',
    },
    'focus-box-shadow': {
      value: '{input.focus-box-shadow}',
      type: 'shadow',
      description: 'Checkbox focus box shadow',
    },
    'disabled-background-color': {
      value: '{input.disabled-background-color}',
      type: 'color',
      description: 'Checkbox disabled background color',
    },
    'disabled-border-color': {
      value: '{input.disabled-border-color}',
      type: 'color',
      description: 'Checkbox disabled border color',
    },
    'disabled-box-shadow': {
      value: 'none',
      type: 'shadow',
      description: 'Checkbox disabled box shadow',
    },
    'disabled-color': {
      value: '{input.disabled-color}',
      type: 'color',
      description: 'Checkbox disabled color',
    },
    'tile-padding-y': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Checkbox tile padding y',
    },
    'tile-padding-x': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Checkbox tile padding x',
    },
    'tile-background-color': {
      value: '{checkbox.background-color}',
      type: 'color',
      description: 'Checkbox tile background color',
    },
    'tile-label-color': {
      value: '{checkbox.label-color}',
      type: 'color',
      description: 'Checkbox tile label color',
    },
    'tile-border-radius': {
      value: '{input.border-radius}',
      type: 'size',
      description: 'Checkbox tile border radius',
    },
    'tile-border-color': {
      value: '{checkbox.border-color}',
      type: 'color',
      description: 'Checkbox tile border color',
    },
    'tile-border-width': {
      value: '{checkbox.border-width}',
      type: 'size',
      description: 'Checkbox tile border width',
    },
    'tile-checked-background-color': {
      value: '{primary.lightest}',
      type: 'color',
      description: 'Checkbox tile checked background color',
    },
    'tile-checked-border-color': {
      value: '{checkbox.checked-border-color}',
      type: 'color',
      description: 'Checkbox tile checked border color',
    },
    'check-icon': {
      value: 'url(/assets/usa-icons/check.svg)',
      type: 'image',
      description: 'Checkbox check icon',
    },
    'check-icon-color': {
      value: '{white}',
      type: 'color',
      description: 'Checkbox check icon color',
    },
    'check-icon-size': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Checkbox check icon size',
    }
  },
  haystack: {
    'size': {
      value: '{spacing.205}',
      type: 'size',
      description: 'Size of checkbox itself',
    },
    'vertical-offset': {
      value: '{spacing.2px}',
      type: 'size',
      description: 'Checkbox vertical offset',
    },
    'gap': {
      value: '{spacing.1}',
      type: 'size',
      description: 'Gap between checkbox and label',
    },
    'margin-top': {
      value: '{spacing.0}',
      type: 'size',
      description: 'Margin top of checkbox',
    },
    'background-color': {
      value: '{input.background-color}',
      type: 'color',
      description: 'Checkbox background color',
    },
    'label-color': {
      value: '{ink}',
      type: 'color',
      description: 'Checkbox label color',
    },
    'border-color': {
      value: '{input.background-color}',
      type: 'color',
      description: 'Checkbox border color',
    },
    'border-width': {
      value: '{input.border-width}',
      type: 'size',
      description: 'Checkbox border width',
    },
    'border-radius': {
      value: '{input.border-radius}',
      type: 'size',
      description: 'Checkbox border radius',
    },
    'box-shadow': {
      value: 'none',
      type: 'shadow',
      description: 'Checkbox box shadow',
    },
    'checked-background-color': {
      value: '{primary.light}',
      type: 'color',
      description: 'Checkbox checked background color',
    },
    'checked-border-color': {
      value: '{primary.light}',
      type: 'color',
      description: 'Checkbox checked border color',
    },
    'checked-box-shadow': {
      value: 'none',
      type: 'shadow',
      description: 'Checkbox checked box shadow',
    },
    'focus-border-color': {
      value: '{input.focus-border-color}',
      type: 'color',
      description: 'Checkbox focus border color',
    },
    'focus-border-width': {
      value: '{input.focus-border-width}',
      type: 'size',
      description: 'Checkbox focus border width',
    },
    'focus-box-shadow': {
      value: '{input.focus-box-shadow}',
      type: 'shadow',
      description: 'Checkbox focus box shadow',
    },
    'disabled-background-color': {
      value: '{input.disabled-background-color}',
      type: 'color',
      description: 'Checkbox disabled background color',
    },
    'disabled-border-color': {
      value: '{input.disabled-border-color}',
      type: 'color',
      description: 'Checkbox disabled border color',
    },
    'disabled-box-shadow': {
      value: 'none',
      type: 'shadow',
      description: 'Checkbox disabled box shadow',
    },
    'disabled-color': {
      value: '{input.disabled-color}',
      type: 'color',
      description: 'Checkbox disabled color',
    },
    'tile-padding-y': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Checkbox tile padding y',
    },
    'tile-padding-x': {
      value: '{spacing.2}',
      type: 'size',
      description: 'Checkbox tile padding x',
    },
    'tile-background-color': {
      value: '{checkbox.background-color}',
      type: 'color',
      description: 'Checkbox tile background color',
    },
    'tile-label-color': {
      value: '{checkbox.label-color}',
      type: 'color',
      description: 'Checkbox tile label color',
    },
    'tile-border-radius': {
      value: '{input.border-radius}',
      type: 'size',
      description: 'Checkbox tile border radius',
    },
    'tile-border-color': {
      value: '{checkbox.border-color}',
      type: 'color',
      description: 'Checkbox tile border color',
    },
    'tile-border-width': {
      value: '{checkbox.border-width}',
      type: 'size',
      description: 'Checkbox tile border width',
    },
    'tile-checked-background-color': {
      value: '{primary.lightest}',
      type: 'color',
      description: 'Checkbox tile checked background color',
    },
    'tile-checked-border-color': {
      value: '{checkbox.checked-border-color}',
      type: 'color',
      description: 'Checkbox tile checked border color',
    },
    'check-icon': {
      value: 'url(/assets/check.svg)',
      type: 'image',
      description: 'Checkbox check icon',
    },
    'check-icon-color': {
      value: '{black}',
      type: 'color',
      description: 'Checkbox check icon color',
    },
    'check-icon-size': {
      value: '{spacing.105}',
      type: 'size',
      description: 'Checkbox check icon size',
    }
  }
};

export default tokens;
