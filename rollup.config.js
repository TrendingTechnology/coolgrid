import filesize from 'rollup-plugin-filesize'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'

const input = 'lib/index.js'
const globals = {
  react: 'React',
  'styled-components': 'styled'
}
const external = ['react', 'styled-components']

export default [
  {
    input: input,
    output: {
      file: './dist/coolgrid.js',
      format: 'cjs',
      name: 'coolgrid',
      globals: globals,
      exports: 'named'
    },
    external: external,
    plugins: [resolve(), filesize()]
  },
  {
    input: input,
    output: {
      file: './dist/coolgrid.umd.js',
      format: 'umd',
      name: 'coolgrid',
      globals: globals
    },
    external: external,
    plugins: [resolve(), terser(), filesize()]
  },
  {
    input: input,
    output: {
      file: './dist/coolgrid.module.js',
      format: 'es',
      globals: globals
    },
    external: external,
    plugins: [resolve(), filesize()]
  }
]
