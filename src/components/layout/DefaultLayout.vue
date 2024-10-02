<template>
  <div class="container">
    <div class="w-screen">
      <div class="flex">
        <div class="w-1/5 bg-white">
          <SideBar v-if="!isLoginPath"></SideBar>
        </div>

        <div class="w-4/5">
          <TopBar v-if="!isLoginPath"></TopBar>

          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import TopBar from "./TopBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    SideBar,
    TopBar,
  },
  computed: {
    isLoginPath() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style></style>
