// @ts-check
import { globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  globalIgnores(['worker-configuration.d.ts']),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // side effect imports
            ['^\\u0000'],
            // `node:` built-in modules
            ['^node:'],
            // packages
            ['^@?\\w'],
            // absolute imports and other imports such as vue-style `@/foo`
            ['^'],
            // relative imports
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  eslintPluginPrettierRecommended,
);
