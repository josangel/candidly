// eslint.config.js

import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    ignores: ['node_modules', 'build', 'android', 'ios', '.expo', '.expo-shared', 'scripts'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
