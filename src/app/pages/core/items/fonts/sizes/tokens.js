"use strict";
// Fluid typography formula
// PREFERRED_SIZE = ((DESIGN_SIZE - MIN_SIZE) / (MAX_VIEWPORT_WIDTH - MIN_VIEWPORT_WIDTH)) * 100vw + MIN_SIZE
Object.defineProperty(exports, "__esModule", { value: true });
exports.a11y = exports.key = void 0;
exports.key = 'font-size';
exports.a11y = '--a11y-font-size-modifier';
var tokens = {
    base: {
        '3xs': {
            value: '14px',
            type: 'fontSizes',
            description: 'Smallest font size',
        },
        '2xs': {
            value: '15px',
            type: 'fontSizes',
            description: 'Second smallest font size',
        },
        xs: {
            value: '16px',
            type: 'fontSizes',
            description: 'Extra small font size',
        },
        sm: {
            value: '17px',
            type: 'fontSizes',
            description: 'Small font size',
        },
        md: {
            value: '18px',
            type: 'fontSizes',
            description: 'Medium font size',
        },
        lg: {
            value: '24px',
            type: 'fontSizes',
            description: 'Large font size',
        },
        xl: {
            value: '34px',
            type: 'fontSizes',
            description: 'Extra large font size',
        },
        '2xl': {
            value: '43px',
            type: 'fontSizes',
            description: 'Second largest font size',
        },
        '3xl': {
            value: '51px',
            type: 'fontSizes',
            description: 'Largest font size',
        }
    },
    haystack: {
        '3xs': {
            value: '12px',
            type: 'fontSizes',
            description: 'Smallest font size',
        },
        '2xs': {
            value: '13px',
            type: 'fontSizes',
            description: 'Second smallest font size',
        },
        xs: {
            value: '14px',
            type: 'fontSizes',
            description: 'Extra small font size',
        },
        sm: {
            value: '15px',
            type: 'fontSizes',
            description: 'Small font size',
        },
        md: {
            value: '16px',
            type: 'fontSizes',
            description: 'Medium font size',
        },
        lg: {
            value: '20px',
            type: 'fontSizes',
            description: 'Large font size',
        },
        xl: {
            value: '24px',
            type: 'fontSizes',
            description: 'Extra large font size',
        },
        '2xl': {
            value: '32px',
            type: 'fontSizes',
            description: 'Second largest font size',
        },
        '3xl': {
            value: '44px',
            type: 'fontSizes',
            description: 'Largest font size',
        }
    },
    adapt: {
        '3xs': {
            value: '15px',
            type: 'fontSizes',
            description: 'Smallest font size',
        },
        '2xs': {
            value: '16px',
            type: 'fontSizes',
            description: 'Second smallest font size',
        },
        xs: {
            value: '17px',
            type: 'fontSizes',
            description: 'Extra small font size',
        },
        sm: {
            value: '18px',
            type: 'fontSizes',
            description: 'Small font size',
        },
        md: {
            value: '20px',
            type: 'fontSizes',
            description: 'Medium font size',
        },
        lg: {
            value: '28px',
            type: 'fontSizes',
            description: 'Large font size',
        },
        xl: {
            value: '34px',
            type: 'fontSizes',
            description: 'Extra large font size',
        },
        '2xl': {
            value: '43px',
            type: 'fontSizes',
            description: 'Second largest font size',
        },
        '3xl': {
            value: '51px',
            type: 'fontSizes',
            description: 'Largest font size',
        }
    },
    coi: {
        '3xs': {
            value: '14px',
            type: 'fontSizes',
            description: 'Smallest font size',
        },
        '2xs': {
            value: '14px',
            type: 'fontSizes',
            description: 'Second smallest font size',
        },
        xs: {
            value: '15px',
            type: 'fontSizes',
            description: 'Extra small font size',
        },
        sm: {
            value: '16px',
            type: 'fontSizes',
            description: 'Small font size',
        },
        md: {
            value: '18px',
            type: 'fontSizes',
            description: 'Medium font size',
        },
        lg: {
            value: '24px',
            type: 'fontSizes',
            description: 'Large font size',
        },
        xl: {
            value: '36px',
            type: 'fontSizes',
            description: 'Extra large font size',
        },
        '2xl': {
            value: '48px',
            type: 'fontSizes',
            description: 'Second largest font size',
        },
        '3xl': {
            value: '56px',
            type: 'fontSizes',
            description: 'Largest font size',
        }
    },
};
exports.default = tokens;
