import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const input = 'lib/index';
const external = ['exenv', 'prop-types', 'react'];

const babelOptions = {
  exclude: '**/node_modules/**',
};

export default [
  {
    input,
    output: {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'ReactKeyHandler',
      globals: {
        'prop-types': 'PropTypes',
        exenv: 'exenv',
        react: 'React',
      },
    },
    external,
    plugins: [resolve(), babel(babelOptions)],
  },

  {
    input,
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    external,
    plugins: [resolve(), babel(babelOptions)],
  },

  {
    input,
    output: {
      file: 'dist/esm/index.js',
      format: 'esm',
    },
    external,
    plugins: [resolve(), babel(babelOptions)],
  },
];
