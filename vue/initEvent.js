import { isFunction } from "./utils";

const EVEN_LIST = ['click', 'dblclick', 'blur', 'change', 'input', 'keydown', 'keypress', 'keyup', 'wheel', 'select', 'resize', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup'];

/**
 * 注册事件
 * @param {*} vm 
 * @param {*} el 
 */
function initEvent (vm, el) {
    EVEN_LIST.forEach((event) => {
        const altEvent = '@' + event;

        const attr = el.getAttribute(altEvent);
        if (attr && el.hasAttribute(altEvent) && isFunction(vm.$methods?.[attr])) {
            // 移除当前标签
            el.removeAttribute(altEvent)
            // 绑定事件
            el.addEventListener(event, vm.$methods[attr].bind(vm.$reactive))
        }
    })
}

export default initEvent
