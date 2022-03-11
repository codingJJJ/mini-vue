function parse(source) {
    const template = getTemplate(source)
    const script = getScript(source)
    return { template, script }
}

function getTemplate(source) {
    const reg = /(?<=<template>)([\s\S]+?)(?=<\/template>)/g;
    return source.match(reg)?.[0]
}

function getScript(source) {
    const reg = /(?<=<script>)([\s\S]+?)(?=<\/script>)/g;
    return source.match(reg)?.[0]
}

// 将templatre 合并到script
function mergeTemplateToScript(temp, script) {
    return script.replace(/(?<=export\s+default\s+)(\{)/, () => {
        return `
            {
                template: \`${temp}\`,
        `
    })
}

module.exports = {
    parse,
    mergeTemplateToScript
}
