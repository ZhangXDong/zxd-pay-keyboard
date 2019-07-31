// pay.vue写我们的组件
import keyboard from './pay'

// 定义插件
const myPlugin = {
    // 该插件有一个install方法
    // install方法第一个参数是传入的Vue，第二个参数是插件的自定义参数
    install(Vue, options) {
        // 将其注册为Vue的组件，vpay是组件名，keyboard是我们开发的组件。
        Vue.component('keyboard', keyboard)
    }
}

export default myPlugin

