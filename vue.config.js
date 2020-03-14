const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  parallel: false,
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });
      config.resolve.alias
      .set('network', resolve('src/network'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('views',resolve('src/views'))
      .set('config',resolve('src/config'))
  }
};