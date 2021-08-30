// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    // 以下代码！！！  与alias或babel同级
    configure: (webpackConfig, { env, paths }) => {
      // 修改build的生成文件名称
      webpackConfig.output = {
        ...webpackConfig.output,
        //publicPath: '/PixelMaster/'
      }
      return webpackConfig;
    }
  }
}