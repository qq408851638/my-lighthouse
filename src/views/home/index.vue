<template>
  <div class="container">
    <div class="header-img">
      <div class="name-content">
        <div class="left">
          <div class="name">姜鹏</div>
          <pre class="job">获客专员  巴拉巴拉</pre>
        </div>
        <div class="right">
          <img src="@/assets/img/touxiang.jpg" alt="...">
        </div>
      </div>
      <div class="header-foot"></div>
    </div>
    <van-tabs v-model="active" sticky swipeable @click="clickTab">
      <van-tab
        v-for="(item, index) in tabList"
        :title="item.title"
        :key="item.title"
        :name="index"
      >
      <div class="tab-main">
        <component :is="item.tab"></component>
      </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import tab1 from "../template/tab1.vue";
import tab2 from "../template/tab2.vue";
import tab3 from "../template/tab3.vue";
import tab4 from "../template/tab4.vue";
import tab5 from "../template/tab5.vue";
import tab6 from "../template/tab6.vue";
const active = ref(0);
const tabList = [
  { title: "概况", tab: tab1 },
  { title: "业绩", tab: tab2 },
  { title: "生涯", tab: tab3 },
  { title: "客户", tab: tab4 },
  { title: "轨迹", tab: tab5 },
  { title: "资料", tab: tab6 },
];
const clickTab = (name: number, title: string) => {};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .header-img {
    background: url("@/assets/img/header.jpeg");
    padding: 0;
    margin: 0;
    height: 2rem;
    padding:0 .3rem;
    width: 100%;
    position: relative;
    .header-foot {
      position: absolute;
      background-color: #fff;
      bottom: 0;
      left: 0;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      height: .26rem;
      width: 100%;
    }
    .name-content{
      color: #fff;
      display: flex;
      width: 100%;
      height: 1.74rem;
      align-items: center;
      justify-content: space-between;
      .left{
        
      .name{
        font-size: .4rem;
        font-weight: 700;
      }
      .job{
        margin-top: 5px;
      }
      }
      .right{
        width: 1rem;
        height: 1.1rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .tab-main{
    padding:.3rem .4rem;
  }
}
</style>
