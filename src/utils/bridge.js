/*
 * @Author: canlong.shen 562172151@qq.com
 * @Date: 2022-08-31 18:29:17
 * @LastEditors: canlong.shen 562172151@qq.com
 * @LastEditTime: 2022-09-01 16:19:56
 * @FilePath: \micro-app-demo-own\src\utils\bridge.js
 * @Description: 基座 子应用 通信
 */
import microApp from "@micro-zoe/micro-app";

export default class Bridge {
  static instance = null;
  static get Instance() {
    if (!this.instance) {
      this.instance = new Bridge();
    }

    return this.instance;
  }

  /**
   * @Author: canlong.shen
   * @description: 构造函数
   * @default:
   * @return {*}
   */
  constructor() {
    this.connect();
  }
  // 路由跳转 router
  _router = null;
  // 注册的回调函数
  _CallBackMapping = [];
  // 订阅的主题
  _subscriberList = [];

  /**
   * @Author: canlong.shen
   * @description: 基座向子应用推送数据
   * @default:
   * @return {*}
   */
  publishToChilds(data = {}, { appname = [] } = {}) {
    if (!data) {
      console.log("子应用推送数据无效", data);
      return;
    }

    let appnameList = appname;

    if (typeof appname === "string") {
      appnameList = [appname];
    }

    if (appnameList && appnameList.length) {
      for (const name of appnameList) {
        this.publish(`/childs/${name}/data`, data);
      }
    } else {
      // 像所有子应用推送数据
      this.publish("/childs/all/data", data);
    }
  }

  /**
   * @Author: canlong.shen
   * @description: 向所有子应用推送基座路由
   * @default:
   * @param {*} router
   * @return {*}
   */
  setRouter(router) {
    if (!router) {
      console.log("router 无效", router);
      return;
    }

    this._router = router;
    this.publish("/childs/router/register", {
      payload: {
        router,
      },
    });
  }

  /**
   * @Author: canlong.shen
   * @description: 监听全局应用
   * @default:
   * @return {*}
   */
  connect() {
    const onMessage = (message = {}) => {
      console.log("基座应用消息来了", message);
      const { topic = "", payload = {} } = message;
      const subscribeList = this._subscriberList;
      if (subscribeList && subscribeList.length) {
        for (const subscriber of subscribeList) {
          const { topic: subTopic, callBack } = subscriber;
          if (subTopic === topic) {
            callBack(payload);
          }
        }
      }
    };
    microApp.addGlobalDataListener(onMessage, true);
  }

  /**
   * @Author: canlong.shen
   * @description:
   * @default:
   * @param {*} topic // 订阅的主题
   * @param {*} callBack // 回调方法
   * @return {*}
   */
  subscribe(topic = "", callBack = () => {}, { id = "" } = {}) {
    this._subscriberList.push({
      topic,
      callBack,
      id,
    });
  }
  /**
   * @Author: canlong.shen
   * @description: 推送数据
   * @default:
   * @param {*} topic   主题
   * @param {*} payload  载荷
   * @return {*}
   */
  publish(topic = "", payload = {}) {
    if (!(!!topic && typeof topic === "string")) {
      console.log("推送子应用消息失败,主题无效", topic);
      return;
    }
    if (typeof payload !== "object") {
      console.log("推送子应用消息失败,负载无效", payload);
      return;
    }
    microApp.setGlobalData({
      topic,
      payload,
    });
  }

  /**
   * @Author: canlong.shen
   * @description: 消息
   * @default:
   * @return {*}
   */
  onMessage(message) {
    console.log("基座应用消息来了", message);
    const { topic = "", payload = {} } = message;
    const subscribeList = this._subscriberList;
    if (subscribeList && subscribeList.length) {
      for (const subscriber of subscribeList) {
        const { topic: subTopic, callBack } = subscriber;
        if (subTopic === topic) {
          callBack(payload);
        }
      }
    }
  }

  /**
   * @Author: canlong.shen
   * @description: 注册回调函数
   * @default:
   * @param {*} socketType
   * @param {*} callBack
   * @return {*}
   */
  registerCallBack(socketType, callBack) {
    this._CallBackMapping[socketType] = callBack;
  }

  /**
   * @Author: canlong.shen
   * @description:  取消某一个回调函数
   * @default:
   * @param {*} socketType
   * @return {*}
   */
  unRegisterCallBack(socketType) {
    this._CallBackMapping[socketType] = null;
  }
}
