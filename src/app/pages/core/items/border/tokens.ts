import {ThemeTokens} from '../../../../interfaces/tokens';

export const key = 'border';

const tokens: ThemeTokens = {
  base: {
    'radius-0': {
      value: '{sizing.0}',
      type: 'borderRadius',
      description: 'No border radius',
    },
    "radius-sm": {
      value: '{sizing.2px}',
      type: 'borderRadius',
      description: 'Small border radius',
    },
    "radius-md": {
      value: '{sizing.05}',
      type: 'borderRadius',
      description: 'Medium border radius',
    },
    "radius-lg": {
      value: '{sizing.1}',
      type: 'borderRadius',
      description: 'Large border radius',
    },
    "radius-pill": {
      value: '{sizing.tablet}',
      type: 'borderRadius',
      description: 'Pill border radius',
    },
    "color-lighter": {
      value: '{base.lightesr}',
      type: 'color',
      description: 'Border lighter color',
    },
    "color-light": {
      value: '{base.lighter}',
      type: 'color',
      description: 'Border light color',
    },
    "color-base": {
      value: '{base.light}',
      type: 'color',
      description: 'Border color',
    },
    "color-dark": {
      value: '{base}',
      type: 'color',
      description: 'Border dark color',
    },
    "color-darker": {
      value: '{base.dark}',
      type: 'color',
      description: 'Border darker color',
    },
    'width-0': {
      value: '{sizing.0}',
      type: 'borderWidth',
      description: 'No border width',
    },
    "width-sm": {
      value: '{sizing.1px}',
      type: 'borderWidth',
      description: 'Small border width',
    },
    "width-md": {
      value: '{sizing.2px}',
      type: 'borderWidth',
      description: 'Medium border width',
    },
    "width-lg": {
      value: '{sizing.05}',
      type: 'borderWidth',
      description: 'Large border width',
    }
  },
  coi: {
    'radius-0': {
      value: '{sizing.0}',
      type: 'borderRadius',
      description: 'No border radius',
    },
    "radius-sm": {
      value: '{sizing.05}',
      type: 'borderRadius',
      description: 'Small border radius',
    },
    "radius-md": {
      value: '{sizing.1}',
      type: 'borderRadius',
      description: 'Medium border radius',
    },
    "radius-lg": {
      value: '{sizing.2}',
      type: 'borderRadius',
      description: 'Large border radius',
    },
    "radius-pill": {
      value: '{sizing.tablet}',
      type: 'borderRadius',
      description: 'Pill border radius',
    },
    "color-lighter": {
      value: '{base.lightesr}',
      type: 'color',
      description: 'Border lighter color',
    },
    "color-light": {
      value: '{base.lighter}',
      type: 'color',
      description: 'Border light color',
    },
    "color-base": {
      value: '{base.light}',
      type: 'color',
      description: 'Border color',
    },
    "color-dark": {
      value: '{base}',
      type: 'color',
      description: 'Border dark color',
    },
    "color-darker": {
      value: '{base.dark}',
      type: 'color',
      description: 'Border darker color',
    },
    'width-0': {
      value: '{sizing.0}',
      type: 'borderWidth',
      description: 'No border width',
    },
    "width-sm": {
      value: '{sizing.1px}',
      type: 'borderWidth',
      description: 'Small border width',
    },
    "width-md": {
      value: '{sizing.2px}',
      type: 'borderWidth',
      description: 'Medium border width',
    },
    "width-lg": {
      value: '{sizing.05}',
      type: 'borderWidth',
      description: 'Large border width',
    }
  },
};

export default tokens
