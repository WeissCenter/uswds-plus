"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'body';
var tokens = {
    base: {
        'background': {
            value: '{base.lightest}',
            type: 'color',
            description: 'Body background color',
        },
        ink: {
            value: '{base.darkest}',
            type: 'color',
            description: 'Body text color',
        }
    },
    haystack: {
        'background': {
            value: '{base.darkest}',
            type: 'color',
            description: 'Body background color',
        },
        ink: {
            value: '{base.lightest}',
            type: 'color',
            description: 'Body text color',
        }
    },
    adapt: {
        'background': {
            value: '{white}',
            type: 'color',
            description: 'Body background color',
        },
        ink: {
            value: '{black}',
            type: 'color',
            description: 'Body text color',
        }
    },
    coi: {
        'background': {
            value: '{base.darkest}',
            type: 'color',
            description: 'Body background color',
        },
        ink: {
            value: '{white}',
            type: 'color',
            description: 'Body text color',
        }
    },
};
exports.default = tokens;
