<template>
  <div class="container bg-white fixed">
    <div class="pr-8 p-4">
      <div class="flex">
        <div class="text-center w-3/4">
          <h1 class="text-3xl font-bold">{{ headerText }}</h1>
        </div>
        <div class="w-1/4">
          <div class="p-1">
            <div class="flex gap-2">
              <div
                class="pt-1 cursor-pointer w-2/4 rounded-lg text-center bg-yellow-400 h-8"
              >
                <a @click="logout">Log Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/eventBus";
export default {
  name: "TopBar",
  data() {
    return {
      headerText: "",
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem("authToken");
      this.$router.push({ name: "login" });
    },
  },
  created() {
    eventBus.$on("updateHeader", (newText) => {
      this.headerText = newText;
    });
  },
};
</script>

<style lang="scss" scoped></style>
