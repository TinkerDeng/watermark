import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'WaterMask',
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    replace({
      'process.browser': true
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    (isProduction && uglify()),
    (!isProduction && serve({
      open: true,
      contentBase: ['examples/', 'dist/'],
      host: 'localhost',
      port: 9999
    })),

    (!isProduction && livereload({
      watch: 'dist/'
    }))
  ],
  dest: isProduction ? 'dist/index.min.js' : 'dist/index.js',
  sourceMap: !isProduction
}
