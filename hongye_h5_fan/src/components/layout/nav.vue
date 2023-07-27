<template>
  <div class="container">
    <button @click="onClickLeft">&lt;</button>
  </div>
</template>

<script lang="ts" setup>
const onClickLeft = () => history.back();
</script>

<style lang="less"></style>
