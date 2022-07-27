<template>
  <div class="modal-inner message-card-modal">
    <h4 class="modal-title">תצוגה מקדימה של ההודעה שלך</h4>
    <ModalCloseBtn @click.native="$emit('close')" />
    <MessageCard 
      :imageUrl="imageUrl"
      :title="title"
      :text="text"
      :buttonUrl="buttonUrl"
      :buttonText="buttonText"
    />
  </div>
</template>

<script>
import ModalCloseBtn from '../ModalCloseBtn.vue';
import MessageCard from '../MessageCard.vue';

export default {
  name: "MessageCardModal",
  props: {
    imageUrl: String,
    title: String,
    text: String,
    buttonUrl: String,
    buttonText: String
  },
  components: {
    ModalCloseBtn,
    MessageCard
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
