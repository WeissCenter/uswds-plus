"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'error';
var tokens = {
    base: {
        lighter: {
            value: '{color.red.warm.vivid.10}',
            type: 'color',
            description: 'Error lighter color',
        },
        light: {
            value: '{color.red.warm.vivid.30}',
            type: 'color',
            description: 'Error light color',
        },
        base: {
            value: '{color.red.warm.vivid.50}',
            type: 'color',
            description: 'Error color',
        },
        dark: {
            value: '{color.red.warm.vivid.60}',
            type: 'color',
            description: 'Error dark color',
        },
        darker: {
            value: '{color.red.warm.vivid.70}',
            type: 'color',
            description: 'Error darker color',
        },
    }
};
exports.default = tokens;
