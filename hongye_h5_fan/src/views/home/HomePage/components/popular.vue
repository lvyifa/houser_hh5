<template>
  <div>
    <div class="popular_nav">
      <b>热门楼盘</b>
      <span>更多</span>
    </div>
    <div class="popular_main">
      <dl>
        <dt>
          <img
            src="https://img0.baidu.com/it/u=890651766,3437002912&fm=253&fmt=auto&app=138&f=JPEG?w=643&h=500"
            alt=""
          />
        </dt>
        <dd>
          <p><b class="tit_b">石景区 紧邻龙湖天街s1生活配套齐全</b></p>
          <p>42平/2室 1厅 / 远洋新天地</p>
          <p>
            <b class="prive_b">114.98万</b>
            <span class="price_s">12100元/m²</span>
          </p>
          <p><button>小区</button></p>
        </dd>
      </dl>
      <dl>
        <dt>
          <img
            src="https://img0.baidu.com/it/u=890651766,3437002912&fm=253&fmt=auto&app=138&f=JPEG?w=643&h=500"
            alt=""
          />
        </dt>
        <dd>
          <p><b class="tit_b">石景区 紧邻龙湖天街s1生活配套齐全</b></p>
          <p>42平/2室 1厅 / 远洋新天地</p>
          <p>
            <b class="prive_b">114.98万</b>
            <span class="price_s">12100元/m²</span>
          </p>
          <p><button>小区</button></p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.popular_nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  b {
    font-size: 23px;
  }
  span {
    color: #666;
    font-size: 15px;
  }
}
.popular_main {
  width: 350px;
  height: 500px;
  // border: solid 1px #f00;
  border-bottom: 1px solid #f00;
  margin: 0 auto;
  dl {
    display: flex;
    width: 100%;
    height: 100px;
    margin-top: 20px;
    dt {
      width: 120px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      width: 200px;
      margin-left: 10px;
      line-height: 24px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .tit_b {
          font-size: 17px;
        }
        .prive_b {
          color: rgb(255, 153, 0);
        }
        .price_s {
          font-size: 14px;
          color: #666;
        }
        button {
          border: 0;
          width: 50px;
          background: #ccc;
          opacity: 0.8;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
