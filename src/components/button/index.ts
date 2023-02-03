
// src/components/button/index.ts
import type { App, Plugin } from 'vue'

import Button from './button.vue'

export default {
    install(Vue: App) {
        Vue.component(Button.name, Button)
    }
} as Plugin

export {
    Button as DSButton
}
