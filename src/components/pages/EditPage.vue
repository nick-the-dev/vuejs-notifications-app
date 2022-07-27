<template>
  <div class="app-container edit-page">
    <router-link to="/">חזור ></router-link>
    <div class="edit-main">
      <h2 class="title">הודעה חדשה</h2>
      <div class="columns-wrapper">
        <div class="column column-1">
          <div class="input-wrapper">
            <label for="name">שם ההודעה (לניהול בלבד, לא מופיע ללקוח)</label>
            <input type="text" id="name" name="name" v-model="EditPageMessageName" />
          </div>
          <div class="input-wrapper">
            <label for="title">כותרת (עד 50 תווים)</label>
            <input type="text" id="title" name="title" v-model="EditPageMessageTitle" />
          </div>
          <div class="input-wrapper">
            <label for="text">טקסט (עד 100 תווים)</label>
            <textarea id="text" rows="6" name="text" v-model="EditPageMessageText" />
          </div>
        </div> 
        <div class="column column-2">
          <div class="image-upload-wrapper">
            <span class="edit-page-label">תמונה</span>
            <div class="image-upload">
              <img class="placeholder" :src="EditPageMessageImage ? EditPageMessageImage : imagePlaceholder" width="285" height="183" />
              <button class="remove-image" type="button" @click="removeImage">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g transform="translate(-502 -277)"><g transform="translate(502 277)" fill="#2f323a" stroke="#e7e7e9" stroke-width="1" opacity="0.502"><circle cx="17" cy="17" r="17" stroke="none"/><circle cx="17" cy="17" r="16.5" fill="none"/></g><g transform="translate(513.592 288.228)"><path d="M2.143,13A1.49,1.49,0,0,1,.715,11.463V3.676H9.285v7.787A1.49,1.49,0,0,1,7.857,13ZM0,2.5V.961H2.5S2.7,0,3.214,0H6.786C7.361,0,7.5.961,7.5.961H10V2.5Z" transform="translate(0.408 -0.228)" fill="#fff"/></g></g></svg>
              </button>
              <file-upload
                  extensions="gif,jpg,jpeg,png,webp"
                  accept="image/png,image/gif,image/jpeg,image/webp"
                  name="avatar"
                  class=""
                  post-action="/upload/post"
                  drop=true
                  v-model="files"
                  @input-filter="inputFilter"
                  @input-file="inputFile"
                  ref="upload">
                  <template v-if="!files.length">
                    <Button text="העלאת תמונה"></Button>
                  </template>
                  
                </file-upload>
              
            </div>
          </div>
          <div class="input-wrapper">
            <label for="btn-text">טקסט לכפתור</label>
            <input type="text" id="btn-text" name="btn-text" v-model="EditPageMessageButtonText" />
          </div>
          <div class="input-wrapper">
            <label for="btn-url">קישור להודעה</label>
            <input type="text" id="btn-url" name="btn-url" v-model="EditPageMessageButtonUrl" />
          </div>
        </div>
        <div class="column column-3">
          <span class="edit-page-label">תצוגה מקדימה</span>
          <MessageCard 
          :imageUrl="EditPageMessageImage"
          :title="EditPageMessageTitle"
          :text="EditPageMessageText"
          :buttonText="EditPageMessageButtonText"
          :buttonUrl="EditPageMessageButtonUrl" />
        </div>
      </div>
      <Button class="send-msg" text="שלח הודעה" @click.native="showApproveSendModal" />
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import MessageCard from "@/components/MessageCard.vue";
import imagePlaceholder from "@/assets/placeholder.jpg";
import ApproveSendModal from "../modals/ApproveSendModal.vue";
import FileUpload  from 'vue-upload-component'
import Cropper from 'cropperjs';

export default {
    data: function () {
      return {
          imagePlaceholder,
          files: [],
          edit: false,
          cropper: false,
      };
    },
    watch: {
      edit(value) {
        if (value) {
          this.$nextTick(function () {
            if (!this.$refs.editImage) {
              return
            }
            let cropper = new Cropper(this.$refs.editImage, {
              aspectRatio: 1 / 1,
              viewMode: 1,
            })
            this.cropper = cropper
          })
        } else {
          if (this.cropper) {
            this.cropper.destroy()
            this.cropper = false
          }
        }
      }
    },
    components: { 
      Button,
      MessageCard,
      FileUpload
    },
    computed: {
      EditPageMessageImage: {
        get () {
          return this.$store.state.editPage.image
        },
        set (value) {
          this.$store.commit('updateEditPageImage', value)
        }
      },
      EditPageMessageName: {
        get () {
          return this.$store.state.editPage.name
        },
        set (value) {
          this.$store.commit('updateEditPageName', value)
        }
      },
      EditPageMessageTitle: {
        get () {
          return this.$store.state.editPage.title
        },
        set (value) {
          this.$store.commit('updateEditPageTitle', value)
        }
      },
      EditPageMessageText: {
        get () {
          return this.$store.state.editPage.text
        },
        set (value) {
          this.$store.commit('updateEditPageText', value)
        }
      },
      EditPageMessageButtonText: {
        get () {
          return this.$store.state.editPage.buttonText
        },
        set (value) {
          this.$store.commit('updateEditPageButtonText', value)
        }
      },
      EditPageMessageButtonUrl: {
        get () {
          return this.$store.state.editPage.buttonUrl
        },
        set (value) {
          this.$store.commit('updateEditPageButtonUrl', value)
        }
      },
    },
    methods: {
      showApproveSendModal() {
        this.$modal.show(
          ApproveSendModal,
          {
            imageUrl: "https://via.placeholder.com/265x168",
            title: this.EditPageMessageTitle,
            text: this.EditPageMessageText,
            buttonText: this.EditPageMessageButtonText,
            buttonUrl: this.EditPageMessageButtonUrl
          },
          { height: 'auto', width: '666px'}
        );
      },

      alert(message) {
        alert(message)
      },

      inputFile(newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          this.$nextTick(function () {
            this.edit = true
          })
        }
        if (!newFile && oldFile) {
          this.edit = false
        }
        console.log(prevent)

        if (this.files.length) {
          this.EditPageMessageImage = this.files[0].url;
          console.log(this.files[0].url)
        }
      },

      inputFilter(newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
            this.alert('Your choice is not a picture')
            return prevent()
          }
        }

        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
          newFile.url = ''
          let URL = window.URL || window.webkitURL
          if (URL && URL.createObjectURL) {
            newFile.url = URL.createObjectURL(newFile.file)
          }
        }
        
      },

      removeImage() {
        this.files = [];
        this.EditPageMessageImage = "";
      }
    }
};
</script>

