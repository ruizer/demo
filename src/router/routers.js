import Home from '@/views/Home.vue';
import XLSX from '@/views/xlsx';
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: '/xlsx',
    name: 'xlsx',
    meta: {
      title: '使用 js-xlsx 库来解析 Excel 文件',
    },
    component: XLSX,
  },
  {
    path: '/post-message',
    name: 'post-message',
    meta: {
      title: '跨源通信 postMessage 的骚操作',
    },
    component: () => import('@/views/post-message'),
  },
  {
    path: '/post-message-test',
    name: 'post-message-test',
    meta: {
      title: '跨源通信 postMessage 的骚操作',
      hideInMenu: true,
    },
    component: () => import('@/views/post-message-test'),
  },
];
