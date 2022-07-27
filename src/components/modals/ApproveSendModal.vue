<template>
  <div class="modal-inner approve-send-modal">
    <ModalCloseBtn @click.native="$emit('close')" />
    <div class="approve-send-wrapper">
      <div class="apprrove-modal-text">
        <h2>לפני ששולחים</h2>
        <p>ההודעה תשלח ל- 1,200 מנויים. שים לב, פעולה זו אינה ניתנת לביטול</p>
        <Button text="אישור" class="approve-send-btn" @click.native="sendMessage" />
        <button class="go-back" type="button" @click="$emit('close')">חזור למסך העריכה</button>
      </div>
      <MessageCard 
        :imageUrl="imageUrl"
        :title="title"
        :text="text"
        :buttonText="buttonText"
        :buttonUrl="buttonUrl"
      />
    </div>
    
  </div>
</template>

<script>
import ModalCloseBtn from '../ModalCloseBtn.vue';
import MessageCard from '../MessageCard.vue';
import Button from "@/components/Button.vue"
import SendSuccessModal from './SendSuccessModal.vue';

export default {
  name: "ApproveSendModal",
  props: {
    imageUrl: String,
    title: String,
    text: String,
    buttonText: String,
    buttonUrl: String
  },
  components: {
    ModalCloseBtn,
    MessageCard,
    Button
  },
  methods: {
    sendMessage() {
      // Sending message here
      this.$emit('close');
      this.$modal.show(
        SendSuccessModal,
        {},
        {width: '526px', height: '270px'}
      );
    }
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

.modal-inner.send-success-modal {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-inner.send-success-modal .title {
    margin-bottom: 60px;
    max-width: 342px;
}
</style>
