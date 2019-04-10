import routes from '../router/routers';

/**
 * @description 简单获取菜单，没有层级
 */
export const getMenus = () => {
  const menus = routes
    .filter(v => v.meta && !v.meta.hideInMenu)
    .map(item => ({
      path: item.path,
      title: item.meta.title || item.name,
    }));
  return menus;
};
