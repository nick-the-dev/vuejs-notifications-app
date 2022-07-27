<template>
  <div>
    <div class="message-card">
      <div class="image-wrapper">
        <img :src="imageUrl ? imageUrl : imagePlaceholder" :alt="title" width="265" height="168" />
      </div>
      <h3 class="title">{{title}}</h3>
      <p class="text">{{text}}</p>
      <a :href="buttonUrl" class="link">{{buttonText}}</a>
    </div>
  </div>
</template>

<script>
import imagePlaceholder from "@/assets/placeholder.jpg";

export default {
  name: "MessagCard",
  data: function() {
    return {
      imagePlaceholder
    }
  },
  props: {
    imageUrl: String,
    title: String,
    text: String,
    buttonText: String,
    buttonUrl: String
  }
};
</script>

<style>
  .message-card .image-wrapper {
    position: relative;
    height: 168px;
    margin-bottom: 10px;
    overflow: hidden;
}

.message-card .image-wrapper img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
