const { parse, mergeTemplateToScript } = require('./parse')

function vueLoader(source) {
    const { template, script } = parse(source);

    return mergeTemplateToScript(template, script)
}

module.exports = vueLoader;
