import { Injectable } from '@angular/core';
import { convertTokensToCssVars } from '../utils/token-to-css-var.util';

export type JsonObject = {
  [key: string]: any;
};

export type TokenObject = {
  [key: string]: {
    value: string;
    type?: string;
    description?: string;
  };
};

/**
 * Service for converting tokens to CSS variables.
 */
@Injectable({
  providedIn: 'root',
})
export class TokenToCssService {
  constructor() {}

  /**
   * Converts tokens to CSS variables.
   * @param variables - The tokens to convert, either as a JSON object or a string.
   * @param globalPrefix - The global prefix for the CSS variables.
   * @param componentPrefix - The component prefix for the CSS variables.
   * @returns The generated CSS variables as a string.
   */
  cssVars(
    variables: JsonObject | string,
    globalPrefix: string,
    componentPrefix: string,
    a11y?: string
  ) {
    const variablesObject: JsonObject =
      typeof variables === 'string' ? JSON.parse(variables) : variables;
      return convertTokensToCssVars(variablesObject, globalPrefix, componentPrefix, a11y);

  }

  /**
   * Recursively generates CSS variables from tokens.
   * @param path - The current path in the token hierarchy.
   * @param object - The current token object.
   * @param globalPrefix - The global prefix for the CSS variables.
   * @param componentPrefix - The component prefix for the CSS variables.
   * @returns The generated CSS variables as a string.
   */
  generateVariables(
    path: string,
    object: JsonObject,
    globalPrefix: string,
    componentPrefix: string,
    a11y?: string
  ): string {
    let styles = '';
    Object.entries(object).forEach(([key, item]) => {
      const fullPath = this.join(globalPrefix, componentPrefix, path, key);
      if (item && typeof item === 'object' && 'value' in item) {
        // Generate CSS variable only for the 'value' property
        // Capture style string and then check for a11y modifier
        let style = this.convertDotNotation(
          item['value'],
          globalPrefix
        );
        if (a11y) {
          style = `calc((${style}) * var(${a11y}))`;
        }
        styles += `--${fullPath}: ` + style + ';\n';
      } else if (typeof item === 'object') {
        styles += this.generateVariables(
          fullPath,
          item,
          globalPrefix,
          componentPrefix,
          a11y
        );
      }
    });
    return styles;
  }

  /**
   * Joins the path segments to create a CSS variable name.
   * @param globalPrefix - The global prefix for the CSS variables.
   * @param componentPrefix - The component prefix for the CSS variables.
   * @param path - The current path in the token hierarchy.
   * @param key - The current token key.
   * @returns The combined CSS variable name.
   */
  join(
    globalPrefix: string,
    componentPrefix: string,
    path: string,
    key: string
  ): string {
    let combinedPath = [globalPrefix, componentPrefix, path, key]
      .filter((p) => p)
      .join('-');
    if (key === '__default') {
      // Remove the last segment (__default)
      combinedPath = combinedPath.split('-').slice(0, -1).join('-');
    }
    return combinedPath;
  }

  /**
   * Converts a dot notation token value to a CSS variable reference.
   * @param value - The token value to convert.
   * @param globalPrefix - The global prefix for the CSS variables.
   * @returns The converted CSS variable reference.
   */
  convertDotNotation(
    value: string | number,
    globalPrefix: string
  ): string | number {
    if (
      typeof value === 'string' &&
      value.startsWith('{') &&
      value.endsWith('}')
    ) {
      // Convert dot notation to CSS variable reference
      const variableName = value.slice(1, -1).replace(/\./g, '-');
      return `var(--${globalPrefix}-${variableName})`;
    }
    return value;
  }

  /**
   * Parses a CSS string and extracts CSS variables and their values.
   *
   * @param cssString The CSS string to parse.
   * @returns An array of objects containing the name and value of each CSS variable.
   */
  parseCssVariables(cssString: string) {
    const cssVars: { name: any; value: any }[] = [];
    const cssDeclarations = cssString.split(';');

    cssDeclarations.forEach((declaration: string) => {
      const trimmedDeclaration = declaration.trim();
      if (trimmedDeclaration.startsWith('--')) {
        const [name, value] = trimmedDeclaration
          .split(':')
          .map((s: string) => s.trim());
        cssVars.push({ name, value });
      }
    });

    return cssVars;
  }

   /**
   * Generates CSS from a form value object.
   * @param formValue - The form value object containing token values.
   * @param globalPrefix - The global prefix for the CSS variables.
   * @param componentPrefix - The component prefix for the CSS variables.
   * @returns The generated CSS string.
   */
   generateCssFromFormValue(
    formValue: JsonObject,
    globalPrefix: string,
    componentPrefix: string,
    a11y?: string
  ): string {
    const tokenObject: JsonObject = {};

    Object.entries(formValue).forEach(([key, value]) => {
      // Construct token object with 'value' property
      tokenObject[key] = { value };
    });

    return this.cssVars(tokenObject, globalPrefix, componentPrefix, a11y);
  }


   /**
   * Generates a new token object with values from the form.
   * @param defaultTokenObj - The default token object with types and descriptions.
   * @param formValues - The form values to update the default token object.
   * @returns An updated token object.
   */
   generateTokenObjectWithFormValues(
    defaultTokenObj: TokenObject,
    formValues: { [key: string]: string }
  ): TokenObject {
    const updatedTokenObj: TokenObject = {};

    for (const key in defaultTokenObj) {
      if (defaultTokenObj.hasOwnProperty(key)) {
        updatedTokenObj[key] = {
          ...defaultTokenObj[key],
          value: formValues[key] || defaultTokenObj[key].value,
        };
      }
    }

    return updatedTokenObj;
  }


  injectCssStyleTag(cssVariables: string, cssId: string): void {
    let styleTag = document.getElementById(cssId) as HTMLStyleElement;

    // If the style tag doesn't exist, create and append it
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = cssId; // Assign the unique ID
      document.head.appendChild(styleTag);
    }

    // Update the content of the style tag
    styleTag.innerHTML = `:root { ${cssVariables} }`;
  }

}
