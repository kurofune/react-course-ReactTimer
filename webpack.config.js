const webpack = require('webpack');

// suppress the deprecation warning currently happening
process.noDeprecation = true;

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    alias: {
      applicationStyles: `${__dirname}/app/styles/app.scss`,
      Main: `${__dirname}/app/components/Main.jsx`,
      Navigation: `${__dirname}/app/components/Navigation.jsx`,
      Countdown: `${__dirname}/app/components/Countdown.jsx`,
      Timer: `${__dirname}/app/components/Timer.jsx`,
      Clock: `${__dirname}/app/components/Clock.jsx`,
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0'],
          cacheDirectory: true,
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
