// src/index.js
// 这里import 的 btn和btnDemo.vue的name属性名相同 ！

import btn from './src/components/AwaitButton.vue'

btn.install = Vue => Vue.component(btn.name, btn) // 给组件配置install方法

export default btn