import { createApp } from 'vue'
import App from './App.vue'

import { createDeviceDetector } from "./lib/main";

export const device = createDeviceDetector()

createApp(App).use(device).mount('#app')


console.log(device.android);
console.log(device.ios);
console.log(device.ipad);