<template>
  <div class="container">
    <div class="navbar">
      <span @click="onClickLeft">&lt;</span>
      <span>VR看房</span>
      <span></span>
    </div>
    <div class="demo-container">
      <div id="viewer"></div>
    </div>
  </div>
</template>

<script lang="js">


import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import "photo-sphere-viewer/dist/plugins/markers.css";
export default {
  data() {
    return {
      viewer: "",
      markersPlugin: "",
      itemArr: [
        {
          name: "house0",
          img: "https://t8.baidu.com/it/u=3301054347,759154165&fm=193",
        },
        {
          name: "house1",
          // img: require('@/assets/imgs/demo/demo1.jpeg'),
          img: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ebbea0343bf44d2aabab3dc58aa4c3a~tplv-k3u1fbpfcp-watermark.awebp",
        },
        {
          name: "house2",
          img: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6df92ba39aa94aec889582df60d3d0d0~tplv-k3u1fbpfcp-watermark.awebp",
        },
        {
          name: "house3",
          img: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40135df7df034eb5a76daa76f26fe046~tplv-k3u1fbpfcp-watermark.awebp",
        },
      ],
      currentDataMark: [],
      // 数据配置，每个图片中存在几个可点击的标记，tooltip对应的是图片名称
      dataMark: {
        house0: [
          {
            // 自定义样式的标记
            id: "circle0",
            longitude: 1.5,
            latitude: -0.28,
            html: "<b>house1</b> &hearts;", // 显示内容
            anchor: "center center",
            scale: [0.5, 1.5],
            style: {
              // maxWidth: "100px",
              color: "white",
              fontSize: "20px",
              fontFamily: "Helvetica, sans-serif",
              textAlign: "center",
            },
            note: 1,
          },
          {
            id: "circle1",
            tooltip: "house2",
            circle: 31,
            svgStyle: {
              fill: "rgba(255,255,0,0.3)",
              stroke: "yellow",
              strokeWidth: "2px",
            },
            longitude: -1.5,
            latitude: -0.28,
            anchor: "center center",
            note: 2,
          },
        ],
        house1: [
          {
            id: "circle0",
            tooltip: "house2",
            circle: 30,
            svgStyle: {
              fill: "rgba(255,255,0,0.3)",
              stroke: "yellow",
              strokeWidth: "2px",
            },
            longitude: 1.5,
            latitude: -0.28,
            anchor: "center center",
            note: 2,
          },
          {
            id: "circle1",
            tooltip: "house3",
            circle: 31,
            svgStyle: {
              fill: "rgba(255,255,0,0.3)",
              stroke: "yellow",
              strokeWidth: "2px",
            },
            longitude: -1.5,
            latitude: -0.28,
            anchor: "center center",
            note: 3,
          },
        ],
        house2: [
          {
            id: "circle0",
            tooltip: "house0",
            circle: 30,
            svgStyle: {
              fill: "rgba(255,255,0,0.3)",
              stroke: "yellow",
              strokeWidth: "2px",
            },
            longitude: 1.5,
            latitude: -0.28,
            anchor: "center center",
            note: 0,
          },
        ],
        house3: [
          {
            id: "circle0",
            tooltip: "house1",
            circle: 30,
            svgStyle: {
              fill: "rgba(255,255,0,0.3)",
              stroke: "yellow",
              strokeWidth: "2px",
            },
            longitude: 1.5,
            latitude: -0.28,
            anchor: "center center",
            note: 1,
          },
        ],
      },
    };
  },
  mounted() {
    //默认显示第一张照片
    this.currentDataMark = this.dataMark.house0;
    this.setViewer(this.itemArr[0].img);
  },
  methods: {
    setViewer(panorama) {
      if (this.viewer)
        try {
          this.viewer.destroy();
        } catch (e) {
          console.log(e);
          const viewer = document.querySelector("#viewer");
          viewer.removeChild(viewer.childNodes[0]);
        }
      this.viewer = new Viewer({
        container: document.querySelector("#viewer"),
        panorama: panorama,
        size: {
          width: "100vw",
          height: "100vh",
        },
        plugins: [
          [
            MarkersPlugin,
            {
              markers: this.currentDataMark,
            },
          ],
        ],
        navbar: [
          {
            hidden: false,
          },
        ],
      });
      this.viewer.once("ready", () => {
        //自动旋转
        this.viewer.startAutorotate();
      });
      this.markersPlugin = this.viewer.getPlugin(MarkersPlugin);
      this.markersPlugin.on("select-marker", (e, marker) => {
        // 判断数据中的note字段选择要进入的场景图片
        if (e.args[0].config.note) {
          let index = e.args[0].config.note;
          let indexName = "house" + index;
          this.currentDataMark = this.dataMark[indexName];
          this.setViewer(this.itemArr[e.args[0].config.note].img);
        }
      });
    },
  },
};
const onClickLeft = () => history.back();
</script>

<style lang="less" scoped>
.navbar {
  color: #fff;
  width: 100%;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, rgb(10, 121, 242), rgb(52, 160, 254));
  span {
    display: inline-block;
    font-size: 22px;
    padding-top: 20px;
  }
}
</style>
