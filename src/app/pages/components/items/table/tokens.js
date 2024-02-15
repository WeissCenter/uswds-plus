"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = void 0;
exports.key = 'table';
//   --usa-table-border-width: var(--usa-spacing-2px);
// --usa-table-cell-compact-padding-x: var(--usa-spacing-1);
// --usa-table-cell-compact-padding-y: calc(var(--usa-spacing-05));
// --usa-table-cell-padding-x: calc(var(--usa-spacing-2));
// --usa-table-cell-padding-y: var(--usa-spacing-1);
// --usa-table-unsorted-icon-hover-color: var(--usa-base-dark);
// --usa-table-unsorted-icon-color: var(--usa-base-base);
// --usa-table-sorted-stripe-background-color: var(--usa-accent-cool-lighter);
// --usa-table-sorted-background-color: var(--usa-accent-cool-lighter);
// --usa-table-sorted-header-background-color: var(--usa-accent-cool-light);
// --usa-table-text-hover-color: var(--usa-base-dark);
// --usa-table-stripe-background-color: var(--usa-base-lightest);
// --usa-table-header-background-color: var(--usa-base-lightest);
// --usa-table-border-color: var(--usa-body-ink);
// --usa-table-sorted-icon-color: var(--usa-text-color);
// --usa-table-sorted-header-text-color: var(--usa-text-color);
// --usa-table-text-color: var(--usa-text-color);
// --usa-table-stripe-text-color: var(--usa-text-color);
// --usa-table-header-text-color: var(--usa-text-color);
// --usa-table-sorted-text-color: var(--usa-text-color);
// --usa-table-font-size: var(--usa-font-size-sm);
// --usa-table-font-family: var(--usa-font-body);
// --usa-table-line-height: var(--usa-line-height-2);
// --usa-table-font-weight: var(--usa-font-weight-normal);
// --usa-table-header-font-size: var(--usa-font-size-sm);
// --usa-table-header-font-family: var(--usa-font-body);
// --usa-table-header-font-weight: var(--usa-font-weight-semibold);
// --usa-table-header-line-height: var(--usa-line-height-3);
// --usa-table-margin-y: var(--usa-spacing-205);
// --usa-table-caption-margin-bottom: var(--usa-spacing-105);
// --usa-table-caption-font-size: var(--usa-font-size-xs);
// --usa-table-caption-font-family: var(--usa-font-body);
// --usa-table-caption-font-weight: var(--usa-font-weight-bold);
// --usa-table-caption-text-align: left;
// --usa-table-caption-line-height: var(--usa-line-height-3);
var tokens = {
    base: {
        'border-width': {
            value: '{spacing.2px}',
            type: 'sizing',
            description: 'Table border width',
        },
        'cell-compact-padding-x': {
            value: '{spacing.1}',
            type: 'sizing',
            description: 'Table cell compact padding x',
        },
        'cell-compact-padding-y': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Table cell compact padding y',
        },
        'cell-padding-x': {
            value: '{spacing.2}',
            type: 'sizing',
            description: 'Table cell padding x',
        },
        'cell-padding-y': {
            value: '{spacing.1}',
            type: 'sizing',
            description: 'Table cell padding y',
        },
        'unsorted-icon-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table unsorted icon hover color',
        },
        'unsorted-icon-color': {
            value: '{base}',
            type: 'color',
            description: 'Table unsorted icon color',
        },
        'sorted-stripe-background-color': {
            value: '{accent-cool.lighter}',
            type: 'color',
            description: 'Table sorted stripe background color',
        },
        'sorted-background-color': {
            value: '{accent-cool.lighter}',
            type: 'color',
            description: 'Table sorted background color',
        },
        'sorted-header-background-color': {
            value: '{accent-cool.light}',
            type: 'color',
            description: 'Table sorted header background color',
        },
        'text-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table text hover color',
        },
        'stripe-background-color': {
            value: '{base.lighter}',
            type: 'color',
            description: 'Table stripe background color',
        },
        'header-background-color': {
            value: '{base.lighter}',
            type: 'color',
            description: 'Table header background color',
        },
        'border-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table border color',
        },
        'sorted-icon-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted icon color',
        },
        'sorted-header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted header text color',
        },
        'text-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table text color',
        },
        'stripe-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table stripe text color',
        },
        'header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table header text color',
        },
        'sorted-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted text color',
        },
        'font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table font size',
        },
        'font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table font family',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'Table line height',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Table font weight',
        },
        'header-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table header font size',
        },
        'header-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table header font family',
        },
        'header-font-weight': {
            value: '{font-weight.semibold}',
            type: 'fontWeights',
            description: 'Table header font weight',
        },
        'header-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table header line height',
        },
        'margin-y': {
            value: '{spacing.205}',
            type: 'sizing',
            description: 'Table margin y',
        },
        'caption-margin-bottom': {
            value: '{spacing.105}',
            type: 'sizing',
            description: 'Table caption margin bottom',
        },
        'caption-font-size': {
            value: '{font-size.xs}',
            type: 'fontSizes',
            description: 'Table caption font size',
        },
        'caption-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table caption font family',
        },
        'caption-font-weight': {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'Table caption font weight',
        },
        'caption-text-align': {
            value: 'left',
            type: 'textAlignment',
            description: 'Table caption text align',
        },
        'caption-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table caption line height',
        },
    },
    adapt: {
        'border-width': {
            value: '{spacing.2px}',
            type: 'sizing',
            description: 'Table border width',
        },
        'cell-compact-padding-x': {
            value: '{spacing.1}',
            type: 'sizing',
            description: 'Table cell compact padding x',
        },
        'cell-compact-padding-y': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Table cell compact padding y',
        },
        'cell-padding-x': {
            value: '{spacing.2}',
            type: 'sizing',
            description: 'Table cell padding x',
        },
        'cell-padding-y': {
            value: '{spacing.1}',
            type: 'sizing',
            description: 'Table cell padding y',
        },
        'unsorted-icon-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table unsorted icon hover color',
        },
        'unsorted-icon-color': {
            value: '{base}',
            type: 'color',
            description: 'Table unsorted icon color',
        },
        'sorted-stripe-background-color': {
            value: '{accent-cool.lighter}',
            type: 'color',
            description: 'Table sorted stripe background color',
        },
        'sorted-background-color': {
            value: '{accent-cool.lighter}',
            type: 'color',
            description: 'Table sorted background color',
        },
        'sorted-header-background-color': {
            value: '{accent-cool.light}',
            type: 'color',
            description: 'Table sorted header background color',
        },
        'text-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table text hover color',
        },
        'stripe-background-color': {
            value: '{base.lighter}',
            type: 'color',
            description: 'Table stripe background color',
        },
        'header-background-color': {
            value: '{base.lighter}',
            type: 'color',
            description: 'Table header background color',
        },
        'border-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table border color',
        },
        'sorted-icon-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted icon color',
        },
        'sorted-header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted header text color',
        },
        'text-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table text color',
        },
        'stripe-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table stripe text color',
        },
        'header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table header text color',
        },
        'sorted-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted text color',
        },
        'font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table font size',
        },
        'font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table font family',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'Table line height',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Table font weight',
        },
        'header-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table header font size',
        },
        'header-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table header font family',
        },
        'header-font-weight': {
            value: '{font-weight.semibold}',
            type: 'fontWeights',
            description: 'Table header font weight',
        },
        'header-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table header line height',
        },
        'margin-y': {
            value: '{spacing.205}',
            type: 'sizing',
            description: 'Table margin y',
        },
        'caption-margin-bottom': {
            value: '{spacing.105}',
            type: 'sizing',
            description: 'Table caption margin bottom',
        },
        'caption-font-size': {
            value: '{font-size.xs}',
            type: 'fontSizes',
            description: 'Table caption font size',
        },
        'caption-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table caption font family',
        },
        'caption-font-weight': {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'Table caption font weight',
        },
        'caption-text-align': {
            value: 'left',
            type: 'textAlignment',
            description: 'Table caption text align',
        },
        'caption-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table caption line height',
        },
    },
    haystack: {
        'border-width': {
            value: '{spacing.1px}',
            type: 'sizing',
            description: 'Table border width',
        },
        'cell-compact-padding-x': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Table cell compact padding x',
        },
        'cell-compact-padding-y': {
            value: '{spacing.2px}',
            type: 'sizing',
            description: 'Table cell compact padding y',
        },
        'cell-padding-x': {
            value: '{spacing.105}',
            type: 'sizing',
            description: 'Table cell padding x',
        },
        'cell-padding-y': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Table cell padding y',
        },
        'unsorted-icon-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table unsorted icon hover color',
        },
        'unsorted-icon-color': {
            value: '{base}',
            type: 'color',
            description: 'Table unsorted icon color',
        },
        'sorted-stripe-background-color': {
            value: '{primary.light}',
            type: 'color',
            description: 'Table sorted stripe background color',
        },
        'sorted-background-color': {
            value: '{primary}',
            type: 'color',
            description: 'Table sorted background color',
        },
        'sorted-header-background-color': {
            value: '{primary.light}',
            type: 'color',
            description: 'Table sorted header background color',
        },
        'text-hover-color': {
            value: '{base.lighter}',
            type: 'color',
            description: 'Table text hover color',
        },
        'stripe-background-color': {
            value: '{black}',
            type: 'color',
            description: 'Table stripe background color',
        },
        'header-background-color': {
            value: '{black}',
            type: 'color',
            description: 'Table header background color',
        },
        'border-color': {
            value: '{base.darker}',
            type: 'color',
            description: 'Table border color',
        },
        'sorted-icon-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted icon color',
        },
        'sorted-header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted header text color',
        },
        'text-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table text color',
        },
        'stripe-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table stripe text color',
        },
        'header-text-color': {
            value: '{white}',
            type: 'color',
            description: 'Table header text color',
        },
        'sorted-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted text color',
        },
        'font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table font size',
        },
        'font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table font family',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'Table line height',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Table font weight',
        },
        'header-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table header font size',
        },
        'header-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table header font family',
        },
        'header-font-weight': {
            value: '{font-weight.semibold}',
            type: 'fontWeights',
            description: 'Table header font weight',
        },
        'header-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table header line height',
        },
        'margin-y': {
            value: '{spacing.205}',
            type: 'sizing',
            description: 'Table margin y',
        },
        'caption-margin-bottom': {
            value: '{spacing.105}',
            type: 'sizing',
            description: 'Table caption margin bottom',
        },
        'caption-font-size': {
            value: '{font-size.xs}',
            type: 'fontSizes',
            description: 'Table caption font size',
        },
        'caption-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table caption font family',
        },
        'caption-font-weight': {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'Table caption font weight',
        },
        'caption-text-align': {
            value: 'left',
            type: 'textAlignment',
            description: 'Table caption text align',
        },
        'caption-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table caption line height',
        },
    },
    coi: {
        'border-width': {
            value: '{spacing.2px}',
            type: 'sizing',
            description: 'Table border width',
        },
        'cell-compact-padding-x': {
            value: '{spacing.1}',
            type: 'sizing',
            description: 'Table cell compact padding x',
        },
        'cell-compact-padding-y': {
            value: '{spacing.05}',
            type: 'sizing',
            description: 'Table cell compact padding y',
        },
        'cell-padding-x': {
            value: '{spacing.2}',
            type: 'sizing',
            description: 'Table cell padding x',
        },
        'cell-padding-y': {
            value: '{spacing.1}',
            type: 'sizing',
            description: 'Table cell padding y',
        },
        'unsorted-icon-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table unsorted icon hover color',
        },
        'unsorted-icon-color': {
            value: '{base}',
            type: 'color',
            description: 'Table unsorted icon color',
        },
        'sorted-stripe-background-color': {
            value: '{accent-cool.lighter}',
            type: 'color',
            description: 'Table sorted stripe background color',
        },
        'sorted-background-color': {
            value: '{accent-cool.lighter}',
            type: 'color',
            description: 'Table sorted background color',
        },
        'sorted-header-background-color': {
            value: '{accent-cool.light}',
            type: 'color',
            description: 'Table sorted header background color',
        },
        'text-hover-color': {
            value: '{base.dark}',
            type: 'color',
            description: 'Table text hover color',
        },
        'stripe-background-color': {
            value: '{base.darker}',
            type: 'color',
            description: 'Table stripe background color',
        },
        'header-background-color': {
            value: '{base.lighter}',
            type: 'color',
            description: 'Table header background color',
        },
        'border-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table border color',
        },
        'sorted-icon-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted icon color',
        },
        'sorted-header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted header text color',
        },
        'text-color': {
            value: '{body.ink}',
            type: 'color',
            description: 'Table text color',
        },
        'stripe-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table stripe text color',
        },
        'header-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table header text color',
        },
        'sorted-text-color': {
            value: '{table.text-color}',
            type: 'color',
            description: 'Table sorted text color',
        },
        'font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table font size',
        },
        'font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table font family',
        },
        'line-height': {
            value: '{line-height.2}',
            type: 'lineHeights',
            description: 'Table line height',
        },
        'font-weight': {
            value: '{font-weight.normal}',
            type: 'fontWeights',
            description: 'Table font weight',
        },
        'header-font-size': {
            value: '{font-size.sm}',
            type: 'fontSizes',
            description: 'Table header font size',
        },
        'header-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table header font family',
        },
        'header-font-weight': {
            value: '{font-weight.semibold}',
            type: 'fontWeights',
            description: 'Table header font weight',
        },
        'header-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table header line height',
        },
        'margin-y': {
            value: '{spacing.205}',
            type: 'sizing',
            description: 'Table margin y',
        },
        'caption-margin-bottom': {
            value: '{spacing.105}',
            type: 'sizing',
            description: 'Table caption margin bottom',
        },
        'caption-font-size': {
            value: '{font-size.xs}',
            type: 'fontSizes',
            description: 'Table caption font size',
        },
        'caption-font-family': {
            value: '{font.body}',
            type: 'fontFamilies',
            description: 'Table caption font family',
        },
        'caption-font-weight': {
            value: '{font-weight.bold}',
            type: 'fontWeights',
            description: 'Table caption font weight',
        },
        'caption-text-align': {
            value: 'left',
            type: 'textAlignment',
            description: 'Table caption text align',
        },
        'caption-line-height': {
            value: '{line-height.3}',
            type: 'lineHeights',
            description: 'Table caption line height',
        },
    },
};
exports.default = tokens;
