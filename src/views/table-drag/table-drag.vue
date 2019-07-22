<template>
  <div class="table-drag">
    <table>
      <thead>
        <tr>
          <th v-for="(h, i) in tableHeader"
            :key="i"
            @mousedown="mouseDown"
            @mouseup="mouseUp"
            @mousemove="mouseMove">{{h}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(b, i) in tableBody"
          :key="i">
          <td v-for="(d, j) in b"
            :key="j">{{d}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "table-drag",
  data() {
    return {
      tableHeader: ["#", "单号", "客户编码", "客户名称", "总金额", "创建时间"],
      tableBody: [
        ["1", "112", "K1001", "王小姐", "674", "2019-07-19"],
        ["2", "134", "K1341", "王小姐", "1674", "2019-07-19"],
        ["3", "154", "K1111", "王小姐", "3674", "2019-07-19"],
        ["4", "152", "K2001", "王小姐", "5474", "2019-07-19"],
        ["5", "122", "K3001", "王小姐", "6234", "2019-07-19"]
      ],
      localTd: null
    };
  },
  methods: {
    /** 鼠标按下 */
    mouseDown(e) {
      // 记录单元格
      if (!(e && e.target)) return;
      this.localTd = e.target;
      if (e.offsetX > this.localTd.offsetWidth - 10) {
        this.localTd.mouseDown = true;
        this.localTd.oldX = e.x;
        this.localTd.oldWidth = this.localTd.offsetWidth;
      }
    },
    /** 鼠标抬起 */
    mouseUp(e) {
      // 结束宽度调整
      if (!(e && e.target)) return;
      if (!this.localTd) this.localTd = e.target;
      this.localTd.mouseDown = false;
      this.localTd.style.cursor = "default";
    },
    /** 鼠标移动 */
    mouseMove(e) {
      if (!(e && e.target)) return;
      const vm = e.target;
      // 更改鼠标样式
      if (e.offsetX > vm.offsetWidth - 10) {
        vm.style.cursor = "col-resize";
      } else {
        vm.style.cursor = "default";
      }
      // 取出暂存的Table Cell
      if (!this.localTd) this.localTd = vm;
      if (this.localTd.mouseDown !== null && this.localTd.mouseDown === true) {
        this.localTd.style.cursor = "default";
        if (this.localTd.oldWidth + (e.x - this.localTd.oldX) > 0) {
          this.localTd.width =
            this.localTd.oldWidth + (e.x - this.localTd.oldX);
        }
        // 调整列宽
        this.localTd.style.width = this.localTd.width;
        this.localTd.style.cursor = "col-resize";
        // 调整该列中的每个Cell
        let table = this.localTd;
        while (table.tagName !== "TABLE") table = table.parentElement;
        for (let j = 0; j < table.rows.length; j++) {
          table.rows[j].cells[
            this.localTd.cellIndex
          ].width = this.localTd.width;
        }
      }
    }
  }
};
</script>

<style lang="less">
.table-drag {
  padding-top: 50px;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #909399;
    color: #363636;
    width: 80%;
    text-align: center;
    table-layout: auto;
    margin: 0 auto;
  }
  td,
  th {
    border: 1px solid #909399;
    padding: 5px;
    word-break: break-all;
  }
}
</style>
