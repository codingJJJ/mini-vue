import { render } from "./initRender";
/**
 * Vue初始化
 * @param {*} component 自己写的一个loader解析后的组件 其实就是一个对象
 */
function init(component) {
    // this 容易出现混淆 所以用vm便于认清实列
    const vm = this
    const { data, methods, template } = component;
    vm.$methods = methods;
    vm.$template = template;
    // 响应式数据
    vm.initData(vm, data);
    // 注册dom
    vm.initDom()
    // 注册vue数据与真实dom依赖
    vm.initProps()
    // 渲染
    render(vm)
}

export default init