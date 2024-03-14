// Import the ThemeTokens interface for type checking
import { ThemeTokens } from './src/app/interfaces/tokens';
import { convertTokensToCssVars } from './src/app/utils/token-to-css-var.util';

// Import token files and their keys
import accordion, {
  key as accordionKey,
} from './src/app/pages/components/items/accordion/tokens';
import alert, { key as alertKey } from './src/app/pages/components/items/alert/tokens';
import banner, { key as bannerKey } from './src/app/pages/components/items/banner/tokens';
import button, { key as buttonKey } from './src/app/pages/components/items/button/tokens';
import primaryColor, {
  key as primaryColorKey,
} from './src/app/pages/core/items/colors/primary/tokens';
import accentCool, { key as accentCoolKey } from './src/app/pages/core/items/colors/accent-cool/tokens';
import accentWarm, { key as accentWarmKey } from './src/app/pages/core/items/colors/accent-warm/tokens';
import  fontSizes, { key as fontSizesKey } from './src/app/pages/core/items/fonts/sizes/tokens';
import lineHeights, { key as lineHeightsKey } from './src/app/pages/core/items/fonts/line-height/tokens';
import fontFamilies, { key as fontFamiliesKey } from './src/app/pages/core/items/fonts/families/tokens';
import fontWeights, { key as fontWeightsKey } from './src/app/pages/core/items/fonts/weights/tokens';
import fontBody, { key as fontBodyKey } from './src/app/pages/core/items/fonts/body/tokens';
import fontH1, { key as fontH1Key } from './src/app/pages/core/items/fonts/h1/tokens';
import fontH2, { key as fontH2Key } from './src/app/pages/core/items/fonts/h2/tokens';
import fontH3, { key as fontH3Key } from './src/app/pages/core/items/fonts/h3/tokens';
import fontH4, { key as fontH4Key } from './src/app/pages/core/items/fonts/h4/tokens';
import fontH5, { key as fontH5Key } from './src/app/pages/core/items/fonts/h5/tokens';
import fontH6, { key as fontH6Key } from './src/app/pages/core/items/fonts/h6/tokens';
import letterSpacing, { key as letterSpacingKey } from './src/app/pages/core/items/fonts/letter-spacing/tokens';
import fontLead, { key as fontLeadKey } from './src/app/pages/core/items/fonts/lead/tokens';
import bodyColor, { key as bodyColorKey } from './src/app/pages/core/items/colors/body/tokens';
import table, { key as tableKey } from './src/app/pages/components/items/table/tokens';
import sidenav, { key as sidenavKey } from './src/app/pages/components/items/side-navigation/tokens';
import formInput, { key as formInputKey } from './src/app/pages/components/items/form-input/tokens';
import baseColor, { key as baseColorKey } from './src/app/pages/core/items/colors/base/tokens';
import infoColor, { key as infoColorKey } from './src/app/pages/core/items/colors/info/tokens';
import successColor, { key as successColorKey } from './src/app/pages/core/items/colors/success/tokens';
import warningColor, { key as warningColorKey } from './src/app/pages/core/items/colors/warning/tokens';
import errorColor, { key as errorColorKey } from './src/app/pages/core/items/colors/error/tokens';
import disabledColor, { key as disabledColorKey } from './src/app/pages/core/items/colors/disabled/tokens';
import emergencyColor, { key as emergencyColorKey } from './src/app/pages/core/items/colors/emergency/tokens';
import border, { key as borderKey } from './src/app/pages/core/items/border/tokens';
import radioButton, { key as radioButtonKey } from './src/app/pages/components/items/radio-button/tokens';
import secondaryColor, { key as secondaryColorKey } from './src/app/pages/core/items/colors/secondary/tokens';
import basicColors, { key as basicColorsKey } from './src/app/pages/core/items/colors/basic/tokens';
import spacing, { key as spacingKey } from './src/app/pages/core/items/spacing/tokens';
import focus, { key as focusKey } from './src/app/pages/core/items/focus/tokens';
import breadcrumb, { key as breadcrumbKey } from './src/app/pages/components/items/breadcrumb/tokens';
import modal, { key as modalKey } from './src/app/pages/components/items/modal/tokens';

