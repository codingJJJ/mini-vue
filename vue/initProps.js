import { doubleBracesReg, doubleBracesInnerReg } from "./utils";
import initEvent, {} from './initEvent'

/**
 * Map池 用于关联 属性 与 dom等相关信息
 */
const propPool = new Map();

/**
 * 属性初始化 对tempalte中带有vue特殊指令的标记进行处理
 */
function initProps() {
    const vm = this;

    // 获取data数组中的key列表
    const keys = Object.keys(vm.$data);

    // 遍历所有节点
    vm.$doms.forEach(el => {
        initEvent(vm, el)
        // if (el.hasAttribute('@click')) {
        //     const attr = el.getAttribute('@click');
        //     el.removeAttribute('@click')
        //     // 绑定事件
        //     typeof vm.$methods?.[attr] === 'function' && el.addEventListener('click', vm.$methods[attr].bind(vm.$reactive))
        // }

        if (el.hasAttribute('v-if')) {
            const attr = el.getAttribute('v-if');
            // 删除节点
            el.removeAttribute('v-if');

            addPoolByAttr(attr, { el: el, type: 'v-if' })
        } else if (el.hasAttribute('v-show')) {
            const attr = el.getAttribute('v-show');
            // 删除节点
            el.removeAttribute('v-show')

            addPoolByAttr(attr, { el, type: 'v-show', comment: document.createComment('v-show——' + attr) })
        }

        // 遍历每一个元素的子节点 找到其对应的文本节点  
        el.childNodes?.forEach(elText => {
            if (elText.nodeType === 3) {
                // 获取当前文本节点的内容
                const textContent = elText.textContent;
                console.log(textContent, "--1");
                if(textContent.includes('showText2')) {
                    window.a1 = doubleBracesReg;
                    window.a2 = textContent
                }
                if (new RegExp(doubleBracesReg).test(textContent)) { // 判断是否具有双大括号
                    console.log(textContent, "--2");
                    const attrArray = textContent.match(new RegExp(doubleBracesInnerReg, 'g'));
                    attrArray?.forEach(attr => {
                        if (keys.includes(attr)) { // 当双大号存在切 内部的数据能对应打vm中的data实列 表示需要对当前文本节点进行替换
                            addPoolByAttr(attr, { el: elText, type: 'textContent', textContent })
                        }
                    })
                    console.log(textContent.match(doubleBracesInnerReg));

                }
            }
        })
    });
    console.log(propPool);
    // 将数据池存入propPool
    vm.$propPool = propPool;
}
/**
 * 将当前的信息放入propPoo中
 * @param {*} attr 属性
 * @param {*} value 当前属性对应信息
 */
function addPoolByAttr(attr, value) {
    if (propPool.has(attr)) {
        propPool.set(attr, [...propPool.get(attr), value])
    } else {
        propPool.set(attr, [value])
    }
}

export default initProps;