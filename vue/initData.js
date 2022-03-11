import reactive from './reactive'

function initData(vm, dataSource) {
    // 因为data是一个函数 所以在保存data时 需要做一个判断
    const data = typeof dataSource === 'function' ? dataSource() : dataSource;

    vm.$data = data;
    
    // 数据响应式 这里我用的Proxy 如果definedProperty可能会更简单一些
    vm.$reactive = reactive(vm, data);
}

export default initData;