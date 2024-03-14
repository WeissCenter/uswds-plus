import { ThemeTokens } from '../../../../../interfaces/tokens';
export const key = 'error';
const tokens: ThemeTokens = {
  base: {
    lighter: {
      value: '{color.red-warm.vivid.10}',
      type: 'color',
      description: 'Error lighter color',
    },
    light: {
      value: '{color.red-warm.vivid.30}',
      type: 'color',
      description: 'Error light color',
    },
    base: {
      value: '{color.red-warm.vivid.50}',
      type: 'color',
      description: 'Error color',
    },
    dark: {
      value: '{color.red-warm.vivid.60}',
      type: 'color',
      description: 'Error dark color',
    },
    darker: {
      value: '{color.red-warm.vivid.70}',
      type: 'color',
      description: 'Error darker color',
    },
  },
  adapt: {
    lighter: {
      value: '{color.red-warm.10}',
      type: 'color',
      description: 'Error lighter color',
    },
    light: {
      value: '{color.red-warm.vivid.30}',
      type: 'color',
      description: 'Error light color',
    },
    base: {
      value: '{color.red-warm.vivid.50}',
      type: 'color',
      description: 'Error color',
    },
    dark: {
      value: '{color.red.vivid.60}',
      type: 'color',
      description: 'Error dark color',
    },
    darker: {
      value: '{color.red.70}',
      type: 'color',
      description: 'Error darker color',
    },
  },
};

export default tokens;
