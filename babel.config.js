module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@customTypes': './src/types',
            '@styles': './src/styles',
            '@services': './src/services',
            '@navigations': './src/navigations',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
