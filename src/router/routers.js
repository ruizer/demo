import Home from '@/views/Home.vue';
import XLSX from '@/views/xlsx';
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      github: 'https://github.com/ruizer/demo',
      hideInMenu: true,
    },
  },
  {
    path: '/xlsx',
    name: 'xlsx',
    meta: {
      title: '使用 js-xlsx 库来解析 Excel 文件',
      github:
        'https://github.com/ruizer/demo/blob/master/src/views/xlsx/index.vue',
    },
    component: XLSX,
  },
  {
    path: '/post-message',
    name: 'post-message',
    meta: {
      title: '跨源通信 postMessage 的骚操作',
      github:
        'https://github.com/ruizer/demo/blob/master/src/views/post-message/post-message.vue',
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
  {
    path: '/table-drag',
    name: 'table-drag',
    meta: {
      title: '表格列宽拖拽功能',
      github:
        'https://github.com/ruizer/demo/blob/master/src/views/table-drag/table-drag.vue',
    },
    component: () => import('@/views/table-drag'),
  },
];
