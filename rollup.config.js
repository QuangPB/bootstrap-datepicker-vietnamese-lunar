import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleanUp from 'rollup-plugin-cleanup';
import less from 'rollup-plugin-less';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bootstrap-datepicker-vietnamese-lunar.js',
      format: 'cjs'
    },
    {
      file: 'dist/bootstrap-datepicker-vietnamese-lunar.es.js',
      format: 'es'
    }
  ],
  plugins: [
    cleanUp(),
    less({
      insert: true,
      output: 'dist/bootstrap-datepicker-vietnamese-lunar.css'
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**', // Default: undefined
      sourceMap: false // Default: true
    })
  ]
}