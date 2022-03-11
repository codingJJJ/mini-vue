export function isFunction(o) {
    return typeof o === 'function'
}

export function isElement(o) {
    return o instanceof Element
}

// 清楚元素所有的子节点
export function clearElementChildren(el) {
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
// 匹配双大括号
export const doubleBracesReg = /\{\{\s+(\w+?)\s+\}\}/g
// 匹配双大括号内部的内容
export const doubleBracesInnerReg = /(?<=\{\{\s+)(\w+?)(?=\s+\}\})/g