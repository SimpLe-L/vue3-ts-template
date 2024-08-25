import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  // 获取配置环境参数
  console.log(loadEnv(mode, process.cwd()));

  // const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 设置别名
      },
    },
    server: {
      host: true,
      hmr: true,
      open: true,
      port: 8888,
      proxy: {
        '/api': {
          target: '', //设置请求地址
          changeOrigin: true, //是否跨域
          rewrite: (path) => path.replace(/^\/api/, ''), //重写地址
        },
      }
    },
  });
};
