module.exports = (config) => {
    config.set({
      // ... normal karma configuration
      frameworks: ['jasmine'],
      browsers : ['Chrome', 'Firefox'],
      files: [
        // only specify one entry point
        // and require all tests in there
        'test/**/*_test.js',
        { pattern: 'dist/*.js', watched: true},
      ],
      
      preprocessors: {
     
      },
  
      webpack: {
        // karma watches the test entry points
        // (you don't need to specify the entry option)
        // webpack watches dependencies
  
        // webpack configuration
      },
  
      webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        stats: 'errors-only'
      }
    })
  }