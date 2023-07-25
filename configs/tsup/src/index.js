/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const tsup = require('tsup');

const defaultOptions = {
  source: {
    entry: ['./src/**/*.{ts,tsx}', '!./src/**/*.stories.{ts,tsx}', '!./src/**/*.spec.{ts,tsx}', '!./src/index.{ts,tsx}'],
    format: ['esm', 'cjs'],
    sourcemap: true,
    clean: true,
    dts: './src/index.ts',
  },
  entry: {
    entry: ['./src/index.{ts,tsx}'],
    format: ['esm', 'cjs'],
    sourcemap: true,
    clean: true,
    dts: './src/index.ts',
    bundle: false,
  }
};

function resolvePath(basePath, targetPath) {
  return /^!/.test(targetPath) ? path.join('!', basePath, targetPath.slice(1)) : path.join(basePath, targetPath);
}

function defineConfig(targetOptions, basePath = './') {
  const options = Object.entries(targetOptions).reduce((acc, [key, value]) => {
    acc[key] = {
      ...defaultOptions[key],
      ...value,
    };

    if (acc[key].entry) {
      acc[key].entry = acc[key].entry.map(x => resolvePath(basePath, x));
    }

    return acc;
  }, {});

  return tsup.defineConfig(Object.values(options));
}

module.exports = defineConfig;