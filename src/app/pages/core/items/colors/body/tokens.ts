import { ThemeTokens } from '../../../../../interfaces/token-interface';
export const key = 'body';
const tokens: ThemeTokens = {
  base: {
    'background': {
        value: '{base.lightest}',
        type: 'color',
        description: 'Body background color',
    },
    ink: {
        value: '{base.darkest}',
        type: 'color',
        description: 'Body text color',
    }
  },
  haystack: {
    'background': {
        value: '{base.darkest}',
        type: 'color',
        description: 'Body background color',
    },
    ink: {
        value: '{base.lightest}',
        type: 'color',
        description: 'Body text color',
    }
  },
  adapt: {
    'background': {
        value: '{color-gray.2}',
        type: 'color',
        description: 'Body background color',
    },
    ink: {
        value: '{base.darkest}',
        type: 'color',
        description: 'Body text color',
    }
  },
  weiss: {
    'background': {
        value: '{color-gray.2}',
        type: 'color',
        description: 'Body background color',
    },
    ink: {
        value: '{base.darkest}',
        type: 'color',
        description: 'Body text color',
    }
  },
  coi: {
    'background': {
        value: '{base.darkest}',
        type: 'color',
        description: 'Body background color',
    },
    ink: {
        value: '{white}',
        type: 'color',
        description: 'Body text color',
    }
  },
};

export default tokens;
