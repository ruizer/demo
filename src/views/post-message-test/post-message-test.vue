<template>
  <div class="post-message-test">
    <button class="open-window"
      @click.stop="sendMsg">发送</button>
    <br />
    <p v-for="(item, index) in msg" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: "post-message-test",
  data() {
    return {
      msg: []
    };
  },
  methods: {
    /** @description 向父窗口发送信息 */
    sendMsg() {
      // 移除消息接收函数
      window.removeEventListener("message", this.handleMessage, false);
      // 添加消息接收函数
      window.addEventListener("message", this.handleMessage, false);
      // window.opener指的就是父窗口（打开本窗口的窗口）
      window.opener.postMessage(
        `我是子窗口，向主窗口发送消息${new Date()}`,
        window.location
      );
    },
    /** @description 消息接收处理函数 */
    handleMessage(e) {
      // e.origi n是指发送的消息源，如不验证会导致会导致安全问题
      if (e.origin !== window.location.origin) {
        return;
      }
      // e.data 是发送过来的信息
      this.msg.push(e.data);
    }
  },
  beforeDestroy() {
    window.removeEventListener("message", this.handleMessage, false);
  }
};
</script>

<style lang="less">
.post-message-test {
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
