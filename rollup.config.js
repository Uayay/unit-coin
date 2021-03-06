import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs' 
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es'
    }
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env',
          {
            targets: {
              esmodules: true
            }
          }
        ],
        '@babel/preset-typescript'
      ],
      babelrc: false,
      configFile: false
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
}
