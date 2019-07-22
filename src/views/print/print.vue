<template>
  <div class="print">
    <div class="print-btn"
      :style="{width: `${page.width + 2}px`}">
      <p>{{fileName}}</p>
      <button @click="exportPrintAll">全局打印</button>
      <button @click="exportPrint">局部打印</button>
    </div>
    <div class="print-content"
      :style="{width: `${page.width + 2}px`, minHeight: `${page.height + 2}px`, padding: `${padding}px`}">
      <div ref="content"
        class="print-content-dom">
        <div class="print-content-dom_title">
          <span>{{company}}</span>
          <span class="dom-title-right">{{fileName}}</span>
        </div>
        <div class="print-content-dom_form"
          v-if="form && form.length">
          <div :style="formStyle(index)"
            v-for="(item, index) in form"
            :key="index">
            <label>{{item[0]}}:</label>
            <span>{{item[1]}}</span>
          </div>
        </div>
        <table class="print-content-dom_table"
          v-if="tableHeader && tableBody">
          <thead>
            <tr style="background: #eee;"
              class="no-Break">
              <th v-for="(h, i) in tableHeader"
                :key="i">{{h}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(b, i) in tableBody"
              :key="i"
              class="no-Break">
              <td v-for="(d, j) in b"
                :key="j">{{d}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { printPartial } from "../../libs/util";

// 计算分辨率
const arrDPI = [];
const tmpNode = document.createElement("div");
tmpNode.style.cssText =
  "width:1in;height:1in;position:absolute;left:0;top:0;z-index:99;visibility:hidde";
document.body.appendChild(tmpNode);
arrDPI[0] = parseInt(tmpNode.offsetWidth);
arrDPI[1] = parseInt(tmpNode.offsetHeight);
tmpNode.parentNode.removeChild(tmpNode);
const DPI = Math.min(...arrDPI);
export default {
  name: "print",
  data() {
    return {
      fileName: "XX表单",
      tableHeader: ["#", "单号", "客户编码", "客户名称", "总金额", "创建时间"],
      tableBody: [
        ["1", "112", "K1001", "王小姐", "674", "2019-07-19"],
        ["2", "134", "K1341", "王小姐", "1674", "2019-07-19"],
        ["3", "154", "K1111", "王小姐", "3674", "2019-07-19"],
        ["4", "152", "K2001", "王小姐", "5474", "2019-07-19"],
        ["5", "122", "K3001", "王小姐", "6234", "2019-07-19"]
      ],
      form: [
        ["编码", "XXXX"],
        ["姓名", "XXXXXX"],
        ["总金额", "XXX"],
        ["时间", ""],
        ["公司名称", "XXXX技术股份有限公司"]
      ],
      mode: "Portrait", // 打印横竖方向，竖portrait，横Landscape
      company: "XXXX科技有限公司"
    };
  },
  computed: {
    page() {
      const width = 8.27 * DPI;
      const height = 11.69 * DPI;
      if (this.mode === "Landscape") {
        return { width: height, height: width };
      }
      return { width, height };
    },
    /** 边距 */
    padding() {
      // 1英寸 = 25.4 毫米
      // 边距为10mm
      return (1 / 25.4) * 10 * DPI;
    }
  },
  methods: {
    /** form样式 */
    formStyle(index) {
      let width = "49%";
      let marginRight = index % 2 === 0 ? "2%" : "";
      if (this.mode === "Landscape") {
        width = "33%";
        marginRight = index % 3 === 0 ? "1%" : "";
      }
      return {
        display: "inline-block",
        width,
        marginRight
      };
    },
    /**
     * @description 打印
     */
    exportPrint() {
      printPartial(this.$refs.content, {
        title: this.fileName,
        mode: this.mode
      });
    },
    /**
     * @description 全局打印
     */
    exportPrintAll() {
      window.print();
    }
  }
};
</script>

<style lang="less">
.print {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .print-btn {
    display: flex;
    p {
      flex: 1;
    }
    button {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .print-content {
    margin-top: 20px;
    border: 1px solid #ebebeb;
    padding: 10px;
    box-sizing: border-box;
  }
}

.print-content-dom {
  font-family: SimSun;
  font-size: 14px;
  font-weight: normal;
}

.print-content-dom_title {
  font-size: 20px;
  font-weight: bold;
  padding: 20px 0 40px 0;
  .dom-title-right {
    padding-right: 40px;
    padding-left: 5px;
    border-left: 4px solid #eee;
    float: right;
  }
}

.print-content-dom_form {
  margin-bottom: 20px;
  label {
    display: inline-block;
    width: 35%;
    text-align: right;
    margin-right: 5px;
    color: #363636;
    font-weight: bold;
    vertical-align: top;
  }
  span {
    display: inline-block;
    width: 60%;
    color: #363636;
    vertical-align: top;
  }
}

.print-content-dom_table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #909399;
  color: #363636;
  width: 100%;
  text-align: center;
  table-layout: auto;
  th,
  td {
    border: 1px solid #909399;
    padding: 5px;
    word-break: break-all;
  }
}

@media print {
  .no-Break {
    break-inside: avoid;
  }
}
</style>
