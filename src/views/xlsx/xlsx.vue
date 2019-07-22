<template>
  <div class="analyze-excel">
    <h1>在浏览器中使用 js-xlsx ，实现纯前端解析Excel文件，实现批量导入功能</h1>
    <div class="analyze-excel-input">
      <input type="file"
        ref="file"
        :id="fileId"
        @change="changeFile" />
      <label :for="fileId">导入Excel</label>
    </div>
    <template v-if="workbook">
      <div class="excel-content">
        <a href="javascript:;"
          @click="buildCSV">生成CSV格式(处理过)</a>
        <a href="javascript:;"
          @click="buildHTML">生成HTML</a>
        <a href="javascript:;"
          @click="buildOBJ">生成一个对象数组</a>
        <a href="javascript:;"
          @click="buildUTF16">生成UTF16格式化文本</a>
        <a href="javascript:;"
          @click="buildList">生成公式列表</a>
      </div>
      <div v-html="content"></div>
    </template>
    <div ref="jsoneditor"></div>
  </div>
</template>

<script>
import XLSX from "xlsx";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";

export default {
  name: "analyze-excel",
  data() {
    return {
      fileId: `file-${Math.floor(Math.random() * 1000)}`,
      jsonTree: null,
      workbook: null,
      content: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.jsonTree) {
        this.jsonTree.destory();
      }
      const container = this.$refs.jsoneditor;
      const options = {
        mode: "view"
      };
      this.jsonTree = new JSONEditor(container, options);
    });
  },
  methods: {
    changeFile(e) {
      if (!e.target.files) return;
      this.spinShow = true;
      const file = e.target.files[0];
      this.readFileForWorkbook(file).then(wb => {
        this.workbook = wb;
        this.jsonTree.set(wb);
      });
    },
    readFileForWorkbook(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let wb;
        reader.onload = res => {
          const data = res.target.result;
          wb = XLSX.read(data, {
            type: "binary"
          });
          resolve(wb);
        };
        reader.onerror = e => {
          reject(e);
        };
        reader.readAsBinaryString(file);
      });
    },
    analysisWorkbook(type) {
      let list = [];
      let fun = null;
      switch (type) {
        case "csv":
          fun = XLSX.utils.sheet_to_csv;
          break;
        case "txt":
          fun = XLSX.utils.sheet_to_txt;
          break;
        case "html":
          fun = XLSX.utils.sheet_to_html;
          break;
        case "formulae":
          fun = XLSX.utils.sheet_to_formulae;
          break;
        default:
          fun = XLSX.utils.sheet_to_json;
          break;
      }
      this.workbook.SheetNames.forEach(sheet => {
        const ref = this.workbook.Sheets[sheet]["!ref"];
        if (ref) {
          list = list.concat(fun(this.workbook.Sheets[sheet]));
        }
      });
      return list;
    },
    buildCSV() {
      const csvlist = this.analysisWorkbook("csv");
      this.content = "";
      csvlist.forEach(csv => {
        this.content = this.content + this.handleCSV(csv);
      });
    },
    handleCSV(csv) {
      let html = "<table>";
      const rows = csv.split("\n").filter(v => v && /[^,]/.test(v));
      // rows.pop(); // 最后一行没用的
      rows.forEach((row, idx) => {
        const columns = row.split(",").filter(v => v);
        columns.unshift(idx + 1);
        if (idx == 0) {
          html += "<tr>";
          for (let i = 0; i < columns.length; i++) {
            html +=
              "<th>" +
              (i == 0 ? "" : String.fromCharCode(65 + i - 1)) +
              "</th>";
          }
          html += "</tr>";
        }
        html += "<tr>";
        columns.forEach(column => {
          html += "<td>" + column + "</td>";
        });
        html += "</tr>";
      });
      html += "</table>";
      return html;
    },
    buildHTML() {
      this.content = this.analysisWorkbook("html").toString();
    },
    buildOBJ() {
      this.content = this.analysisWorkbook();
    },
    buildUTF16() {
      this.content = this.analysisWorkbook("txt").toString();
    },
    buildList() {
      this.content = this.analysisWorkbook("formulae");
    }
  }
};
</script>
<style lang="less" scoped>
.analyze-excel {
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding-top: 100px;
  .analyze-excel-input {
    display: inline-block;
    position: relative;
    margin-bottom: 20px;
    input {
      visibility: hidden;
      line-height: 20px;
      width: 70px;
    }
    label {
      width: 70px;
      height: 32px;
      font-size: 12px;
      color: #fff;
      background: #f74c5f;
      border-radius: 4px;
      line-height: 32px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
  .excel-content {
    display: inline-block;
    a {
      padding: 10px;
    }
  }
}
</style>
