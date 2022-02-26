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
            '@animations': './src/animations',
            '@classes': './src/classes',
            '@api': './src/api',
            '@store': './src/store',
            '@components': './src/components',
            '@assets': './src/assets',
            '@common': './src/common',
            '@constants': './src/constants',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@i18n': './src/i18n',
          },
        },
      ],
    ],
  };
};
