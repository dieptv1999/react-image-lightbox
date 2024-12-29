import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import babelParser from '@babel/eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', '**/build', '**/dist', '**/examples'],
  },
  ...compat.extends('prettier'),
  {
    languageOptions: {
      parser: babelParser,
      globals: {
        ...globals.jest,
      },
    },

    rules: {
      'jsx-a11y/control-has-associated-label': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-filename-extension': 0,
      'react/jsx-props-no-spreading': 0,
      'react/prop-types': 0,
      'react/sort-comp': 0,
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
