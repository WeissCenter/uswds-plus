const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function requireTokensFile(filePath) {
  const resolvedPath = path.resolve(__dirname, filePath);
  return require(resolvedPath);
}


async function promptUser() {
  const inquirer = await import('inquirer');
  const questions = [
    {
      type: 'input',
      name: 'folderPath',
      message: 'Enter the folder path to search for tokens.ts files:',
      default: './',
    },
    {
      type: 'input',
      name: 'tokenKey',
      message: 'Enter the specific key to aggregate tokens for:',
      default: 'base',
    },
    {
      type: 'input',
      name: 'jsonOutputPath',
      message: 'Enter the output path for the generated JSON files:',
      default: './output',
    },
    {
      type: 'input',
      name: 'cssOutputPath',
      message: 'Enter the output path for the generated CSS files:',
      default: './output',
    },
  ];

  return await inquirer.default.prompt(questions);
}


function findTokenFiles(folderPath) {
  const tokenFiles = [];

  function traverseFolder(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseFolder(filePath);
      } else if (stats.isFile() && file === 'tokens.ts') {
        tokenFiles.push(filePath);
      }
    });
  }

  traverseFolder(folderPath);
  return tokenFiles;
}

function compileTokensToJs(tokenFiles) {
  const jsFiles = [];

  tokenFiles.forEach((file) => {
    const jsFile = file.replace(/\.ts$/, '.js');
    const source = fs.readFileSync(file, 'utf8');
    const result = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    });
    fs.writeFileSync(jsFile, result.outputText);
    jsFiles.push(jsFile);
  });

  return jsFiles;
}

function aggregateTokens(tokenKey, tokenSets) {
  const aggregatedTokens = {};

  tokenSets.forEach(({ tokens }) => {
    // Object.keys(tokens).forEach((theme) => {
    //   if (!aggregatedTokens[theme]) {
    //     aggregatedTokens[theme] = {};
    //   }
    //   aggregatedTokens[theme][tokenKey] = tokens[theme];
    // });
    console.log(tokens);
  });

  return aggregatedTokens;
}

function convertTokensToCssVars(tokens, prefix, component) {
  let cssVariablesString = '';

  Object.keys(tokens).forEach((key) => {
    const value = tokens[key];
    const variableName = `--${prefix}-${component}-${key}`;
    cssVariablesString += `  ${variableName}: ${value};\n`;
  });

  return cssVariablesString;
}

function writeToFiles(aggregatedTokens, jsonOutputPath, cssOutputPath) {
  Object.keys(aggregatedTokens).forEach((theme) => {
    const jsonFilePath = path.join(jsonOutputPath, `tokens-${theme}.json`);
    const content = JSON.stringify(aggregatedTokens[theme], null, 2);
    fs.writeFileSync(jsonFilePath, content, 'utf8');

    let cssVariablesString = '';
    Object.keys(aggregatedTokens[theme]).forEach((component) => {
      cssVariablesString += convertTokensToCssVars(
        aggregatedTokens[theme][component],
        'usa',
        component
      );
    });
    const cssContent = `:root {\n${cssVariablesString}\n}`;
    const cssFilePath = path.join(
      cssOutputPath,
      `tokens-${theme.replace(/([A-Z])/g, '-$1').toLowerCase()}.css`
    );
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');
  });
}

async function main() {
  const { folderPath, tokenKey, jsonOutputPath, cssOutputPath } = await promptUser();


  const tokenFiles = findTokenFiles(folderPath);
  const jsFiles = compileTokensToJs(tokenFiles);

  const tokenSets = jsFiles.map((file) => ({
    tokens: requireTokensFile(file),
    key: path.basename(file, '.js'),
  }));


  const aggregatedTokens = aggregateTokens(tokenKey, tokenSets);

  // writeToFiles(aggregatedTokens, jsonOutputPath, cssOutputPath);


  console.log('Token aggregation and file generation completed.');
}

main();