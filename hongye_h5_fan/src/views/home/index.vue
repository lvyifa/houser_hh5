<template>
  <div class="main">
    <header>头部</header>
    <main>
      <router-view></router-view>
    </main>
    <footer>底部</footer>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
header {
  width: 100%;
  height: 50px;
}
main {
  flex: 1;
}
footer {
  width: 100%;
  height: 50px;
}
</style>
