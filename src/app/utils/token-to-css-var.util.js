"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTokensToCssVars = exports.a11yModifierTokens = void 0;
exports.a11yModifierTokens = [{
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
function join(globalPrefix, componentPrefix, path, key) {
    var combinedPath = [globalPrefix, componentPrefix, path, key].filter(function (p) { return p; }).join('-');
    return combinedPath;
}
// Utility function to convert dot notation token values to CSS variable references
function convertDotNotation(value, globalPrefix) {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        var variableName = value.slice(1, -1).replace(/\./g, '-');
        return "var(--".concat(globalPrefix, "-").concat(variableName, ")");
    }
    return value; // Return the value unmodified if it's not in dot notation
}
// Main function to convert tokens to CSS variables
var convertTokensToCssVars = function (variables, globalPrefix, componentPrefix, a11yModifier) {
    var generateVariables = function (path, object, globalPrefix, componentPrefix, a11y) {
        var styles = '';
        Object.entries(object).forEach(function (_a) {
            var key = _a[0], item = _a[1];
            var fullPath = join(globalPrefix, componentPrefix, path, key);
            var a11yModifier = determineA11yModifier(item['type']);
            if (item && typeof item === 'object' && 'value' in item) {
                var styleValue = convertDotNotation(item['value'], globalPrefix);
                if (a11yModifier !== undefined) {
                    styleValue = "calc(".concat(styleValue, " * var(").concat(a11yModifier, "))"); // Apply a11y modifier
                }
                styles += "--".concat(fullPath, ": ").concat(styleValue, ";\n");
            }
            else if (typeof item === 'object') {
                // Recursively generate variables for nested objects
                styles += generateVariables(fullPath, item, globalPrefix, componentPrefix, a11y);
            }
        });
        return styles;
    };
    return generateVariables('', variables, globalPrefix, componentPrefix, a11yModifier);
};
exports.convertTokensToCssVars = convertTokensToCssVars;
var determineA11yModifier = function (key) {
    var a11yModifier = undefined;
    var modify = exports.a11yModifierTokens.find(function (token) { return token.id === key; });
    if (modify) {
        a11yModifier = "--".concat(modify.value);
    }
    return a11yModifier;
};
