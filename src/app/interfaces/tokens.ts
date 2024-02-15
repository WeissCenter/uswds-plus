export interface ThemeTokens {
    [themeName: string]: {
      [variableName: string]: {
        value: string;
        type: string;
        description: string;
      };
    };
  }