<style>
.edit-page .router-link-active {align-self: flex-end;font-size: 15px;}

.app-container.edit-page {
    display: flex;
    flex-direction: column;
}

.edit-main .columns-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.edit-main .column-1, .edit-main .column-2 {
    margin-left: 35px;
}

.edit-main .column-1 {
    width: calc(48% - 35px);
}

.edit-main .column-2, .edit-main .column-3 {
    width: calc(27.4% - 35px);
}

.edit-main {
    margin-top: 70px;
}

.edit-main .title {
    margin: 0;
    margin-bottom: 23px;
    font-size: 25px;
    color: #2f323a;
}

.edit-main label, .edit-page-label {
    width: 100%;
    color: #2f323a;
    font-size: 17px;
    font-family: 'AlmoniTzarMedium';
}

.input-wrapper {
    margin-bottom: 15px;
}

.input-wrapper input, .input-wrapper textarea {
    width: 100%;
    border: none;
    box-shadow: 7px 10px 30px 0 rgba(0, 0, 0, 0.03);
    min-height: 40px;
    border-radius: 5px;
    padding: 5px 10px;
}

.image-upload {
    position: relative;
    height: 183px;
    overflow: hidden;
}

.edit-page .remove-image {
    position: absolute;
    top: 15px;
    left: 15px;
    background: none;
    border: none;
    width: auto;
    height: auto;
    padding: 0;
    z-index: 99;
}

.image-upload .vue-btn {
    padding: 6px 20px;
    font-size: 16px;
    position: absolute;
    left: 50%;
    bottom: 11px;
    transform: translateX(-50%);
}

.vue-btn.send-msg {
    font-size: 16px;
    padding: 7px 40px;
}

.image-upload-wrapper {
    margin-bottom: 13px;
}

.message-card {
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 7px 10px 30px 0 rgba(0, 0, 0, 0.03);
    max-width: 286px;
    margin: 0 auto;
    min-height: 349px;
}

.message-card img {
    margin-bottom: 10px;
}

.edit-main .message-card .title {
    color: #474747;
    margin-bottom: 10px;
    line-height: 1;
}

.message-card .text {
    color: #84898d;
    font-size: 15px;
    line-height: 1.2;
    margin-bottom: 15px;
}

.message-card .link {color: #2f323a;font-size: 14px;font-family: 'AlmoniNeueBold';}
.modal-inner.message-card-modal {
    text-align: right;
    padding: 25px 25px 45px;
    background: none;
}

.message-card-modal .modal-title {
    text-align: center;
    margin-bottom: 12px;
    line-height: 1;
}

.modal-inner .message-card .title {
    color: #474747;
    margin-bottom: 10px;
}

.approve-send-wrapper {
    display: flex;
    align-items: center;
    text-align: right;
}

.modal-inner.approve-send-modal {
    padding: 64px 54px 80px;
}

.apprrove-modal-text {
    min-width: 245px;
    margin-left: 29px;
}

.apprrove-modal-text h2 {
    font-size: 25px;
    margin-bottom: 5px;
    line-height: 1;
}

.apprrove-modal-text p {
    font-size: 18px;
    line-height: 1.11;
    color: #2f323a;
    max-width: 232px;
    margin-bottom: 46px;
}

.apprrove-modal-text .vue-btn {
    padding: 10px 20px;
    font-size: 16px;
    min-width: 126px;
    justify-content: center;
    line-height: 1;
    margin-bottom: 10px;
}

.apprrove-modal-text .go-back {
    color: #84888c;
    font-size: 14px;
    border: none;
    background: none;
    border-bottom: 1px solid #84888c;
    padding: 0;
    line-height: 1.2;
}

input#btn-url {
  direction: ltr;
  text-align: right;
}

body .file-uploads {
    overflow: visible;
    position: static;
    cursor: pointer;
}

body .file-uploads.file-uploads-html4 input, body .file-uploads.file-uploads-html5 label {
    cursor: pointer;
}

.image-upload img {
    height: auto;
}

.message-card img {
    height: auto;
}

.image-upload img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>