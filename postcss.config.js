module.exports = {
    plugins: [
      require('postcss-preset-env')({
        // Options for polyfills and stage features
        stage: 3, // Default stage for features to include
        features: {
          'custom-properties': true // Example feature
        }
      }),
      require('autoprefixer'),
      require('cssnano')({
        preset: 'default',
      }),
    ]
  };
  