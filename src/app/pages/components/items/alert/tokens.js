"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'alert';
var tokens = {
    base: {
        'bar-width': {
            value: '{sizing.05}',
            type: 'sizing',
            description: 'Alert bar width',
        },
        'bar-color': {
            value: '{base.light}',
            type: 'color',
            description: 'Alert bar color',
        },
        'background-color': {
            value: '{base.lightest}',
            type: 'color',
            description: 'Alert background color',
        },
        'font-family': {
            value: '{font.ui}',
            type: 'fontFamilyies',
            description: 'Alert font family',
        },
        'heading-font-size': {
            value: '{font.size-md}',
            type: 'fontSizes',
            description: 'Alert heading font size',
        },
        'font-size': {
            value: '{font.size-sm}',
            type: 'fontSizes',
            description: 'Alert body font size',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeight',
            description: 'Alert line height',
        },
        'icon-size': {
            value: '{sizing.3}',
            type: 'sizing',
            description: 'Alert icon size',
        },
        'slim-icon-size': {
            value: '{sizing.3}',
            type: 'sizing',
            description: 'Alert icon size',
        },
        'padding-x': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Alert padding-x',
        },
        'padding-y': {
            value: '{spacing.105}',
            type: 'spacing',
            description: 'Alert padding-y',
        },
        'slim-padding-x': {
            value: '{spacing.105}',
            type: 'spacing',
            description: 'Slim alert padding-x',
        },
        'slim-padding-y': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Slim alert padding-y',
        },
        'text-color': {
            value: '{base.ink}',
            type: 'color',
            description: 'Alert text color',
        },
        'icon-color': {
            value: '{base.ink}',
            type: 'color',
            description: 'Alert icon color',
        },
        'link-color': {
            value: '{link.color}',
            type: 'color',
            description: 'Alert link color',
        },
        'max-width': {
            value: '{sizing.tablet}',
            type: 'sizing',
            description: 'Alert max width',
        },
        'border-radius': {
            value: '{border-radius.sm}',
            type: 'borderRadius',
            description: 'Alert border radius',
        },
    },
};
exports.default = tokens;
