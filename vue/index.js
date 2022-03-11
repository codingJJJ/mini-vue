import init from './init'
import initData from './initData';
import initProps from './initProps';
import initDom from './initDom'
import mount from './mount';

function Vue(component) {
    this.init(component)
    return this.$reactive
}

Vue.prototype.init = init

Vue.prototype.initData = initData
Vue.prototype.initProps = initProps
Vue.prototype.initDom = initDom
Vue.prototype.mount = mount

export function creatApp(component) {
    return new Vue(component)
}

export default Vue
