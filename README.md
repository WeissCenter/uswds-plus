# The Power of Flexibility
Using tokens to drive meaningful and realtime user accessibility updates.

# USWDS+flex

Welcome to USWDS+flex, a comprehensive design system that provides a set of reusable components, guidelines, and best practices to ensure consistency and efficiency in our design and development processes.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Components](#components)
- [Design Principles](#design-principles)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Introduction
[Provide a brief introduction to your design system, its purpose, and the benefits it offers.]

## Getting Started
### USWDS+ CSS Compilation Script

This script is a command-line tool for compiling SCSS (Sass) files into CSS, specifically designed for USWDS+. It provides a convenient way to compile a tailored version of USWDS+ with user-defined component options - allowing you to minimize and bundle up only the code you need.

#### Features

- Compiles USWDS+ files into a single minified CSS sheet
- Allows modification of the `$assetFilePath` variable in the USWDS+ code without changing the original files or needing to create a new SCSS variable file
- Applies PostCSS plugins for additional CSS transformations
  - Autoprefixer for vendor prefixing
  - cssnano for CSS minification
  - postcss-preset-env for transforming modern CSS into browser-compatible CSS
- Customizable output file name and path
- Interactive command-line prompts for user input

#### Prerequisites

Before running this script, make sure you have the following dependencies installed:

- Node.js (v12 or above)
- npm (Node Package Manager)

#### Installation

1. Clone this repository or download the script file.

2. Open a terminal and navigate to the project directory.

3. Run the following command to install the required dependencies:
    
    ```javascript
    npm install
    ```


#### Usage

1. Open a terminal and navigate to the project directory.

2. Run the following command to start the USWDS+ CSS Compilation script:
    ```javascript
    node compile-css.js
    ```


## Components
[List and describe the available components in your design system. You can use a completion checklist to track the progress of each component.]

### Component Tokenization Completion Checklist
- [x] Button
- [ ] Input Field
- [ ] Dropdown
- [ ] Card
- [ ] Modal
- [ ] Typography
- [ ] Color Palette
- [ ] Icons
- [ ] [Add more components as needed]

## Design Principles
[Outline the key design principles and guidelines that your design system follows. This can include information about typography, color usage, spacing, responsiveness, accessibility, and more.]

## Roadmap
[Provide a roadmap for the future development and enhancements of your design system. This can include planned features, improvements, and milestones.]

### Accessibility Center
- [ ] Focus lens
- [ ] Nord color theme
- [ ] Monokai color theme
- [ ] Soloarized color theme
- [ ] Hyperlegible font family

### Enhancements
- [ ] Performance optimizations
- [ ] Distribution optimizations
    - [ ] Centralized distribution option (npm, CDN, etc.)
    - [ ] Ability to generate targeted CSS bundles (only core + x,y,z components, etc)
- [ ] Improved documentation
    - [ ] Interactive examples
    - [ ] Code snippets
    - [ ] Usage guidelines
- [ ] Component library
    - [ ] Angular components
    - [ ] Web components

## Contributing
[Explain how others can contribute to your design system. Include guidelines for reporting issues, submitting pull requests, and any other relevant contribution information.]

## License
Licensed under GNU General Public License v3.0. See [LICENSE](LICENSE) for more information.


