<template>
  <div id="app">
    <DashboardPage />
  </div>
</template>

<script>
import DashboardPage from "./components/pages/DashboardPage.vue";

export default {
  name: "App",
  components: {
    DashboardPage,
  },
};
</script>

<style>
@import "./assets/fonts/fonts.css";

* {
  box-sizing: border-box;
}

#app {
  background-color: #f5f5f5;
  direction: rtl;
  padding-top: 45px;
}
</style>
