<template>
  <default-layout>
    <router-view class="h-screen" />
  </default-layout>
</template>

<script>
import DefaultLayout from "./components/layout/DefaultLayout.vue";
export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      const token = sessionStorage.getItem("authToken");
      this.isAuthenticated = !!token;
    },
  },
  // watch: {
  //   // This will watch the authentication state and update accordingly
  //   isAuthenticated(newVal) {
  //     if (!newVal) {
  //       this.$router.push('/login');  // Redirect to login if logged out
  //     }
  //   },
  // },
};
</script>

<style></style>
