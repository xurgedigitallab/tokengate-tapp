/*
 * Copyright 2025 Xurge Digital Lab LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//import 'dotenv/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import { Plugin, PluginOption, defineConfig } from 'vite';

const plugins: (Plugin | PluginOption)[] = [react()];

let port = 5173;

if (process.env.VITE_DEV_SSL === 'true') {
  plugins.push(basicSsl());
  port = 5174;
}

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    target: 'es2020',
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      strictRequires: true,
    },
  },
  resolve: {
    dedupe: [
      'react',
      'react-dom',
      '@matrix-widget-toolkit/react',
      '@matrix-widget-toolkit/mui',
      '@matrix-widget-toolkit/api',
      'react-redux',
      '@mui/material',
    ],
  },
  server: {
    port: 5173,
    strictPort: true,
    allowedHosts: [
      '7d908e32-33e8-415b-a403-947fa246ed4f-00-2xnmgyowpqahb.kirk.replit.dev',
      '15c32806-20be-45c8-b3ea-1f0a3e72dfb5-00-2ojqtwmdtbb4m.kirk.replit.dev',
      '15c32806-20be-45c8-b3ea-1f0a3e72dfb5-00-2ojqtwmdtbb4m.kirk.replit.dev'
      
      // Allow your ngrok host
      // 'localhost', // Allow local development
    ],
    proxy: {
      '/api': {
        target: 'https://xrplexplorer.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: port - 1000,
    strictPort: true,
  },
  plugins,
  envPrefix: 'REACT_APP_',
});
