"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTokensToCssVars = void 0;
// Responsive font size constants
var MIN_MODIFIER = 0.925;
var MAX_MODIFIER = 1.075;
var VIEWPORT_MODIFIER = '.23vw';
// Utility function to join path segments into a CSS variable name
function join(globalPrefix, componentPrefix, path, key) {
    var combinedPath = [globalPrefix, componentPrefix, path, key]
        .filter(function (p) { return p; })
        .join('-');
    return combinedPath;
}
// Utility function to convert dot notation token values to CSS variable references
function convertDotNotation(value, globalPrefix) {
    if (typeof value === 'string' &&
        value.startsWith('{') &&
        value.endsWith('}')) {
        var variableName = value.slice(1, -1).replace(/\./g, '-');
        return "var(--".concat(globalPrefix, "-").concat(variableName, ")");
    }
    return value; // Return the value unmodified if it's not in dot notation
}
// Main function to convert tokens to CSS variables
var convertTokensToCssVars = function (variables, globalPrefix, componentPrefix) {
    /**
     * Generates CSS variables based on the provided object.
     *
     * @param path - The path of the current object.
     * @param object - The object containing the token values.
     * @param globalPrefix - The global prefix for the CSS variable names.
     * @param componentPrefix - The component prefix for the CSS variable names.
     * @returns The generated CSS variables as a string.
     */
    var generateVariables = function (path, object, globalPrefix, componentPrefix) {
        var styles = '';
        Object.entries(object).forEach(function (_a) {
            var key = _a[0], item = _a[1];
            var fullPath = join(globalPrefix, componentPrefix, path, key);
            if (item && typeof item === 'object' && 'value' in item) {
                var styleValue = convertDotNotation(item['value'], globalPrefix);
                if ('responsiveFont' in item) {
                    // Apply viewport responsive font modifier
                    // font-size: clamp( calc( ROOT_SIZE * MIN_MODIFIER * A11Y_MODIFIER ), VIEWPORT_UNIT, calc( ROOT_SIZE * MAX_MODIFIER * A11Y_MODIFIER ) );
                    // Incorporate a11y modifier if it exists for this token, otherwise default to 1
                    var a11y = 'a11y' in item ? "var(".concat(item['a11y'], ")") : 1;
                    var minSize = "calc(".concat(styleValue, " * ").concat(MIN_MODIFIER, " * ").concat(a11y, ")");
                    var maxSize = "calc(".concat(styleValue, " * ").concat(MAX_MODIFIER, " * ").concat(a11y, ")");
                    // VIEWPORT_UNIT = MIN_SIZE + VIEWPORT_MODIFIER
                    var viewportCalculation = "calc(".concat(minSize, " + ").concat(VIEWPORT_MODIFIER, ")");
                    styleValue = "clamp(".concat(minSize, ", ").concat(viewportCalculation, ", ").concat(maxSize, ")");
                }
                if ('a11y' in item && !('responsiveFont' in item)) {
                    // Can't apply a11y modifier to responsive font because of the clamp(), so we took care of it earlier
                    styleValue = "calc(".concat(styleValue, " * var(").concat(item['a11y'], "))"); // Apply a11y modifier
                }
                styles += "--".concat(fullPath, ": ").concat(styleValue, ";\n");
            }
            else if (typeof item === 'object') {
                // Recursively generate variables for nested objects
                styles += generateVariables(fullPath, item, globalPrefix, componentPrefix);
            }
        });
        return styles;
    };
    return generateVariables('', variables, globalPrefix, componentPrefix);
};
exports.convertTokensToCssVars = convertTokensToCssVars;
