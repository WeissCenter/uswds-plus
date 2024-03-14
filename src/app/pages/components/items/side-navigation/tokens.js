"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
//     --usa-sidenav-item-font-size: var(--usa-font-size-sm);
//     --usa-sidenav-item-font-family: var(--usa-font-sans);
//     --usa-sidenav-item-font-weight: var(--usa-font-weight-normal);
//     --usa-sidenav-item-font-weight-current: var(--usa-font-weight-bold);
//     --usa-sidenav-item-line-height: var(--usa-line-height-3);
//     --usa-sidenav-item-text-align: left;
//     --usa-sidenav-sublist-font-size: var(--usa-font-size-2xs);
//     --usa-sidenav-sublist-font-weight: var(--usa-sidenav-item-font-weight);
//     --usa-sidenav-sublist-font-weight-current: var(--usa-sidenav-item-font-weight-current);
//     --usa-sidenav-sublist-line-height: var(--usa-sidenav-item-line-height);
//     --usa-sidenav-sublist-font-family: var( --usa-sidenav-item-font-family);
//     --usa-sidenav-item-background: var(--usa-body-background);
//     --usa-sidenav-item-background-hover: var(--usa-base-lighter);
//     --usa-sidenav-item-background-current: var(--usa-sidenav-item-background);
//     --usa-sidenav-sublist-background: var(--usa-sidenav-item-background);
//     --usa-sidenav-sublist-background-hover: var(--usa-sidenav-item-background-hover);
//     --usa-sidenav-sublist-background-current: var(--usa-sidenav-item-background-current);
// --usa-sidenav-border-width: var(--usa-border-width-2px);
// --usa-sidenav-border-color: var(--usa-base-light);
// --usa-sidenav-border-radius: var(--usa-border-radius-sm);
// --usa-sidenav-item-border-color: var(--usa-border-color-base-lighter);
// --usa-sidenav-item-border-width: var(--usa-border-width-1px);
// --usa-sidenav-sublist-border-color: var(--usa-sidenav-item-border-color);
// --usa-sidenav-sublist-border-width: var(--usa-sidenav-item-border-width);
//     --usa-sidenav-item-padding-x: var(--usa-spacing-2);
//     --usa-sidenav-item-padding-y: var(--usa-spacing-1);
//     --usa-sidenav-item-margin-bottom: var(--usa-spacing-0);
//     --usa-sidenav-item-margin-top: var(--usa-spacing-0);
//     --usa-sidenav-item-color: var(--usa-ink);
//     --usa-sidenav-item-color-hover: var(--usa-primary);
//     --usa-sidenav-item-color-current: var(--usa-primary);
//     --usa-sidenav-item-text-decoration: none;
//     --usa-sidenav-sublist-item-color: var(--usa-sidenav-item-color);
//     --usa-sidenav-sublist-item-color-hover: var(--usa-sidenav-item-color-hover);
//     --usa-sidenav-sublist-item-color-current: var(--usa-sidenav-item-color-current);
//     --usa-sidenav-sublist-item-text-decoration: var(--usa-sidenav-item-text-decoration);
//     --usa-sidenav-item-focus-outline-offset: 0;
//     --usa-sidenav-item-current-indicator-color: var(--usa-primary);
//     --usa-sidenav-item-current-indicator-border-radius: var(--usa-border-radius-pill);
//     --usa-sidenav-item-current-indicator-width: var(--usa-sizing-05);
//     --usa-sidenav-item-current-indicator-position: 0;
//     --usa-sidenav-child-padding-left: var(--usa-spacing-4);
//     --usa-sidenav-child-padding-multiplier: 2;
// Expected CSS vars after generation
exports.key = 'sidenav';
var tokens = {
    base: {
        'item-font-size': {
            value: '{font-size.md}',
            type: 'fontSizes',
            description: 'Side navigation item font size',
        },
        'item-font-family': {
            value: '{font.sans}',
            type: 'fontFamilies',
            description: 'Side navigation item font family',
        },
        'item-font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Side navigation item font weight',
        },
        'item-font-weight-current': {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'Side navigation item font weight current',
        },
        'item-line-height': {
            value: '{line-height.4}',
            type: 'lineHeights',
            description: 'Side navigation item line height',
        },
        'item-text-align': {
            value: 'left',
            type: 'textAlign',
            description: 'Side navigation item text align',
        },
        'sublist-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Side navigation sublist font size',
        },
        'sublist-font-weight': {
            value: '{sidenav.item-font-weight}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight',
        },
        'sublist-font-weight-current': {
            value: '{sidenav.item-font-weight-current}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight current',
        },
        'sublist-line-height': {
            value: '{sidenav.item-line-height}',
            type: 'lineHeights',
            description: 'Side navigation sublist line height',
        },
        'sublist-font-family': {
            value: '{sidenav.item-font-family}',
            type: 'fontFamilies',
            description: 'Side navigation sublist font family',
        },
        'item-background': {
            value: '{white}',
            type: 'colors',
            description: 'Side navigation item background',
        },
        'item-background-hover': {
            value: '{white}',
            type: 'colors',
            description: 'Side navigation item background hover',
        },
        'item-background-current': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation item background current',
        },
        'sublist-background': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation sublist background',
        },
        'sublist-background-hover': {
            value: '{sidenav.item-background-hover}',
            type: 'colors',
            description: 'Side navigation sublist background hover',
        },
        'sublist-background-current': {
            value: '{sidenav.item-background-current}',
            type: 'colors',
            description: 'Side navigation sublist background current',
        },
        'border-color': {
            value: '{base.lighter}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'border-width': {
            value: '{border-width.sm}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'border-radius': {
            value: '{border-radius.sm}',
            type: 'borderRadius',
            description: 'Side navigation item border radius',
        },
        'item-border-color': {
            value: '{base.lightest}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'item-border-width': {
            value: '{border-width.1px}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'sublist-border-color': {
            value: '{sidenav.item-border-color}',
            type: 'colors',
            description: 'Side navigation sublist border color',
        },
        'sublist-border-width': {
            value: '{sidenav.item-border-width}',
            type: 'borderWidths',
            description: 'Side navigation sublist border width',
        },
        'item-padding-x': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Side navigation item padding x',
        },
        'item-padding-y': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Side navigation item padding y',
        },
        'item-margin-bottom': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin bottom',
        },
        'item-margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin top',
        },
        'item-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Side navigation item color',
        },
        'item-color-hover': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item color hover',
        },
        'item-color-current': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item color current',
        },
        'item-text-decoration': {
            value: 'none',
            type: 'textDecoration',
            description: 'Side navigation item text decoration',
        },
        'sublist-item-color': {
            value: '{sidenav.item-color}',
            type: 'colors',
            description: 'Side navigation sublist item color',
        },
        'sublist-item-color-hover': {
            value: '{sidenav.item-color-hover}',
            type: 'colors',
            description: 'Side navigation sublist item color hover',
        },
        'sublist-item-color-current': {
            value: '{sidenav.item-color-current}',
            type: 'colors',
            description: 'Side navigation sublist item color current',
        },
        'sublist-item-text-decoration': {
            value: '{sidenav.item-text-decoration}',
            type: 'textDecoration',
            description: 'Side navigation sublist item text decoration',
        },
        'item-focus-outline-offset': {
            value: '0',
            type: 'spacing',
            description: 'Side navigation item focus outline offset',
        },
        'item-current-indicator-color': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item current indicator color',
        },
        'item-current-indicator-border-radius': {
            value: '{border-radius.pill}',
            type: 'borderRadius',
            description: 'Side navigation item current indicator border radius',
        },
        'item-current-indicator-width': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Side navigation item current indicator width',
        },
        'item-current-indicator-position': {
            value: '2%',
            type: 'spacing',
            description: 'Side navigation item current indicator position. 0 is left, 100% is right.',
        },
        'child-padding-left': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-right': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-multiplier': {
            value: '2',
            type: 'spacing',
            description: 'Side navigation child padding left multiplier',
        },
    },
    adapt: {
        'item-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Side navigation item font size',
        },
        'item-font-family': {
            value: '{font.sans}',
            type: 'fontFamilies',
            description: 'Side navigation item font family',
        },
        'item-font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Side navigation item font weight',
        },
        'item-font-weight-current': {
            value: '{font-weight.semibold}',
            type: 'fontWeights',
            description: 'Side navigation item font weight current',
        },
        'item-line-height': {
            value: '{line-height.4}',
            type: 'lineHeights',
            description: 'Side navigation item line height',
        },
        'item-text-align': {
            value: 'left',
            type: 'textAlign',
            description: 'Side navigation item text align',
        },
        'sublist-font-size': {
            value: '{sidenav.item-font-size}',
            type: 'fontSizes',
            description: 'Side navigation sublist font size',
        },
        'sublist-font-weight': {
            value: '{sidenav.item-font-weight}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight',
        },
        'sublist-font-weight-current': {
            value: '{sidenav.item-font-weight-current}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight current',
        },
        'sublist-line-height': {
            value: '{sidenav.item-line-height}',
            type: 'lineHeights',
            description: 'Side navigation sublist line height',
        },
        'sublist-font-family': {
            value: '{sidenav.item-font-family}',
            type: 'fontFamilies',
            description: 'Side navigation sublist font family',
        },
        'item-background': {
            value: '{white}',
            type: 'colors',
            description: 'Side navigation item background',
        },
        'item-background-hover': {
            value: '{primary.lightest}',
            type: 'colors',
            description: 'Side navigation item background hover',
        },
        'item-background-current': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation item background current',
        },
        'sublist-background': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation sublist background',
        },
        'sublist-background-hover': {
            value: '{sidenav.item-background-hover}',
            type: 'colors',
            description: 'Side navigation sublist background hover',
        },
        'sublist-background-current': {
            value: '{sidenav.item-background-current}',
            type: 'colors',
            description: 'Side navigation sublist background current',
        },
        'border-color': {
            value: '{base.lighter}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'border-width': {
            value: '{border-width.md}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'border-radius': {
            value: '{border-radius.lg}',
            type: 'borderRadius',
            description: 'Side navigation item border radius',
        },
        'item-border-color': {
            value: '{base.lighter}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'item-border-width': {
            value: '{border-width.1px}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'sublist-border-color': {
            value: '{sidenav.item-border-color}',
            type: 'colors',
            description: 'Side navigation sublist border color',
        },
        'sublist-border-width': {
            value: '{sidenav.item-border-width}',
            type: 'borderWidths',
            description: 'Side navigation sublist border width',
        },
        'item-padding-x': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Side navigation item padding x',
        },
        'item-padding-y': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Side navigation item padding y',
        },
        'item-margin-bottom': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin bottom',
        },
        'item-margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin top',
        },
        'item-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Side navigation item color',
        },
        'item-color-hover': {
            value: '{primary.dark}',
            type: 'colors',
            description: 'Side navigation item color hover',
        },
        'item-color-current': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item color current',
        },
        'item-text-decoration': {
            value: 'none',
            type: 'textDecoration',
            description: 'Side navigation item text decoration',
        },
        'sublist-item-color': {
            value: '{sidenav.item-color}',
            type: 'colors',
            description: 'Side navigation sublist item color',
        },
        'sublist-item-color-hover': {
            value: '{sidenav.item-color-hover}',
            type: 'colors',
            description: 'Side navigation sublist item color hover',
        },
        'sublist-item-color-current': {
            value: '{sidenav.item-color-current}',
            type: 'colors',
            description: 'Side navigation sublist item color current',
        },
        'sublist-item-text-decoration': {
            value: '{sidenav.item-text-decoration}',
            type: 'textDecoration',
            description: 'Side navigation sublist item text decoration',
        },
        'item-focus-outline-offset': {
            value: '0',
            type: 'spacing',
            description: 'Side navigation item focus outline offset',
        },
        'item-current-indicator-color': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item current indicator color',
        },
        'item-current-indicator-border-radius': {
            value: '{border-radius.pill}',
            type: 'borderRadius',
            description: 'Side navigation item current indicator border radius',
        },
        'item-current-indicator-width': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Side navigation item current indicator width',
        },
        'item-current-indicator-position': {
            value: '2%',
            type: 'spacing',
            description: 'Side navigation item current indicator position. 0 is left, 100% is right.',
        },
        'child-padding-left': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-right': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-multiplier': {
            value: '2',
            type: 'spacing',
            description: 'Side navigation child padding left multiplier',
        },
    },
    haystack: {
        'item-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Side navigation item font size',
        },
        'item-font-family': {
            value: '{font.sans}',
            type: 'fontFamilies',
            description: 'Side navigation item font family',
        },
        'item-font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Side navigation item font weight',
        },
        'item-font-weight-current': {
            value: '{font-weight.medium}',
            type: 'fontWeights',
            description: 'Side navigation item font weight current',
        },
        'item-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Side navigation item line height',
        },
        'item-text-align': {
            value: 'right',
            type: 'textAlign',
            description: 'Side navigation item text align',
        },
        'sublist-font-size': {
            value: '{sidenav.item-font-size}',
            type: 'fontSizes',
            description: 'Side navigation sublist font size',
        },
        'sublist-font-weight': {
            value: '{sidenav.item-font-weight}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight',
        },
        'sublist-font-weight-current': {
            value: '{sidenav.item-font-weight-current}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight current',
        },
        'sublist-line-height': {
            value: '{sidenav.item-line-height}',
            type: 'lineHeights',
            description: 'Side navigation sublist line height',
        },
        'sublist-font-family': {
            value: '{sidenav.item-font-family}',
            type: 'fontFamilies',
            description: 'Side navigation sublist font family',
        },
        'item-background': {
            value: '{body.background}',
            type: 'colors',
            description: 'Side navigation item background',
        },
        'item-background-hover': {
            value: '{black}',
            type: 'colors',
            description: 'Side navigation item background hover',
        },
        'item-background-current': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation item background current',
        },
        'sublist-background': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation sublist background',
        },
        'sublist-background-hover': {
            value: '{sidenav.item-background-hover}',
            type: 'colors',
            description: 'Side navigation sublist background hover',
        },
        'sublist-background-current': {
            value: '{sidenav.item-background-current}',
            type: 'colors',
            description: 'Side navigation sublist background current',
        },
        'border-color': {
            value: '{body.background}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'border-width': {
            value: '{border-width.0}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'border-radius': {
            value: '{border-radius.0}',
            type: 'borderRadius',
            description: 'Side navigation item border radius',
        },
        'item-border-color': {
            value: '{body.background}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'item-border-width': {
            value: '{border-width.1px}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'sublist-border-color': {
            value: '{sidenav.item-border-color}',
            type: 'colors',
            description: 'Side navigation sublist border color',
        },
        'sublist-border-width': {
            value: '{sidenav.item-border-width}',
            type: 'borderWidths',
            description: 'Side navigation sublist border width',
        },
        'item-padding-x': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Side navigation item padding x',
        },
        'item-padding-y': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Side navigation item padding y',
        },
        'item-margin-bottom': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin bottom',
        },
        'item-margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin top',
        },
        'item-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Side navigation item color',
        },
        'item-color-hover': {
            value: '{primary.lightest}',
            type: 'colors',
            description: 'Side navigation item color hover',
        },
        'item-color-current': {
            value: '{primary.light}',
            type: 'colors',
            description: 'Side navigation item color current',
        },
        'item-text-decoration': {
            value: 'none',
            type: 'textDecoration',
            description: 'Side navigation item text decoration',
        },
        'sublist-item-color': {
            value: '{sidenav.item-color}',
            type: 'colors',
            description: 'Side navigation sublist item color',
        },
        'sublist-item-color-hover': {
            value: '{sidenav.item-color-hover}',
            type: 'colors',
            description: 'Side navigation sublist item color hover',
        },
        'sublist-item-color-current': {
            value: '{sidenav.item-color-current}',
            type: 'colors',
            description: 'Side navigation sublist item color current',
        },
        'sublist-item-text-decoration': {
            value: '{sidenav.item-text-decoration}',
            type: 'textDecoration',
            description: 'Side navigation sublist item text decoration',
        },
        'item-focus-outline-offset': {
            value: '0',
            type: 'spacing',
            description: 'Side navigation item focus outline offset',
        },
        'item-current-indicator-color': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item current indicator color',
        },
        'item-current-indicator-border-radius': {
            value: '{border-radius.pill}',
            type: 'borderRadius',
            description: 'Side navigation item current indicator border radius',
        },
        'item-current-indicator-width': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Side navigation item current indicator width',
        },
        'item-current-indicator-position': {
            value: '100%',
            type: 'spacing',
            description: 'Side navigation item current indicator position. 0 is left, 100% is right.',
        },
        'child-padding-left': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-right': {
            value: '{spacing.105}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-multiplier': {
            value: '2',
            type: 'spacing',
            description: 'Side navigation child padding left multiplier',
        },
    },
    coi: {
        'item-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Side navigation item font size',
        },
        'item-font-family': {
            value: '{font.sans}',
            type: 'fontFamilies',
            description: 'Side navigation item font family',
        },
        'item-font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Side navigation item font weight',
        },
        'item-font-weight-current': {
            value: '{font-weight.medium}',
            type: 'fontWeights',
            description: 'Side navigation item font weight current',
        },
        'item-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Side navigation item line height',
        },
        'item-text-align': {
            value: 'right',
            type: 'textAlign',
            description: 'Side navigation item text align',
        },
        'sublist-font-size': {
            value: '{sidenav.item-font-size}',
            type: 'fontSizes',
            description: 'Side navigation sublist font size',
        },
        'sublist-font-weight': {
            value: '{sidenav.item-font-weight}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight',
        },
        'sublist-font-weight-current': {
            value: '{sidenav.item-font-weight-current}',
            type: 'fontWeights',
            description: 'Side navigation sublist font weight current',
        },
        'sublist-line-height': {
            value: '{sidenav.item-line-height}',
            type: 'lineHeights',
            description: 'Side navigation sublist line height',
        },
        'sublist-font-family': {
            value: '{sidenav.item-font-family}',
            type: 'fontFamilies',
            description: 'Side navigation sublist font family',
        },
        'item-background': {
            value: '{body.background}',
            type: 'colors',
            description: 'Side navigation item background',
        },
        'item-background-hover': {
            value: '{black}',
            type: 'colors',
            description: 'Side navigation item background hover',
        },
        'item-background-current': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation item background current',
        },
        'sublist-background': {
            value: '{sidenav.item-background}',
            type: 'colors',
            description: 'Side navigation sublist background',
        },
        'sublist-background-hover': {
            value: '{sidenav.item-background-hover}',
            type: 'colors',
            description: 'Side navigation sublist background hover',
        },
        'sublist-background-current': {
            value: '{sidenav.item-background-current}',
            type: 'colors',
            description: 'Side navigation sublist background current',
        },
        'border-color': {
            value: '{body.background}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'border-width': {
            value: '{border-width.0}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'border-radius': {
            value: '{border-radius.0}',
            type: 'borderRadius',
            description: 'Side navigation item border radius',
        },
        'item-border-color': {
            value: '{body.background}',
            type: 'colors',
            description: 'Side navigation item border color',
        },
        'item-border-width': {
            value: '{border-width.1px}',
            type: 'borderWidths',
            description: 'Side navigation item border width',
        },
        'sublist-border-color': {
            value: '{sidenav.item-border-color}',
            type: 'colors',
            description: 'Side navigation sublist border color',
        },
        'sublist-border-width': {
            value: '{sidenav.item-border-width}',
            type: 'borderWidths',
            description: 'Side navigation sublist border width',
        },
        'item-padding-x': {
            value: '{spacing.2}',
            type: 'spacing',
            description: 'Side navigation item padding x',
        },
        'item-padding-y': {
            value: '{spacing.1}',
            type: 'spacing',
            description: 'Side navigation item padding y',
        },
        'item-margin-bottom': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin bottom',
        },
        'item-margin-top': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation item margin top',
        },
        'item-color': {
            value: '{ink}',
            type: 'colors',
            description: 'Side navigation item color',
        },
        'item-color-hover': {
            value: '{primary.lightest}',
            type: 'colors',
            description: 'Side navigation item color hover',
        },
        'item-color-current': {
            value: '{primary.light}',
            type: 'colors',
            description: 'Side navigation item color current',
        },
        'item-text-decoration': {
            value: 'none',
            type: 'textDecoration',
            description: 'Side navigation item text decoration',
        },
        'sublist-item-color': {
            value: '{sidenav.item-color}',
            type: 'colors',
            description: 'Side navigation sublist item color',
        },
        'sublist-item-color-hover': {
            value: '{sidenav.item-color-hover}',
            type: 'colors',
            description: 'Side navigation sublist item color hover',
        },
        'sublist-item-color-current': {
            value: '{sidenav.item-color-current}',
            type: 'colors',
            description: 'Side navigation sublist item color current',
        },
        'sublist-item-text-decoration': {
            value: '{sidenav.item-text-decoration}',
            type: 'textDecoration',
            description: 'Side navigation sublist item text decoration',
        },
        'item-focus-outline-offset': {
            value: '0',
            type: 'spacing',
            description: 'Side navigation item focus outline offset',
        },
        'item-current-indicator-color': {
            value: '{primary}',
            type: 'colors',
            description: 'Side navigation item current indicator color',
        },
        'item-current-indicator-border-radius': {
            value: '{border-radius.pill}',
            type: 'borderRadius',
            description: 'Side navigation item current indicator border radius',
        },
        'item-current-indicator-width': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Side navigation item current indicator width',
        },
        'item-current-indicator-position': {
            value: '100%',
            type: 'spacing',
            description: 'Side navigation item current indicator position. 0 is left, 100% is right.',
        },
        'child-padding-left': {
            value: '{spacing.0}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-right': {
            value: '{spacing.105}',
            type: 'spacing',
            description: 'Side navigation child padding left',
        },
        'child-padding-multiplier': {
            value: '2',
            type: 'spacing',
            description: 'Side navigation child padding left multiplier',
        },
    },
};
exports.default = tokens;
