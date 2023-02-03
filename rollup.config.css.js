import path from 'path';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sass from 'node-sass';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const resolveFile = function (filePath) {
  return path.join(__dirname, '', filePath)
}


const babelOptions = {
  "presets": ['@babel/preset-env'],
}

const processSass = function (context, payload) {
  return new Promise((resolve, reject) => {
    sass.render({
      file: context
    }, function (err, result) {
      if (!err) {
        resolve(result);
      } else {
        reject(err)
      }
    });
  })
}

export default {
  input: resolveFile('src/styles/components/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
      extensions: ['css', 'scss'],
      process: processSass,
    }),
    babel(babelOptions),
  ],
}

