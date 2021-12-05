import { App, inject, reactive, readonly, Ref, toRef, watchEffect } from "vue";
import { IDeviceDetector } from "../types";

const deviceSymbol = "$device"
const userAgent = window.navigator.userAgent.toLowerCase();
const devicePixelRatio = window.devicePixelRatio || 1;
const iPadOS13Up =
  window.navigator.platform === "MacIntel" &&
  window.navigator.maxTouchPoints > 1;


function find(needle: string) {
    return userAgent.indexOf(needle) !== -1;
  }
export function createDeviceDetector(): IDeviceDetector {

// The client user agent string.
// Lowercase, so we can use the more efficient indexOf(), instead of Regex
const windows = find("windows");
const  ipod = find("ipod");
const  ipad = find("ipad") || iPadOS13Up;
const  dingding = find("dingtalk");
const  wechat = find("micromessenger");
const  wechatMiniApp = find("miniprogram");
const  iphone = !windows && find("iphone");
const  iphoneX =
  iphone &&
  devicePixelRatio === 3 &&
  window.screen.width === 375 &&
  window.screen.height === 812;

const  iPhoneXR =
  iphone &&
  devicePixelRatio === 2 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

const  iPhoneXSMax =
  iphone &&
  devicePixelRatio === 3 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

const  ios = iphone || ipod || ipad;
const  android = !windows && find("android");
const  androidPhone = android && find("mobile");
const  mobile = androidPhone || iphone || ipod;
    const device:IDeviceDetector = {
        install(app:App){
            const d = this
            app.config.globalProperties[deviceSymbol] = d
            app.provide(deviceSymbol, d)
        },
        windows ,
        ipod,
        ipad ,
        dingding,
        wechat ,
        wechatMiniApp ,
        iphone,iphoneX,iPhoneXR,iPhoneXSMax,ios,mobile,android,androidPhone
    }

return device
   
}



export function useDevice():IDeviceDetector {
    return inject(deviceSymbol)!
}