import {ThemeTokens} from '../../../../interfaces/tokens';

export const key = 'banner';

const tokens: ThemeTokens = {
  base: {
    background: {
      value: '{base.lightest}',
      type: 'color',
      description: 'Banner background color',
    },
    'font-family': {
      value: '{font.ui}',
      type: 'fontFamilies',
      description: 'Banner font family',
    },
    'font-size': {
      value: '{font.size-3xs}',
      type: 'fontSizes',
      description: 'Banner header font size',
    },
    'content-font-size': {
      value: '{font.size-xs}',
      type: 'fontSizes',
      description: 'Banner content font size',
    },
    'line-height': {
      value: '{line-height.4}',
      type: 'lineHeight',
      description: 'Banner line height',
    },
    'font-weight': {
      value: '{font.weight-normal}',
      type: 'fontWeights',
      description: 'Banner font weight',
    },
    'link-color': {
      value: '{link.color}',
      type: 'color',
      description: 'Banner link color',
    },
    'text-color': {
      value: '{ink}',
      type: 'color',
      description: 'Banner text color',
    },
    'max-width': {
      value: '{spacing.desktop}',
      type: 'sizing',
      description: 'Banner max width',
    },
    'content-padding-y': {
      value: '{spacing.2}',
      type: 'sizing',
      description: 'Banner content vertical padding',
    },
    'content-padding-x': {
      value: '{spacing.205}',
      type: 'sizing',
      description: 'Banner content horizontal padding',
    },
  },
};

export default tokens;