"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_to_css_var_util_1 = require("./src/app/utils/token-to-css-var.util");
// Import token files and their keys
var tokens_1 = require("./src/app/pages/components/items/accordion/tokens");
var tokens_2 = require("./src/app/pages/components/items/alert/tokens");
var tokens_3 = require("./src/app/pages/components/items/banner/tokens");
var tokens_4 = require("./src/app/pages/components/items/button/tokens");
var tokens_5 = require("./src/app/pages/core/items/colors/primary/tokens");
var tokens_6 = require("./src/app/pages/core/items/colors/accent-cool/tokens");
var tokens_7 = require("./src/app/pages/core/items/colors/accent-warm/tokens");
var tokens_8 = require("./src/app/pages/core/items/fonts/sizes/tokens");
var tokens_9 = require("./src/app/pages/core/items/fonts/line-height/tokens");
var tokens_10 = require("./src/app/pages/core/items/fonts/families/tokens");
var tokens_11 = require("./src/app/pages/core/items/fonts/weights/tokens");
var tokens_12 = require("./src/app/pages/core/items/fonts/body/tokens");
var tokens_13 = require("./src/app/pages/core/items/fonts/h1/tokens");
var tokens_14 = require("./src/app/pages/core/items/fonts/h2/tokens");
var tokens_15 = require("./src/app/pages/core/items/fonts/h3/tokens");
var tokens_16 = require("./src/app/pages/core/items/fonts/h4/tokens");
var tokens_17 = require("./src/app/pages/core/items/fonts/h5/tokens");
var tokens_18 = require("./src/app/pages/core/items/fonts/h6/tokens");
var tokens_19 = require("./src/app/pages/core/items/fonts/letter-spacing/tokens");
var tokens_20 = require("./src/app/pages/core/items/fonts/lead/tokens");
var tokens_21 = require("./src/app/pages/core/items/colors/body/tokens");
var tokens_22 = require("./src/app/pages/components/items/table/tokens");
var tokens_23 = require("./src/app/pages/components/items/side-navigation/tokens");
var tokens_24 = require("./src/app/pages/components/items/form-input/tokens");
var tokens_25 = require("./src/app/pages/core/items/colors/base/tokens");
var tokens_26 = require("./src/app/pages/core/items/colors/info/tokens");
var tokens_27 = require("./src/app/pages/core/items/colors/success/tokens");
var tokens_28 = require("./src/app/pages/core/items/colors/warning/tokens");
var tokens_29 = require("./src/app/pages/core/items/colors/error/tokens");
var tokens_30 = require("./src/app/pages/core/items/colors/disabled/tokens");
var tokens_31 = require("./src/app/pages/core/items/colors/emergency/tokens");
var tokens_32 = require("./src/app/pages/core/items/border/tokens");
var tokens_33 = require("./src/app/pages/components/items/radio-button/tokens");
var tokens_34 = require("./src/app/pages/core/items/colors/secondary/tokens");
var tokens_35 = require("./src/app/pages/core/items/colors/basic/tokens");
function aggregateTokens() {
    var tokenSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tokenSets[_i] = arguments[_i];
    }
    var aggregatedTokens = {};
    tokenSets.forEach(function (_a) {
        var tokens = _a.tokens, key = _a.key;
        // Iterate over each theme/category in the tokens object
        Object.keys(tokens).forEach(function (theme) {
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
var aggregatedTokens = aggregateTokens({ tokens: tokens_1.default, key: tokens_1.key }, { tokens: tokens_5.default, key: tokens_5.key }, { tokens: tokens_6.default, key: tokens_6.key }, { tokens: tokens_7.default, key: tokens_7.key }, { tokens: tokens_2.default, key: tokens_2.key }, { tokens: tokens_3.default, key: tokens_3.key }, { tokens: tokens_4.default, key: tokens_4.key }, { tokens: tokens_8.default, key: tokens_8.key }, { tokens: tokens_9.default, key: tokens_9.key }, { tokens: tokens_10.default, key: tokens_10.key }, { tokens: tokens_11.default, key: tokens_11.key }, { tokens: tokens_12.default, key: tokens_12.key }, { tokens: tokens_13.default, key: tokens_13.key }, { tokens: tokens_14.default, key: tokens_14.key }, { tokens: tokens_15.default, key: tokens_15.key }, { tokens: tokens_16.default, key: tokens_16.key }, { tokens: tokens_17.default, key: tokens_17.key }, { tokens: tokens_18.default, key: tokens_18.key }, { tokens: tokens_19.default, key: tokens_19.key }, { tokens: tokens_20.default, key: tokens_20.key }, { tokens: tokens_21.default, key: tokens_21.key }, { tokens: tokens_22.default, key: tokens_22.key }, { tokens: tokens_23.default, key: tokens_23.key }, { tokens: tokens_24.default, key: tokens_24.key }, { tokens: tokens_25.default, key: tokens_25.key }, { tokens: tokens_26.default, key: tokens_26.key }, { tokens: tokens_27.default, key: tokens_27.key }, { tokens: tokens_28.default, key: tokens_28.key }, { tokens: tokens_29.default, key: tokens_29.key }, { tokens: tokens_30.default, key: tokens_30.key }, { tokens: tokens_31.default, key: tokens_31.key }, { tokens: tokens_32.default, key: tokens_32.key }, { tokens: tokens_33.default, key: tokens_33.key }, { tokens: tokens_34.default, key: tokens_34.key }, { tokens: tokens_35.default, key: tokens_35.key }
// Add more as arguments...
);
// Function to write the aggregated tokens to a TypeScript file
var fs_1 = require("fs");
function writeTokensToFile(tokens, outputPath) {
    // Adjust the import path as necessary
    var content = "import { ThemeTokens } from './interfaces/tokens';\n\n" +
        "export const aggregatedTokens: { [theme: string]: ThemeTokens } = ".concat(JSON.stringify(tokens, null, 2), " as const;\n");
    (0, fs_1.writeFileSync)(outputPath, content, 'utf8');
}
var outputPath = './src/app/aggregated-tokens.ts';
writeTokensToFile(aggregatedTokens, outputPath);
Object.keys(aggregatedTokens).forEach(function (theme) {
    var outputPath = "./output/tokens-".concat(theme, ".json");
    // For each theme (as a key on the aggregatedTokens), write tokens to a JSON file
    var content = JSON.stringify(aggregatedTokens[theme], null, 2);
    (0, fs_1.writeFileSync)(outputPath, content, 'utf8');
    // Then, generate CSS variables for each theme
    var cssVariablesString = '';
    Object.keys(aggregatedTokens[theme]).forEach(function (component) {
        cssVariablesString += (0, token_to_css_var_util_1.convertTokensToCssVars)(aggregatedTokens[theme][component], 'usa', component);
    });
    var cssContent = ":root {\n".concat(cssVariablesString, "\n}");
    var cssVarsPath = "./output/tokens-".concat(theme
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase(), ".css");
    (0, fs_1.writeFileSync)(cssVarsPath, cssContent, 'utf8');
});
