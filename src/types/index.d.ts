import { App } from "vue";

interface IDeviceDetector {
    install(app:App):void
    ios: boolean;
    iphone: boolean;
    iphoneX: boolean;
    iPhoneXR: boolean;
    iPhoneXSMax: boolean;
    ipod: boolean;
    ipad: boolean;
    android: boolean;
    androidPhone: boolean;
    windows: boolean;
    mobile: boolean;
    dingding: boolean;
    wechat: boolean;
    wechatMiniApp: boolean;
}

export function  createDeviceDetector(): IDeviceDetector

export function useDevice():IDeviceDetector 