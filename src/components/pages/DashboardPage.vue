<template>
  <div class="app-container">
    <div class="notifications-header">
      <div class="greeting-wrapper">
        <h2>היי מור, ברוכים הבאים למערכת שליחת הודעות</h2>
        <button class="app-info-btn">?מה זה מערכת שליחת הודעות</button>
      </div>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
export default {
  name: "DashboardPage",
  components: {
    Button,
  },
};
</script>

<style>
.app-container {
  width: 90%;
  max-width: 1110px;
  padding: 0 15px;
  margin: 0 auto;
}

.notifications-header {
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.greeting-wrapper {
  display: flex;
  align-items: baseline;
}
</style>
