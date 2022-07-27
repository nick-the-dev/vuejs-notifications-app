<template>

<div class="modal-inner send-success-modal">
  <ModalCloseBtn @click.native="$emit('close')" />
  <h2 class="title">ההודעה נשלחת ל-1,200 המנויים שלך. במסך הראשי תוכל להתעדכן בסטטוס השליחה.</h2>
  <router-link to="/">
    <Button text="עבור למסך הראשי" @click.native="$emit('close')" />
  </router-link>
  
</div>
  
</template>

<script>
import ModalCloseBtn from '../ModalCloseBtn.vue';
import Button from '../Button.vue';

export default {
  name: "SendSuccessModal",
  components: {
    ModalCloseBtn,
    Button
  }
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
