import Home from '@/views/Home.vue';
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
      title: '使用js-xlsx库来解析Excel文件',
    },
    component: () => import('@/views/xlsx'),
  },
];
