<template>
  <div style="border: 1px solid #000">
    {{ valueHtml }}
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { SlateElement } from "@wangeditor/editor";
type ImageElement = SlateElement & {
  src: string;
  alt: string;
  url: string;
  href: string;
};
export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("<p>写点东西吧求求了~</p>");

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = "<p></p>";
      }, 1500);
    });
    const toolbarConfig = {};
    const editorConfig = {
      MENU_CONF: { uploadImage: String },
    };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor: any) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };
    type InsertFnType = (url: string, alt: string, href: string) => void;
    editorConfig.MENU_CONF["uploadImage"] = {
      server: "http://111.67.201.44:7001/dev/upload",
      fieldName: "custom-field-name",
      // 单个文件的最大体积限制，默认为 2M
      maxFileSize: 10 * 1024 * 1024, // 1M
      // 最多可上传几个文件，默认为 100
      maxNumberOfFiles: 100,
      // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
      allowedFileTypes: ["image/*"],
      headers: {
        otherKey: localStorage.getItem("token"),
      },
      // 超时时间，默认为 10 秒
      timeout: 5 * 1000, // 5 秒
      // 自定义插入图片
      customInsert(res: any, insertFn: InsertFnType) {
        // TS 语法
        // customInsert(res, insertFn) {                  // JS 语法
        // res 即服务端的返回结果

        // 从 res 中找到 url alt href ，然后插入图片
        console.log(res);

        // insertFn(res.url, res.url, res.url);
      },
    };

    return {
      editorRef,
      valueHtml,
      mode: "default", // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
    };
  },
};
</script>

<style lang="less"></style>
