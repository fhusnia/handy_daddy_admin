<template>
  <div class="container mx-auto">
    <div class="flex items-center content-center justify-center">
      <LeftComponent></LeftComponent>
      <RightComponent></RightComponent>
    </div>
  </div>
</template>

<script>
import LeftComponent from "@/components/LogIn/LeftComponent.vue";
import RightComponent from "@/components/LogIn/RightComponent.vue";

export default {
  name: "LogIn",
  components: {
    LeftComponent,
    RightComponent,
  },
};
</script>
<style></style>
