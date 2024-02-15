"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
// --usa-black: black;
// --usa-white: white;
// --usa-red: #e52207;
// --usa-red-warm: var(--usa-red-warm-40);
// --usa-orange-warm: var(--usa-orange-warm-40);
// --usa-orange: #e66f0e;
// --usa-gold: #ffbe2e;
// --usa-yellow: #fee685;
// --usa-green-warm: var(--usa-green-warm-40);
// --usa-green: #538200;
// --usa-green-cool: var(--usa-green-cool-40);
// --usa-mint: #04c585;
// --usa-mint-cool: var(--usa-mint-cool-40);
// --usa-cyan: #009ec1;
// --usa-blue: #0076d6;
// --usa-blue-warm: var(--usa-blue-warm-40);
// --usa-indigo-cool: var(--usa-indigo-cool-40);
// --usa-indigo: #676cc8;
// --usa-indigo-warm: var(--usa-indigo-warm-40);
// --usa-violet: #8168b3;
// --usa-violet-warm: var(--usa-violet-warm-40);
// --usa-magenta: #d72d79;
// --usa-gray-cool: var(--usa-gray-cool-40);
// --usa-gray: gray;
exports.key = 'color';
var tokens = {
    base: {
        black: {
            value: 'black',
            type: 'color',
            description: 'Black',
        },
        white: {
            value: 'white',
            type: 'color',
            description: 'White',
        },
        red: {
            value: '#e52207',
            type: 'color',
            description: 'Red',
        },
        'red-warm': {
            value: '{color.red-warm.40}',
            type: 'color',
            description: 'Red warm',
        },
        orange: {
            value: '#e66f0e',
            type: 'color',
            description: 'Orange',
        },
        "orange-warm": {
            value: '{color.orange-warm.40}',
            type: 'color',
            description: 'Orange warm',
        },
        gold: {
            value: '#ffbe2e',
            type: 'color',
            description: 'Gold',
        },
        yellow: {
            value: '#fee685',
            type: 'color',
            description: 'Yellow',
        },
        "green-warm": {
            value: '{color.green-warm.40}',
            type: 'color',
            description: 'Green warm',
        },
        green: {
            value: '#538200',
            type: 'color',
            description: 'Green',
        },
        "green-cool": {
            value: '{color.green-cool.40}',
            type: 'color',
            description: 'Green cool',
        },
        mint: {
            value: '#04c585',
            type: 'color',
            description: 'Mint',
        },
        "mint-cool": {
            value: '{color.mint-cool.40}',
            type: 'color',
            description: 'Mint cool',
        },
        cyan: {
            value: '#009ec1',
            type: 'color',
            description: 'Cyan',
        },
        blue: {
            value: '#0076d6',
            type: 'color',
            description: 'Blue',
        },
        "blue-warm": {
            value: '{color.blue-warm.40}',
            type: 'color',
            description: 'Blue warm',
        },
        "indigo-cool": {
            value: '{color.indigo-cool.40}',
            type: 'color',
            description: 'Indigo cool',
        },
        indigo: {
            value: '#676cc8',
            type: 'color',
            description: 'Indigo',
        },
        "indigo-warm": {
            value: '{color.indigo-warm.40}',
            type: 'color',
            description: 'Indigo warm',
        },
        violet: {
            value: '#8168b3',
            type: 'color',
            description: 'Violet',
        },
        "violet-warm": {
            value: '{color.violet-warm.40}',
            type: 'color',
            description: 'Violet warm',
        },
        magenta: {
            value: '#d72d79',
            type: 'color',
            description: 'Magenta',
        },
        "gray-cool": {
            value: '{color.gray-cool.40}',
            type: 'color',
            description: 'Gray cool',
        },
        gray: {
            value: 'gray',
            type: 'color',
            description: 'Gray',
        },
    },
};
exports.default = tokens;
