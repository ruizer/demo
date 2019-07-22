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

/** 
 * @description 生成github链接地址
 * @param {name} 当前文件名称
 */
export const makeGithubLink = (name) => {
  return `https://github.com/ruizer/demo/blob/master/src/views/${name}/${name}.vue`;
}

/** 给打印增加默认样式 */
function myStyle (mode) {
    mode = mode.toLowerCase()
    mode = mode === 'landscape' ? mode : 'portrait'
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `@page { size: ${mode}; margin: 10mm;}`
    return style
}

/** @description 动态打印 */
export const printPartial = (dom, { title = document.title, mode = 'portrait' } = {}) => {
    if (!dom) return
    let copyDom = document.createElement('span')
    const styleDom = document.querySelectorAll('style, link, meta')
    const titleDom = document.createElement('title')
    titleDom.innerText = title
    copyDom.appendChild(titleDom)
    Array.from(styleDom).forEach(item => {
        copyDom.appendChild(item.cloneNode(true))
    })
    copyDom.appendChild(myStyle(mode))
    copyDom.appendChild(dom.cloneNode(true))
    const htmlTemp = copyDom.innerHTML
    copyDom = null
    const iframeDom = document.createElement('iframe')
    const attrObj = {
        height: 0,
        width: 0,
        border: 0,
        wmode: 'Opaque'
    }
    const styleObj = {
        position: 'absolute',
        top: '-999px',
        left: '-999px'
    }
    Object.entries(attrObj).forEach(([key, value]) => { iframeDom.setAttribute(key, value) })
    Object.entries(styleObj).forEach(([key, value]) => { iframeDom.style[key] = value })
    document.body.insertBefore(iframeDom, document.body.children[0])
    const iframeWin = iframeDom.contentWindow
    const iframeDocs = iframeWin.document
    iframeDocs.write(`<!doctype html>`)
    iframeDocs.write(htmlTemp)
    iframeDocs.body.setAttribute('style', '-webkit-print-color-adjust: exact;')
    iframeWin.focus()
    iframeWin.print()
    document.body.removeChild(iframeDom)
}
