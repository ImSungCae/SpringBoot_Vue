<script>
import MainMap from '@/components/MainMap.vue'
import SideBar from "@/components/SideBar.vue";

export default {
  name: 'App',
  components: {
    SideBar,
    MainMap
  }
}
</script>

<template>
  <div id="app">
    <MainMap />
    <SideBar class="side-bar" />
  </div>
</template>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  > .side-bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
