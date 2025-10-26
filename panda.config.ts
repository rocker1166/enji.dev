import { defineConfig } from '@pandacss/dev';
import presetBase from '@pandacss/preset-base';

import presetCustom from './panda';

export default defineConfig({
  preflight: true,
  include: [
    './app/*.vue',
    './app/components/**/*.vue',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
  ],
  presets: [presetBase, presetCustom],
  outdir: 'styled-system',
  separator: '-',
});
