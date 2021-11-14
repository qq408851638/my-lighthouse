<script setup lang="ts">
import { ref } from 'vue'
const aaa = (b:number)=>{

}
const count = ref(0)
</script>

<template>
  <div class="father">
    ggg
    <div class="son">再试试
    </div>
    <i class="zan zan-pufayinhang"></i>
  </div>
</template>

<style scoped lang="less">
  .father{
    color: #333;
    .son{
      color: red;
      width: 1rem;
      height: 1rem;
      background-color: greenyellow;
    }
    .zan-pufayinhang{
      font-size: 1rem;
    }
  }
</style>
