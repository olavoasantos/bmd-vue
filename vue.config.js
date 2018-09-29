const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          include: [
            path.resolve(__dirname, 'src/components'),
          ],
          oneOf: [
            {
              test: /\.functional\.html$/,
              loader: 'vue-template-loader',
              options: {
                functional: true,
              },
            },
            {
              loader: 'vue-template-loader',
            },
          ],
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },
};