function aggregateTokens(
  ...tokenSets: { tokens: ThemeTokens; key: string }[]
): { [theme: string]: { [key: string]: any } } {
  const aggregatedTokens: { [theme: string]: { [key: string]: any } } = {};

  tokenSets.forEach(({ tokens, key }) => {
    // Iterate over each theme/category in the tokens object
    Object.keys(tokens).forEach((theme) => {
      if (!aggregatedTokens[theme]) {
        aggregatedTokens[theme] = {};
      }

      // Assuming you want to key by the 'key' (like 'accordion', 'button', etc.)
      // and not overwrite if multiple tokens have the same theme and key.
      aggregatedTokens[theme][key] = tokens[theme];
    });
  });

  return aggregatedTokens;
}

// The actual aggregation based on imported sets and their keys
const aggregatedTokens = aggregateTokens(
  { tokens: accordion, key: accordionKey },
  { tokens: primaryColor, key: primaryColorKey },
  { tokens: accentCool, key: accentCoolKey },
  { tokens: accentWarm, key: accentWarmKey },
  { tokens: alert, key: alertKey },
  { tokens: banner, key: bannerKey },
  { tokens: button, key: buttonKey },
  { tokens: fontSizes, key: fontSizesKey },
  { tokens: lineHeights, key: lineHeightsKey },
  { tokens: fontFamilies, key: fontFamiliesKey },
  { tokens: fontWeights, key: fontWeightsKey },
  { tokens: fontBody, key: fontBodyKey },
  { tokens: fontH1, key: fontH1Key },
  { tokens: fontH2, key: fontH2Key },
  { tokens: fontH3, key: fontH3Key },
  { tokens: fontH4, key: fontH4Key },
  { tokens: fontH5, key: fontH5Key },
  { tokens: fontH6, key: fontH6Key },
  { tokens: letterSpacing, key: letterSpacingKey },
  { tokens: fontLead, key: fontLeadKey },
  { tokens: bodyColor, key: bodyColorKey },
  { tokens: table, key: tableKey },
  { tokens: sidenav, key: sidenavKey },
  { tokens: formInput, key: formInputKey },
  { tokens: baseColor, key: baseColorKey },
  { tokens: infoColor, key: infoColorKey },
  { tokens: successColor, key: successColorKey },
  { tokens: warningColor, key: warningColorKey },
  { tokens: errorColor, key: errorColorKey },
  { tokens: disabledColor, key: disabledColorKey },
  { tokens: emergencyColor, key: emergencyColorKey },
  { tokens: border, key: borderKey },
  { tokens: radioButton, key: radioButtonKey },
  { tokens: secondaryColor, key: secondaryColorKey },
  { tokens: basicColors, key: basicColorsKey },
  { tokens: spacing, key: spacingKey },
  { tokens: focus, key: focusKey },
  { tokens: breadcrumb, key: breadcrumbKey },
  { tokens: modal, key: modalKey }
  // Add more as arguments...
);

// Function to write the aggregated tokens to a TypeScript file
import { writeFileSync } from 'fs';
function writeTokensToFile(
  tokens: { [theme: string]: { [key: string]: any } },
  outputPath: string
): void {
  // Adjust the import path as necessary
  const content =
    `import { ThemeTokens } from './interfaces/tokens';\n\n` +
    `export const aggregatedTokens: { [theme: string]: ThemeTokens } = ${JSON.stringify(
      tokens,
      null,
      2
    )} as const;\n`;
  writeFileSync(outputPath, content, 'utf8');
}

const outputPath = './src/app/aggregated-tokens.ts';
writeTokensToFile(aggregatedTokens, outputPath);

Object.keys(aggregatedTokens).forEach((theme) => {
  const outputPath = `./output/tokens-${theme}.json`;
  // For each theme (as a key on the aggregatedTokens), write tokens to a JSON file
  const content = JSON.stringify(aggregatedTokens[theme], null, 2);
  writeFileSync(outputPath, content, 'utf8');
  // Then, generate CSS variables for each theme
  let cssVariablesString = '';
  Object.keys(aggregatedTokens[theme]).forEach((component) => {
    cssVariablesString += convertTokensToCssVars(
      aggregatedTokens[theme][component],
      'usa',
      component
    );
  })
  const cssContent = `:root {\n${cssVariablesString}\n}`;
  const cssVarsPath = `./output/tokens-${theme
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()}.css`;
  writeFileSync(cssVarsPath, cssContent, 'utf8');
});

