import { doubleBracesReg } from './utils'

// 渲染
export function render(vm) {
    for (let [attr, info] of vm.$propPool) {
        updateDOMByType(info, vm.$data[attr], vm.$data)
    }
}

// 更新
export function update(vm, key, val) {
    for (const [attr, info] of vm.$propPool) {
        // 更新只会改变attr变更的部分
        if (attr === key) {
            updateDOMByType(info, val, vm.$data)
        }
    }
}

// 根据type更新DOM
function updateDOMByType(infos, value, data) {
    infos.forEach(info => {
        const { el, type, textContent, comment } = info;
        switch (type) {
            case 'v-if':
                el.style.display = value ? '' : 'none';
                break;
            case 'v-show':
                value ? comment.parentNode?.replaceChild(el, comment) : el.parentNode.replaceChild(comment, el);
                break;
            case 'textContent':
                el.textContent = textContent.replace(new RegExp(doubleBracesReg), (str, key) => {
                    // 当双大括号字符与data中的key不匹配时, 不替换
                    return Object.keys(data).includes(key) ? data[key] : str
                })
                break;
            default:
                break;
        }
    });
}