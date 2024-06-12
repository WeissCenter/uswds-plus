export interface ThemeTokens {
    [themeName: string]: {
      [variableName: string]: {
        value: string;
        type: string;
        description: string;
        a11y?: string;
        responsiveFont?: boolean;
      };
    };
  }