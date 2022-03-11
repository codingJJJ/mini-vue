function initDom() {
    const vm = this;
    const dom = vm.$dom = document.createElement('div');
    // 将template放入dom
    dom.innerHTML = vm.$template;
    // 并获取所有的dom存入¥doms
    vm.$doms = Array.from(dom.getElementsByTagName('*'))
}

export default initDom