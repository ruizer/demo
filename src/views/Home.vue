<template>
  <div class="home">
    <ul>
      <template v-for="(item, index) in menus">
        <li :key="index"
          @click="handle(item)">{{item.title}}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { getMenus } from "@/libs/util";
export default {
  name: "home",
  computed: {
    menus: () => getMenus()
  },
  methods: {
    handle(item) {
      this.$router.push(item.path);
    }
  }
};
</script>
<style lang="less">
.home {
  padding-top: 100px;
  ul {
    display: inline-block;
    margin: 0 auto;
    cursor: pointer;
    li {
      font-family: 微软雅黑;
      font-weight: 700;
      color: #00b0e7;
      padding: 5px;
      &:hover {
        background-color: #4cae4c;
        color: #ffffff;
        border-radius: 3px;
        text-indent: 10px;
      }
    }
  }
}
</style>
