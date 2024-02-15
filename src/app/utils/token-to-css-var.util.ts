// token-to-css.util.ts
export type JsonObject = {
    [key: string]: any;
  };

export const a11yModifierTokens = [{ 
  id: 'fontSizes', 
  value: 'a11y-font-size-modifier' 
}, {
  id: 'lineHeight', 
  value: 'a11y-line-height-modifier' 
},
{
  id: 'letterSpacing', 
  value: 'a11y-letter-spacing-modifier'
}
];
  
  // Utility function to join path segments into a CSS variable name
  function join(globalPrefix: string, componentPrefix: string, path: string, key: string): string {
    let combinedPath = [globalPrefix, componentPrefix, path, key].filter(p => p).join('-');
    return combinedPath;
  }
  
  // Utility function to convert dot notation token values to CSS variable references
  function convertDotNotation(value: string, globalPrefix: string): string {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      const variableName = value.slice(1, -1).replace(/\./g, '-');
      return `var(--${globalPrefix}-${variableName})`;
    }
    return value; // Return the value unmodified if it's not in dot notation
  }
  
  // Main function to convert tokens to CSS variables
  export const convertTokensToCssVars = (
    variables: JsonObject,
    globalPrefix: string,
    componentPrefix: string,
    a11yModifier?: string
  ): string => {
    const generateVariables = (
      path: string,
      object: JsonObject,
      globalPrefix: string,
      componentPrefix: string,
      a11y?: string
    ): string => {
      let styles = '';
      Object.entries(object).forEach(([key, item]) => {
        const fullPath = join(globalPrefix, componentPrefix, path, key);
        const a11yModifier = determineA11yModifier(item['type']);
        if (item && typeof item === 'object' && 'value' in item) {
          let styleValue = convertDotNotation(item['value'], globalPrefix);
          if (a11yModifier !== undefined) {
            styleValue = `calc(${styleValue} * var(${a11yModifier}))`; // Apply a11y modifier
          }
          styles += `--${fullPath}: ${styleValue};\n`;
        } else if (typeof item === 'object') {
          // Recursively generate variables for nested objects
          styles += generateVariables(fullPath, item, globalPrefix, componentPrefix, a11y);
        }
      });
      return styles;
    };
  
    return generateVariables('', variables, globalPrefix, componentPrefix, a11yModifier);
  };

  const determineA11yModifier = (key: string) => {
    let a11yModifier = undefined;
    let modify = a11yModifierTokens.find((token) => token.id === key);
    if (modify) {

      a11yModifier = `--${modify.value}`;
    }
    return a11yModifier;
  }
  