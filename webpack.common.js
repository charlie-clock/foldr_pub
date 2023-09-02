const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    popup: path.resolve('./src/popup/popup.tsx'),
    options: path.resolve('./src/options/options.tsx'),
    contentScript: path.resolve('./src/contentScript/contentScript.ts')
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader", {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [tailwindcss, autoprefixer],
            },
          }
        }],
        test: /\.css$/i,
      }
    ]
  },
  plugins: [
    // this copy plugin copies manifest.json file into the dist
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist')
        }
      ]
    }),
    ...getHtmlPlugins(
      [
        'popup',
        'options'
    ]
    )
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'React Extension',
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}