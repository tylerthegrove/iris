import { terser } from 'rollup-plugin-terser';

// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import multiInput from 'rollup-plugin-multi-input';
// import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';

// import pkg from './package.json';

// const dependencies = Object.keys(pkg.dependencies || {});
// const peerDependencies = Object.keys(pkg.peerDependencies || {});
// const babelRuntime = (id) => id.includes('@babel/runtime');

// export default (args) => {
//   const debug = args['config-debug'];
//   process.env.NODE_ENV = 'production';

//   return {
//     input: [
//       './src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts|*.types.ts)',
//     ],
//     output: {
//       dir: './build',
//       format: 'cjs',
//     },
//     external: [...dependencies, ...peerDependencies, babelRuntime],
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript(),
//       babel({
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         babelHelpers: 'runtime',
//         exclude: /node_modules/,
//       }),
//       !debug && terser(),
//       multiInput(),
//     ].filter((p) => p),
//   };
// };

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

const root = __dirname;

const plugins = [
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  // commonjs(),
  // typescript(),
  babel({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // envName: 'production',
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
    // caller: {
    //   browserslistOverride: browserslist,
    // },
  }),
  // terser(),
];

// const submodules = [
//   'color',
//   'components',
//   'icons',
//   'illustration',
//   'layout',
//   'motion',
//   'themes',
//   'tokens',
//   'typography',
//   'utils',
// ];

// const config = submodules.flatMap((submodule) => {
//   return [
//     {
//       input: `${root}/src/${submodule}/index.ts`,
//       output: [
//         {
//           format: 'esm',
//           dir: `${root}/dist/${submodule}`,
//           preserveModules: true,
//         },
//       ],
//       preserveModules: true,
//       plugins,
//     },
//     // {
//     //   input: `${root}/src/${submodule}/index.ts`,
//     //   output: [
//     //     { format: 'cjs', dir: `${root}/dist/${submodule}/cjs` },
//     //     {
//     //       format: 'esm',
//     //       dir: `${root}/dist/${submodule}/esm`,
//     //       preserveModules: false,
//     //     },
//     //   ],
//     //   preserveModules: false,
//     //   plugins,
//     // },
//     // {
//     //   input: `${root}/src/${submodule}/index.ts`,
//     //   output: [
//     //     {
//     //       format: 'esm',
//     //       dir: `${root}/dist/${submodule}/esnext`,
//     //       entryFileNames: '[name][extname].esnext',
//     //     },
//     //   ],
//     //   preserveModules: false,
//     //   plugins,
//     // },
//   ];
// });

const config = {
  input: `${root}/src/index.ts`,
  output: [
    {
      format: 'esm',
      dir: `${root}/dist/`,
      preserveModules: true,
    },
  ],
  preserveModules: true,
  plugins,
};

export default config;
