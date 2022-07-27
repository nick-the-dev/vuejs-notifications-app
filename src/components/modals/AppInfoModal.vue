<template>

<div class="modal-inner app-info">
  <button class="close-modal" area-label="Close modal" @click="$emit('close')">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
      <path d="M265,251.2l205-205c3.8-3.8,3.8-11.2,0-15c-3.7-3.8-11.2-3.8-15,0l-205,205L45,31.2c-3.8-3.8-11.2-3.8-15,0
                                s-3.8,11.2,0,15l205,205l-205,205c-3.8,3.8-3.8,11.2,0,15c2.5,1.3,5,2.5,7.5,2.5s5-1.2,7.5-2.5l205-205l205,205
                              c2.5,1.3,5,2.5,7.5,2.5s5-1.2,7.5-2.5c3.8-3.8,3.8-11.2,0-15L265,251.2z"></path>
    </svg>
  </button>
  <h2 class="title">מערכת שליחת הודעות</h2>
  <p class="text">לורם איפסום דולור סיט אמט, קונסקטטור אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף־קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה ש”יצמה ברורק“.</p>
</div>
  
</template>

<script>
export default {
  name: "AppInfoModal",
  props: {

  },
};
</script>

<style>
.vue-btn {
  font-family: "AlmoniNeueBold";
  font-size: 18px;
  display: flex;
  align-items: center;
  background: #bf5694;
  color: #fff;
  border: none;
  border-radius: 23px;
  align-self: center;
  padding: 10px 20px;
  cursor: pointer;
}

.vue-btn svg {
  margin-left: 11px;
}
</style>
