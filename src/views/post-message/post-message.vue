<template>
  <div class="post-message">
    <button class="open-window"
      @click.stop="openWindow">打开子窗口</button>
    <br />
    <p v-for="(item, index) in msg" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "post-message",
  data() {
    return {
      childWindow: null,
      timer: null,
      msg: []
    };
  },
  methods: {
    /**
     * @description 打开子窗口，并监听message事件
     * */
    openWindow() {
      window.removeEventListener("message", this.handleMessage, false);
      if (this.childWindow) {
        this.childWindow.close();
      }
      // 添加消息接收函数
      window.addEventListener("message", this.handleMessage, false);
      const url = window.location.href.replace(
        "post-message",
        "post-message-test"
      );
      this.childWindow = window.open(
        url,
        "postMessage",
        "width=600,height=400"
      );
      this.timer = window.setInterval(() => {
        if (this.childWindow && this.childWindow.closed) {
          this.clearInterval();
          window.removeEventListener("message", this.handleMessage, false);
        }
      }, 1000);
    },
    /** @description 移除定时任务 */
    clearInterval() {
      if (this.timer) {
        window.clearInterval(this.timer);
      }
    },
    /** @description 消息接收处理函数 */
    handleMessage(e) {
      // e.origi n是指发送的消息源，如不验证会导致会导致安全问题
      if (e.origin !== window.location.origin) {
        return;
      }
      // e.data 是发送过来的信息
      this.msg.push(e.data);
      // event.source 是指子窗口，主动向子窗口发送消息可以用 popup
      event.source.postMessage(
        `我是主窗口，我接收到消息了${new Date()}`,
        window.location
      );
    }
  },
  beforeDestroy() {
    window.removeEventListener("message", this.handleMessage, false);
  }
};
</script>

<style lang="less">
.post-message {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .open-window {
    width: 100px;
    cursor: pointer;
  }
}
</style>
