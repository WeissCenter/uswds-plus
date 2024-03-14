import {ThemeTokens} from '../../../../interfaces/tokens';

export const key = 'link';

// --usa-link-reverse-active-color: var(--usa-color-global-white);
// --usa-link-visited-color: var(--usa-color-violet-vivid-70);
// --usa-link-reverse-hover-color: var(--usa-base-lightest);
// --usa-link-reverse-color: var(--usa-base-lighter);
// --usa-link-active-color: var(--usa-primary-darker);
// --usa-link-hover-color: var(--usa-primary-dark);
// --usa-link-color: var(--usa-primary-base);
// --usa-link-focus-offset: 0;

const tokens: ThemeTokens = {
  base: {
    'reverse-active-color': {
      value: '{white}',
      type: 'color',
      description: 'Link reverse active color',
    },
    'visited-color': {
      value: '{violet.vivid.70}',
      type: 'color',
      description: 'Link visited color',
    },
    'reverse-hover-color': {
      value: '{base.lightest}',
      type: 'color',
      description: 'Link reverse hover color',
    },
    'reverse-color': {
      value: '{base.lighter}',
      type: 'color',
      description: 'Link reverse color',
    },
    'active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Link active color',
    },
    'hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Link hover color',
    },
    'color': {
      value: '{primary.base}',
      type: 'color',
      description: 'Link color',
    },
    'focus-offset': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Link focus offset',
    },
  },
  weiss: {
    'reverse-active-color': {
      value: '{white}',
      type: 'color',
      description: 'Link reverse active color',
    },
    'visited-color': {
      value: '{violet.vivid.70}',
      type: 'color',
      description: 'Link visited color',
    },
    'reverse-hover-color': {
      value: '{base.lightest}',
      type: 'color',
      description: 'Link reverse hover color',
    },
    'reverse-color': {
      value: '{base.lighter}',
      type: 'color',
      description: 'Link reverse color',
    },
    'active-color': {
      value: '{primary.darker}',
      type: 'color',
      description: 'Link active color',
    },
    'hover-color': {
      value: '{primary.dark}',
      type: 'color',
      description: 'Link hover color',
    },
    'color': {
      value: '{primary.base}',
      type: 'color',
      description: 'Link color',
    },
    'focus-offset': {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Link focus offset',
    },
  },
};

export default tokens
