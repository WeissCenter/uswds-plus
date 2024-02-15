"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a11y = exports.key = void 0;
exports.key = 'h1-font';
exports.a11y = null;
var tokens = {
    base: {
        size: {
            value: '{font-size.3xl}',
            type: 'fontSizes',
            description: 'H1 font size',
        },
        family: {
            value: '{font.heading}',
            type: 'fontFamilies',
            description: 'H1 font family',
        },
        weight: {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'H1 font weight',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'H1 line height',
        },
        'letter-spacing': {
            value: '{letter-spacing.1}',
            type: 'letterSpacing',
            description: 'H1 letter spacing',
        },
    },
    haystack: {
        size: {
            value: '{font-size.xl}',
            type: 'fontSizes',
            description: 'H1 font size',
        },
        family: {
            value: '{font.mono}',
            type: 'fontFamilies',
            description: 'H1 font family',
        },
        weight: {
            value: '{font-weight.thin}',
            type: 'fontWeights',
            description: 'H1 font weight',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'H1 line height',
        },
        'letter-spacing': {
            value: '{letter-spacing.1}',
            type: 'letterSpacing',
            description: 'H1 letter spacing',
        },
    },
    adapt: {
        size: {
            value: '{font-size.3xl}',
            type: 'fontSizes',
            description: 'H1 font size',
        },
        family: {
            value: '{font.heading}',
            type: 'fontFamilies',
            description: 'H1 font family',
        },
        weight: {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'H1 font weight',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'H1 line height',
        },
        'letter-spacing': {
            value: '{letter-spacing.1}',
            type: 'letterSpacing',
            description: 'H1 letter spacing',
        },
    },
    coi: {
        size: {
            value: '{font-size.2xl}',
            type: 'fontSizes',
            description: 'H1 font size',
        },
        family: {
            value: '{font.heading}',
            type: 'fontFamilies',
            description: 'H1 font family',
        },
        weight: {
            value: '{font-weight.semibold}',
            type: 'fontWeights',
            description: 'H1 font weight',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'H1 line height',
        },
        'letter-spacing': {
            value: '{letter-spacing.1}',
            type: 'letterSpacing',
            description: 'H1 letter spacing',
        },
    },
};
exports.default = tokens;
