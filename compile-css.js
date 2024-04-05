const fs = require('fs');
const path = require('path');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const defaultOptions = {
    inputFiles: ['src/styles.scss'],
    outputFile: 'uswds+.min.css',
    outputPath: 'output/uswds+',
    postCSS: {
        autoprefix: true,
        minify: true,
        postcssPresetEnv: {
            stage: 3,
            features: {
                'custom-properties': true,
            },
        },
    },
    sassVariables: {
        assetFilePath: '/assets/',
    },
};

function loadOptions(configFile) {
    if (!configFile) {
        return {};
    }

    try {
        const configContent = fs.readFileSync(configFile, 'utf8');
        return JSON.parse(configContent);
    } catch (error) {
        console.error(`Error loading configuration file: ${configFile}`);
        return {};
    }
}

function updateAssetFilePathPlugin(assetFilePath) {
    return {
        postcssPlugin: 'update-assetFilePath',
        Once(root) {
            root.walkDecls((decl) => {
                if (decl.prop.includes('$assetFilePath')) {
                    decl.value = decl.value.replace(/\$assetFilePath/g, assetFilePath);
                }
            });
        },
    };
}

updateAssetFilePathPlugin.postcss = true;

function addQuotesAndSlash(path) {
    let updatedPath = path.trim();
    if (!updatedPath.startsWith("'") && !updatedPath.startsWith('"')) {
        updatedPath = `'${updatedPath}`;
    }
    if (!updatedPath.endsWith("'") && !updatedPath.endsWith('"')) {
        updatedPath = `${updatedPath}'`;
    }
    if (!updatedPath.endsWith("/'") && !updatedPath.endsWith('/"')) {
        updatedPath = updatedPath.slice(0, -1) + "/'";
    }
    return updatedPath;
}

function ensureCSSExtension(filename) {
    if (filename.endsWith('.css')) {
        return filename;
    }
    return `${filename}.css`;
}


async function compileSass(options) {
    const { inputFiles, outputFile, outputPath, postCSS } = {
      ...defaultOptions,
      ...options,
    };
  
    // Read the contents of the main Sass file
    const sassCode = fs.readFileSync(inputFiles[0], 'utf8');
  
    // Replace the $assetFilePath variable in the Sass code
    const modifiedSassCode = sassCode.replace(
      /\$assetFilePath:\s*['"].*?['"];/,
      `$assetFilePath: ${addQuotesAndSlash(options.sassVariables.assetFilePath)};`
    );
  
    // Get the directory of the main Sass file
    const mainSassDir = path.dirname(inputFiles[0]);
  
    const sassResult = sass.renderSync({
      data: modifiedSassCode,
      includePaths: [mainSassDir, ...inputFiles.slice(1)],
    });
  
    const cssCode = sassResult.css.toString();
  
    const postcssPlugins = [
      postcssPresetEnv(postCSS.postcssPresetEnv),
      postCSS.autoprefix && autoprefixer(),
      postCSS.minify && cssnano({ preset: 'default' }),
    ].filter(Boolean);
  
    const ora = await import('ora');
    const spinner = ora.default('Compiling SCSS...').start();
  
    postcss(postcssPlugins)
      .process(cssCode, { from: undefined })
      .then((result) => {
        spinner.succeed('SCSS compilation completed');
        const outputFilePath = path.join(outputPath, outputFile);
        fs.writeFileSync(outputFilePath, result.css);
        console.log(`\x1b[32mCSS file generated: ${outputFilePath}\x1b[0m`);
      })
      .catch((error) => {
        spinner.fail('SCSS compilation failed');
        console.error(error);
      });
  }


function promptUser() {
    console.log('\x1b[34m=== USWDS+ CSS Compilation ===\x1b[0m');
    rl.question('Enter the configuration file path (leave empty to use default options): ', (configFile) => {
        rl.question(`Enter the output file name (default: ${defaultOptions.outputFile}): `, (outputFilename) => {
            const outputFile = ensureCSSExtension(outputFilename || defaultOptions.outputFile);
            rl.question(`Enter the output path (default: ${defaultOptions.outputPath}): `, (outputPath) => {
                rl.question(`Enter the asset file path (default: ${defaultOptions.sassVariables.assetFilePath}): `, (assetFilePath) => {
                    const options = {
                        ...loadOptions(configFile),
                        outputFile,
                        outputPath: outputPath || defaultOptions.outputPath,
                        sassVariables: {
                            assetFilePath: assetFilePath || defaultOptions.sassVariables.assetFilePath,
                        },
                    };
                    compileSass(options);
                    rl.close();
                });
            });
        });
    });
}

promptUser();