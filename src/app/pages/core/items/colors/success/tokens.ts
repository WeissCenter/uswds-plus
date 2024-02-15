import { ThemeTokens } from '../../../../../interfaces/tokens';
export const key = 'success';
const tokens: ThemeTokens = {
  base: {
    lighter: {
      value: '{color.green.cool.5}',
      type: 'color',
      description: 'Success lighter color',
    },
    light: {
      value: '{color.green.cool.vivid.20}',
      type: 'color',
      description: 'Success light color',
    },
    base: {
      value: '{color.green.cool.vivid.40}',
      type: 'color',
      description: 'Success color',
    },
    dark: {
      value: '{color.green.cool.vivid.50}',
      type: 'color',
      description: 'Success dark color',
    },
    darker: {
      value: '{color.green.cool.vivid.60}',
      type: 'color',
      description: 'Success darker color',
    },
  }
};

export default tokens;
