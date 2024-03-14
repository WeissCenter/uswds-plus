import { ThemeTokens } from '../../../../../interfaces/tokens';
export const key = 'emergency';
const tokens: ThemeTokens = {
  base: {
    lighter: {
      value: '{color.red.warm.vivid.10}',
      type: 'color',
      description: 'Emergency lighter color',
    },
    light: {
      value: '{color.red.warm.vivid.30}',
      type: 'color',
      description: 'Emergency light color',
    },
    base: {
      value: '{color.red.warm.vivid.60}',
      type: 'color',
      description: 'Emergency color',
    },
    dark: {
      value: '{color.red.warm.80}',
      type: 'color',
      description: 'Emergency dark color',
    },
    darker: {
      value: '{color.red.warm.90}',
      type: 'color',
      description: 'Emergency darker color',
    },
  }
};

export default tokens;
