import Home from '@/views/Home.vue';
import XLSX from '@/views/xlsx';
import { makeGithubLink } from '@/libs/util'

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
      github: makeGithubLink('xlsx'),
    },
    component: XLSX,
  },
  {
    path: '/post-message',
    name: 'post-message',
    meta: {
      title: '跨源通信 postMessage 的骚操作',
      github: makeGithubLink('post-message'),
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
      github: makeGithubLink('table-drag'),
    },
    component: () => import('@/views/table-drag'),
  },
  {
    path: '/print',
    name: 'print',
    meta: {
      title: '浏览器打印功能 -- window.print',
      github: makeGithubLink('print'),
    },
    component: () => import('@/views/print'),
  },
];
