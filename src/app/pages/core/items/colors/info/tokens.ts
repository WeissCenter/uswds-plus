import { ThemeTokens } from '../../../../../interfaces/tokens';
export const key = 'info';
const tokens: ThemeTokens = {
  base: {
    lighter: {
      value: '{color.cyan.vivid.5}',
      type: 'color',
      description: 'Info lighter color',
    },
    light: {
      value: '{color.cyan.vivid.20}',
      type: 'color',
      description: 'Info light color',
    },
    base: {
      value: '{color.cyan.vivid.30}',
      type: 'color',
      description: 'Info color',
    },
    dark: {
      value: '{color.cyan.vivid.40}',
      type: 'color',
      description: 'Info dark color',
    },
    darker: {
      value: '{color.cyan.vivid.60}',
      type: 'color',
      description: 'Info darker color',
    },
  },
  adapt: {
    lighter: {
      value: '{color.cyan.5}',
      type: 'color',
      description: 'Info lighter color',
    },
    light: {
      value: '{color.cyan.20}',
      type: 'color',
      description: 'Info light color',
    },
    base: {
      value: '{color.cyan.vivid.30}',
      type: 'color',
      description: 'Info color',
    },
    dark: {
      value: '{color.cyan.vivid.40}',
      type: 'color',
      description: 'Info dark color',
    },
    darker: {
      value: '{color.blue-cool.60}',
      type: 'color',
      description: 'Info darker color',
    },
  },
  weiss: {
    lighter: {
      value: '#E9F6FC',
      type: 'color',
      description: 'Info lighter color',
    },
    light: {
      value: '#C2E7F7',
      type: 'color',
      description: 'Info light color',
    },
    base: {
      value: '#0D538C',
      type: 'color',
      description: 'Info color',
    },
    dark: {
      value: '{color.cyan.vivid.40}',
      type: 'color',
      description: 'Info dark color',
    },
    darker: {
      value: '{color.blue-cool.60}',
      type: 'color',
      description: 'Info darker color',
    },
  }
};

export default tokens;
