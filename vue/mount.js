import { isElement, clearElementChildren } from "./utils"

/**
 * 挂载DOM
 * @param {*} el 
 */
function mount(el) {
    let element
    if(isElement(el)) { // 当el是一个Element节点时 直接append
        element = el
    } else {
        elStr = el.startstWith('#') ? el : '#el'; // 处理挂载时候可能是文本不带#的app
        element = document.getElementById(el.elStr)
        if(!element) throw new Error(`can't find the id of element by ${el}`) 
    }

    // 清空当前element的内容
    clearElementChildren(element)

    // 将dom挂载到element
    element.appendChild(this.$dom.children[0]) 
}

export default mount