import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') }
    ]
  }
});
