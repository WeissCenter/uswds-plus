"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'focus';
// --usa-focus-offset: var(--usa-spacing-05);
// --usa-focus-width: var(--usa-spacing-05);
// --usa-focus-style: solid;
// --usa-focus-color: var(--usa-color-blue-vivid-40);
var tokens = {
    base: {
        'offset': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Focus offset',
        },
        'width': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Focus width',
        },
        'style': {
            value: 'solid',
            type: 'borderStyles',
            description: 'Focus style',
        },
        'color': {
            value: '{color.blue.vivid.40}',
            type: 'colors',
            description: 'Focus color',
        },
    },
    adapt: {
        'offset': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Focus offset',
        },
        'width': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Focus width',
        },
        'style': {
            value: 'solid',
            type: 'borderStyles',
            description: 'Focus style',
        },
        'color': {
            value: '{color.mint.vivid.30}',
            type: 'colors',
            description: 'Focus color',
        },
    },
};
exports.default = tokens;
