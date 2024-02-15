"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'warning';
var tokens = {
    base: {
        lighter: {
            value: '{color.yellow.5}',
            type: 'color',
            description: 'Warning lighter color',
        },
        light: {
            value: '{color.yellow.vivid.10}',
            type: 'color',
            description: 'Warning light color',
        },
        base: {
            value: '{color.gold.vivid.20}',
            type: 'color',
            description: 'Warning color',
        },
        dark: {
            value: '{color.gold.vivid.30}',
            type: 'color',
            description: 'Warning dark color',
        },
        darker: {
            value: '{color.gold.vivid.50}',
            type: 'color',
            description: 'Warning darker color',
        },
    }
};
exports.default = tokens;
