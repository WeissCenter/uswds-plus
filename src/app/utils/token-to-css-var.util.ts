// token-to-css.util.ts
export type JsonObject = {
  [key: string]: any;
};

// Responsive font size constants
const MIN_MODIFIER = 0.925;
const MAX_MODIFIER = 1.075;
const VIEWPORT_MODIFIER = '.23vw';

// Utility function to join path segments into a CSS variable name
function join(
  globalPrefix: string,
  componentPrefix: string,
  path: string,
  key: string
): string {
  let combinedPath = [globalPrefix, componentPrefix, path, key]
    .filter((p) => p)
    .join('-');
  return combinedPath;
}

// Utility function to convert dot notation token values to CSS variable references
function convertDotNotation(value: string, globalPrefix: string): string {
  if (
    typeof value === 'string' &&
    value.startsWith('{') &&
    value.endsWith('}')
  ) {
    const variableName = value.slice(1, -1).replace(/\./g, '-');
    return `var(--${globalPrefix}-${variableName})`;
  }
  return value; // Return the value unmodified if it's not in dot notation
}

// Main function to convert tokens to CSS variables
export const convertTokensToCssVars = (
  variables: JsonObject,
  globalPrefix: string,
  componentPrefix: string
): string => {
  /**
   * Generates CSS variables based on the provided object.
   *
   * @param path - The path of the current object.
   * @param object - The object containing the token values.
   * @param globalPrefix - The global prefix for the CSS variable names.
   * @param componentPrefix - The component prefix for the CSS variable names.
   * @returns The generated CSS variables as a string.
   */
  const generateVariables = (
    path: string,
    object: JsonObject,
    globalPrefix: string,
    componentPrefix: string
  ): string => {
    let styles = '';
    Object.entries(object).forEach(([key, item]) => {
      const fullPath = join(globalPrefix, componentPrefix, path, key);
      if (item && typeof item === 'object' && 'value' in item) {
        let styleValue = convertDotNotation(item['value'], globalPrefix);

        if ('responsiveFont' in item) {
          // Apply viewport responsive font modifier
          // font-size: clamp( calc( ROOT_SIZE * MIN_MODIFIER * A11Y_MODIFIER ), VIEWPORT_UNIT, calc( ROOT_SIZE * MAX_MODIFIER * A11Y_MODIFIER ) );

          // Incorporate a11y modifier if it exists for this token, otherwise default to 1
          const a11y = 'a11y' in item ? `var(${item['a11y']})` : 1;

          const minSize = `calc(${styleValue} * ${MIN_MODIFIER} * ${a11y})`;
          const maxSize = `calc(${styleValue} * ${MAX_MODIFIER} * ${a11y})`;

          // VIEWPORT_UNIT = MIN_SIZE + VIEWPORT_MODIFIER
          const viewportCalculation = `calc(${minSize} + ${VIEWPORT_MODIFIER})`;

          styleValue = `clamp(${minSize}, ${viewportCalculation}, ${maxSize})`;
        }
        
        if ('a11y' in item && !('responsiveFont' in item)) {
          // Can't apply a11y modifier to responsive font because of the clamp(), so we took care of it earlier

          styleValue = `calc(${styleValue} * var(${item['a11y']}))`; // Apply a11y modifier
        }

        styles += `--${fullPath}: ${styleValue};\n`;
      } else if (typeof item === 'object') {
        // Recursively generate variables for nested objects
        styles += generateVariables(
          fullPath,
          item,
          globalPrefix,
          componentPrefix
        );
      }
    });
    return styles;
  };

  return generateVariables('', variables, globalPrefix, componentPrefix);
};
