import { update } from "./initRender";

/**
 * 响应式数据处理
 * @param {*} vm Vue实列
 * @param {*} data 数据
 * @returns 代理后vm
 */
function reactive(vm, data) {
    const keys = Object.keys(data)
    return new Proxy(vm, {
        get(target, key) {
            return Reflect.get(keys.includes(key) ? target.$data : target, key)
        },
        set(target, key, value) {
            let flag;
            if (keys.includes(key)) {
                flag = Reflect.set(target.$data, key, value)
                update(vm, key, value)
            } else {
                flag = Reflect.set(target, key, value)
            }
            return flag
        }
    })
}

export default reactive