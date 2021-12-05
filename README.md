[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm type definitions](https://img.shields.io/npm/types/next-vue-device-detector.svg?style=flat)
![npm](https://img.shields.io/npm/dt/next-vue-device-detector.svg?style=flat)

# Next-vue-device-detector

![](https://raw.githubusercontent.com/dreambo8563/static-assets/master/watcher2.png)

**next-vue-device-detector** is a simple vue plugin to inspect the device type.

- focus on mobile
- vue 3 friendly
- strong typed


### Install

```cmd
npm install next-vue-device-detector --save
```

### Quick Start

```ts
import { createDeviceDetector } from "next-vue-device-detector";

export const device = createDeviceDetector()
createApp(App).use(device).mount('#app')
```

### Methods

- In Setup()
```ts
    const d = useDevice()
    console.log(d.android, "in setup");
```
- Outside Setup()
```ts
import { createDeviceDetector } from "next-vue-device-detector";

export const device = createDeviceDetector()
createApp(App).use(device).mount('#app')
console.log(device.android);
```

### API list

you can get the following properties under device

```ts
interface IDeviceDetector {
  ios: Boolean
  iphone: Boolean
  iphoneX: Boolean
  iPhoneXR: Boolean
  iPhoneXSMax: Boolean
  ipod: Boolean
  ipad: Boolean
  android: Boolean
  androidPhone: Boolean
  windows: Boolean
  mobile: Boolean
  dingding: Boolean //钉钉
  wechat: Boolean, // 微信
  wechatMiniApp: Boolean //微信小程序
}
```

eg.
on iphoneX

```ts
const device = useDevice()

console.log(device.iphoneX) // true
console.log(device.ios) // true
console.log(device.android) // false
```


## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/6948318?v=4" width="100px;" alt="Vincent Guo"/><br /><sub><b>Vincent Guo</b></sub>](https://dreambo8563.github.io/)<br />[💻](https://github.com/dreambo8563/vue-DeviceDetector/commits?author=dreambo8563 "Code") [📖](https://github.com/dreambo8563/vue-DeviceDetector/commits?author=dreambo8563 "Documentation") [🚇](#infra-dreambo8563 "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
