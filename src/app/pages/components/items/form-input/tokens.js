"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'input';
// --usa-input-font-family: var(--usa-font-ui);
//     --usa-input-font-size: var(--usa-body-font-size);
//     --usa-input-font-weight: var(--usa-font-weight-normal);
//     --usa-input-line-height: var(--usa-line-height-3);
// --usa-input-letter-spacing: var(--usa-body-font-letter-spacing);
//     --usa-input-height: var(--usa-spacing-5);
//     --usa-input-max-width: var(--usa-spacing-mobile-lg);
//     --usa-input-margin-top: var(--usa-spacing-1);
//     --usa-input-padding-x: var(--usa-spacing-1);
//     --usa-input-padding-y: var(--usa-spacing-05);
//     --usa-input-large-height: var(--usa-spacing-6);
//     --usa-input-border-width: var(--usa-usa-border-width-sm);
//     --usa-input-border-color: var(--usa-base-light);
//     --usa-input-border-color-hover: var(--usa-base);
//     --usa-input-color: var(--usa-ink);
//     --usa-input-placeholder-color: var(--usa-base-light);
//     --usa-input-background-color: var(--usa-body-background);
//     --usa-input-border-radius: var(--usa-border-radius-0);
//     --usa-search-min-width: 27ch;
//     --usa-input-disabled-border-color: var(--usa-disabled-light);
//     --usa-input-disabled-border-color-hover: var(--usa-input-disabled-border-color);
//     --usa-input-disabled-color: var(--usa-disabled);
//     --usa-input-disabled-background-color: var(--usa-disabled-lighter);
// --usa-input-label-font-size: var(--usa-font-size-xs);
// --usa-input-label-font-family: var(--usa-font-ui);
// --usa-input-label-font-weight: var(--usa-font-weight-normal);
// --usa-input-label-color: var(--usa-base-dark);
// --usa-input-label-line-height: var(--usa-line-height-3);
// --usa-input-label-margin-bottom: var(--usa-spacing-05);
// --usa-input-label-margin-top: var(--usa-spacing-1);
// --usa-input-icon-size: var(--usa-spacing-3);
// --usa-input-select-icon: url('#{$assetFilePath}usa-icons/unfold_more.svg');
// --usa-input-select-icon-size: var(--usa-spacing-205);
// --usa-input-select-icon-color: var(--usa-base-light);
var tokens = {
    base: {
        'icon-size': {
            value: '{spacing.3}',
            type: 'sizing',
            description: 'Icon size for input prefix and suffix items',
        },
        'font-family': {
            value: '{font.ui}',
            type: 'fontFamilies',
            description: 'Font family',
        },
        'font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Font size',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Font weight',
        },
        'line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Line height',
        },
        'letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Letter spacing',
        },
        height: {
            value: '{spacing.5}',
            type: 'sizes',
            description: 'Height',
        },
        'select-icon': {
            value: 'url(/assets/usa-icons/unfold_more.svg)',
            type: 'urls',
            description: 'Select icon',
        },
        'select-icon-size': {
            value: '{spacing.205}',
            type: 'sizes',
            description: 'Select size',
        },
        'select-icon-color': {
            value: '{base.light}',
            type: 'colors',
            description: 'Select icon color',
        },
        'max-width': {
            value: '{spacing.mobile-lg}',
            type: 'sizes',
            description: 'Max width',
        },
        'margin-top': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Margin top',
        },
        'padding-x': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Padding x',
        },
        'padding-y': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Padding y',
        },
        'large-height': {
            value: '{spacing.6}',
            type: 'spacing',
            description: 'Large height',
        },
        'border-width': {
            value: '{border-width.sm}',
            type: 'borderWidths',
            description: 'Border width',
        },
        'border-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Border color',
        },
        'border-color-hover': {
            value: '{ink}',
            type: 'colors',
            description: 'Border color hover',
        },
        color: {
            value: '{ink}',
            type: 'colors',
            description: 'Color',
        },
        'placeholder-color': {
            value: '{base}',
            type: 'colors',
            description: 'Placeholder color',
        },
        'background-color': {
            value: '{white}',
            type: 'colors',
            description: 'Background color',
        },
        'border-radius': {
            value: '{border-radius.0}',
            type: 'borderRadius',
            description: 'Border radius',
        },
        'search-min-width': {
            value: '27ch',
            type: 'sizes',
            description: 'Search min width',
        },
        'disabled-border-color': {
            value: '{disabled.light}',
            type: 'colors',
            description: 'Disabled border color',
        },
        'disabled-border-color-hover': {
            value: '{input.disabled-border-color}',
            type: 'colors',
            description: 'Disabled border color hover',
        },
        'disabled-color': {
            value: '{disabled}',
            type: 'colors',
            description: 'Disabled color',
        },
        'disabled-background-color': {
            value: '{disabled.lighter}',
            type: 'colors',
            description: 'Disabled background color',
        },
        'label-font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Label font size',
        },
        'label-font-family': {
            value: '{body-font.family}',
            type: 'fontFamilies',
            description: 'Label font family',
        },
        'label-font-weight': {
            value: '{body-font.weight}',
            type: 'fontWeights',
            description: 'Label font weight',
        },
        'label-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Label color',
        },
        'label-line-height': {
            value: '{body-font.line-height}',
            type: 'lineHeights',
            description: 'Label line height',
        },
        'label-letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Label letter spacing',
        },
        'label-margin-bottom': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Label margin bottom',
        },
        'label-margin-top': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Label margin top',
        }
    },
    adapt: {
        'icon-size': {
            value: '{spacing.3}',
            type: 'sizing',
            description: 'Icon size for input prefix and suffix items',
        },
        'font-family': {
            value: '{font.ui}',
            type: 'fontFamilies',
            description: 'Font family',
        },
        'font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Font size',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Font weight',
        },
        'line-height': {
            value: '{line-height.4}',
            type: 'lineHeights',
            description: 'Line height',
        },
        'letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Letter spacing',
        },
        height: {
            value: '{spacing.5}',
            type: 'sizes',
            description: 'Height',
        },
        'select-icon': {
            value: 'url(/assets/usa-icons/unfold_more.svg)',
            type: 'urls',
            description: 'Select icon',
        },
        'select-icon-size': {
            value: '{spacing.205}',
            type: 'sizes',
            description: 'Select size',
        },
        'select-icon-color': {
            value: '{base.light}',
            type: 'colors',
            description: 'Select icon color',
        },
        'max-width': {
            value: '{spacing.mobile-lg}',
            type: 'sizes',
            description: 'Max width',
        },
        'margin-top': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Margin top',
        },
        'padding-x': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Padding x',
        },
        'padding-y': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Padding y',
        },
        'large-height': {
            value: '{spacing.6}',
            type: 'spacing',
            description: 'Large height',
        },
        'border-width': {
            value: '{border-width.sm}',
            type: 'borderWidths',
            description: 'Border width',
        },
        'border-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Border color',
        },
        'border-color-hover': {
            value: '{ink}',
            type: 'colors',
            description: 'Border color hover',
        },
        color: {
            value: '{ink}',
            type: 'colors',
            description: 'Color',
        },
        'placeholder-color': {
            value: '{base}',
            type: 'colors',
            description: 'Placeholder color',
        },
        'background-color': {
            value: '{white}',
            type: 'colors',
            description: 'Background color',
        },
        'border-radius': {
            value: '{border-radius.0}',
            type: 'borderRadius',
            description: 'Border radius',
        },
        'search-min-width': {
            value: '27ch',
            type: 'sizes',
            description: 'Search min width',
        },
        'disabled-border-color': {
            value: '{disabled.light}',
            type: 'colors',
            description: 'Disabled border color',
        },
        'disabled-border-color-hover': {
            value: '{input.disabled-border-color}',
            type: 'colors',
            description: 'Disabled border color hover',
        },
        'disabled-color': {
            value: '{disabled}',
            type: 'colors',
            description: 'Disabled color',
        },
        'disabled-background-color': {
            value: '{disabled.lighter}',
            type: 'colors',
            description: 'Disabled background color',
        },
        'label-font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Label font size',
        },
        'label-font-family': {
            value: '{body-font.family}',
            type: 'fontFamilies',
            description: 'Label font family',
        },
        'label-font-weight': {
            value: '{body-font.weight}',
            type: 'fontWeights',
            description: 'Label font weight',
        },
        'label-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Label color',
        },
        'label-line-height': {
            value: '{body-font.line-height}',
            type: 'lineHeights',
            description: 'Label line height',
        },
        'label-letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Label letter spacing',
        },
        'label-margin-bottom': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Label margin bottom',
        },
        'label-margin-top': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Label margin top',
        }
    },
    coi: {
        'icon-size': {
            value: '{spacing.3}',
            type: 'sizing',
            description: 'Icon size for input prefix and suffix items',
        },
        'font-family': {
            value: '{font.ui}',
            type: 'fontFamilies',
            description: 'Font family',
        },
        'font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Font size',
        },
        'font-weight': {
            value: '{font-weight.medium}',
            type: 'fontWeights',
            description: 'Font weight',
        },
        'line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Line height',
        },
        'letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Letter spacing',
        },
        height: {
            value: '{spacing.6}',
            type: 'sizes',
            description: 'Height',
        },
        'select-icon': {
            value: 'url(/assets/usa-icons/unfold_more.svg)',
            type: 'urls',
            description: 'Select icon',
        },
        'select-icon-size': {
            value: '{spacing.205}',
            type: 'sizes',
            description: 'Select size',
        },
        'select-icon-color': {
            value: '{base.light}',
            type: 'colors',
            description: 'Select icon color',
        },
        'max-width': {
            value: '{spacing.mobile-lg}',
            type: 'sizes',
            description: 'Max width',
        },
        'margin-top': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Margin top',
        },
        'padding-x': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Padding x',
        },
        'padding-y': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Padding y',
        },
        'large-height': {
            value: '{spacing.7}',
            type: 'sizing',
            description: 'Large height',
        },
        'border-width': {
            value: '{border-width.0}',
            type: 'borderWidths',
            description: 'Border width',
        },
        'border-color': {
            value: '{border-color.base}',
            type: 'colors',
            description: 'Border color',
        },
        'border-color-hover': {
            value: '{border-color.base}',
            type: 'colors',
            description: 'Border color hover',
        },
        color: {
            value: '{black}',
            type: 'colors',
            description: 'Color',
        },
        'placeholder-color': {
            value: '{base.dark}',
            type: 'colors',
            description: 'Placeholder color',
        },
        'background-color': {
            value: '{base.lighter}',
            type: 'colors',
            description: 'Background color',
        },
        'border-radius': {
            value: '{border-radius.md}',
            type: 'borderRadius',
            description: 'Border radius',
        },
        'search-min-width': {
            value: '27ch',
            type: 'sizes',
            description: 'Search min width',
        },
        'disabled-border-color': {
            value: '{disabled.light}',
            type: 'colors',
            description: 'Disabled border color',
        },
        'disabled-border-color-hover': {
            value: '{input.disabled-border-color}',
            type: 'colors',
            description: 'Disabled border color hover',
        },
        'disabled-color': {
            value: '{disabled}',
            type: 'colors',
            description: 'Disabled color',
        },
        'disabled-background-color': {
            value: '{disabled.lighter}',
            type: 'colors',
            description: 'Disabled background color',
        },
        'label-font-size': {
            value: '{font-size.md}',
            type: 'fontSizes',
            description: 'Label font size',
        },
        'label-font-family': {
            value: '{font.ui}',
            type: 'fontFamilies',
            description: 'Label font family',
        },
        'label-font-weight': {
            value: '{font-weight.medium}',
            type: 'fontWeights',
            description: 'Label font weight',
        },
        'label-color': {
            value: '{base.dark}',
            type: 'colors',
            description: 'Label color',
        },
        'label-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Label line height',
        },
        'label-margin-bottom': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Label margin bottom',
        },
        'label-margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Label margin top',
        },
    },
    weiss: {
        'icon-size': {
            value: '{spacing.3}',
            type: 'sizing',
            description: 'Icon size for input prefix and suffix items',
        },
        'font-family': {
            value: '{font.sans}',
            type: 'fontFamilies',
            description: 'Font family',
        },
        'font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Font size',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Font weight',
        },
        'line-height': {
            value: '{line-height.4}',
            type: 'lineHeights',
            description: 'Line height',
        },
        'letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Letter spacing',
        },
        height: {
            value: '{spacing.5}',
            type: 'sizes',
            description: 'Height',
        },
        'select-icon': {
            value: 'url(/assets/usa-icons/unfold_more.svg)',
            type: 'urls',
            description: 'Select icon',
        },
        'select-icon-size': {
            value: '{spacing.205}',
            type: 'sizes',
            description: 'Select size',
        },
        'select-icon-color': {
            value: '{base.light}',
            type: 'colors',
            description: 'Select icon color',
        },
        'max-width': {
            value: '{spacing.mobile-lg}',
            type: 'sizes',
            description: 'Max width',
        },
        'margin-top': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Margin top',
        },
        'padding-x': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Padding x',
        },
        'padding-y': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Padding y',
        },
        'large-height': {
            value: '{spacing.6}',
            type: 'spacing',
            description: 'Large height',
        },
        'border-width': {
            value: '{border-width.1px}',
            type: 'borderWidths',
            description: 'Border width',
        },
        'border-color': {
            value: '{black}',
            type: 'colors',
            description: 'Border color',
        },
        'border-color-hover': {
            value: '{ink}',
            type: 'colors',
            description: 'Border color hover',
        },
        color: {
            value: '{ink}',
            type: 'colors',
            description: 'Color',
        },
        'placeholder-color': {
            value: '{base}',
            type: 'colors',
            description: 'Placeholder color',
        },
        'background-color': {
            value: '{white}',
            type: 'colors',
            description: 'Background color',
        },
        'border-radius': {
            value: '{border-radius.0}',
            type: 'borderRadius',
            description: 'Border radius',
        },
        'search-min-width': {
            value: '27ch',
            type: 'sizes',
            description: 'Search min width',
        },
        'disabled-border-color': {
            value: '{disabled.light}',
            type: 'colors',
            description: 'Disabled border color',
        },
        'disabled-border-color-hover': {
            value: '{input.disabled-border-color}',
            type: 'colors',
            description: 'Disabled border color hover',
        },
        'disabled-color': {
            value: '{disabled}',
            type: 'colors',
            description: 'Disabled color',
        },
        'disabled-background-color': {
            value: '{disabled.lighter}',
            type: 'colors',
            description: 'Disabled background color',
        },
        'label-font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Label font size',
        },
        'label-font-family': {
            value: '{body-font.family}',
            type: 'fontFamilies',
            description: 'Label font family',
        },
        'label-font-weight': {
            value: '{body-font.weight}',
            type: 'fontWeights',
            description: 'Label font weight',
        },
        'label-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Label color',
        },
        'label-line-height': {
            value: '{body-font.line-height}',
            type: 'lineHeights',
            description: 'Label line height',
        },
        'label-letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Label letter spacing',
        },
        'label-margin-bottom': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Label margin bottom',
        },
        'label-margin-top': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Label margin top',
        }
    },
    haystack: {
        'icon-size': {
            value: '{spacing.205}',
            type: 'sizing',
            description: 'Icon size for input prefix and suffix items',
        },
        'font-family': {
            value: '{font.sans}',
            type: 'fontFamilies',
            description: 'Font family',
        },
        'font-size': {
            value: '{body-font.size}',
            type: 'fontSizes',
            description: 'Font size',
        },
        'font-weight': {
            value: '{body-font.weight}',
            type: 'fontWeights',
            description: 'Font weight',
        },
        'line-height': {
            value: '{line-height.4}',
            type: 'lineHeights',
            description: 'Line height',
        },
        'letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Letter spacing',
        },
        height: {
            value: '{spacing.5}',
            type: 'sizes',
            description: 'Height',
        },
        'select-icon': {
            value: 'url(/assets/usa-icons/unfold_more.svg)',
            type: 'urls',
            description: 'Select icon',
        },
        'select-icon-size': {
            value: '{spacing.205}',
            type: 'sizes',
            description: 'Select size',
        },
        'select-icon-color': {
            value: '{base.light}',
            type: 'colors',
            description: 'Select icon color',
        },
        'max-width': {
            value: '{spacing.mobile-lg}',
            type: 'sizes',
            description: 'Max width',
        },
        'margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Margin top',
        },
        'padding-x': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Padding x',
        },
        'padding-y': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Padding y',
        },
        'large-height': {
            value: '{spacing.5}',
            type: 'spacing',
            description: 'Large height',
        },
        'border-width': {
            value: '{border-width.0}',
            type: 'borderWidths',
            description: 'Border width',
        },
        'border-color': {
            value: '{black}',
            type: 'colors',
            description: 'Border color',
        },
        'border-color-hover': {
            value: '{ink}',
            type: 'colors',
            description: 'Border color hover',
        },
        color: {
            value: '{ink}',
            type: 'colors',
            description: 'Color',
        },
        'placeholder-color': {
            value: '{base}',
            type: 'colors',
            description: 'Placeholder color',
        },
        'background-color': {
            value: '{base.darkest}',
            type: 'colors',
            description: 'Background color',
        },
        'border-radius': {
            value: '{border-radius.md}',
            type: 'borderRadius',
            description: 'Border radius',
        },
        'search-min-width': {
            value: '27ch',
            type: 'sizes',
            description: 'Search min width',
        },
        'disabled-border-color': {
            value: '{disabled.light}',
            type: 'colors',
            description: 'Disabled border color',
        },
        'disabled-border-color-hover': {
            value: '{input.disabled-border-color}',
            type: 'colors',
            description: 'Disabled border color hover',
        },
        'disabled-color': {
            value: '{disabled.light}',
            type: 'colors',
            description: 'Disabled color',
        },
        'disabled-background-color': {
            value: '{disabled.dark}',
            type: 'colors',
            description: 'Disabled background color',
        },
        'label-font-size': {
            value: '{font.size.sm}',
            type: 'fontSizes',
            description: 'Label font size',
        },
        'label-font-family': {
            value: '{body-font.family}',
            type: 'fontFamilies',
            description: 'Label font family',
        },
        'label-font-weight': {
            value: '{body-font.weight}',
            type: 'fontWeights',
            description: 'Label font weight',
        },
        'label-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Label color',
        },
        'label-line-height': {
            value: '{body-font.line-height}',
            type: 'lineHeights',
            description: 'Label line height',
        },
        'label-letter-spacing': {
            value: '{body-font.letter-spacing}',
            type: 'letterSpacing',
            description: 'Label letter spacing',
        },
        'label-margin-bottom': {
            value: '{spacing.05}',
            type: 'spacing',
            description: 'Label margin bottom',
        },
        'label-margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Label margin top',
        }
    },
};
exports.default = tokens;
