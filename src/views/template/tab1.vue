<template>
  <div id="cloudWord"></div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, getCurrentInstance } from "vue";
import chartData from "@/assets/json/cloud.json";
import imgStr from "@/assets/json/img.json";
import "echarts-wordcloud";
const { proxy } = getCurrentInstance() as any;

onMounted(() => {
  nextTick(() => {
    setOptions();
  });
});
const setOptions = () => {
  const chart = proxy.$echarts.init(document.getElementById("cloudWord"));

  //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
  var maskImage = new Image();
  maskImage.src = imgStr.image;

  maskImage.onload = function () {
    const option = {
      backgroundColor: "#fff",
      tooltip: {
        show: false,
      },
      series: [
        {
          type: "wordCloud",
          gridSize: 1,
          sizeRange: [12, 55],
          rotationRange: [-45, 0, 45, 90],
          maskImage: maskImage,
          textStyle: {
            normal: {
              color: function () {
                return (
                  "rgb(" +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ")"
                );
              },
            },
          },
          left: "center",
          top: "center",
          // width: '96%',
          // height: '100%',
          right: null,
          bottom: null,
          // width: 300,
          // height: 200,
          // top: 20,
          data: chartData,
        },
      ],
    };
    chart.setOption(option);
    window.addEventListener("resize", () => {
      console.log(22)
      chart.setOption(option);
    });
  };
};
</script>

<style>
#cloudWord {
  width: 100%;
  height: 1000px;
}
</style>
