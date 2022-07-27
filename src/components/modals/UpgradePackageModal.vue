<template>

<div class="modal-inner upgrade-package-modal">
  <ModalCloseBtn @click.native="$emit('close')" />
  <h2 class="title">שדרוג חבילה</h2>
  <div class="packages">
    <div class="package package--current">
      <svg width="24.731" height="24.552">
        <path data-name="Arrow Down" d="M12.043.1.105 12.043a.317.317 0 0 0-.018.447l.018.018L12.043 24.45a.316.316 0 0 0 .448.017l.017-.017 1.54-1.54-9.415-9.415h18.752a1.342 1.342 0 0 0 1.346-1.34v-.006a1.338 1.338 0 0 0-1.346-1.317H4.843l9.2-9.2-1.54-1.54a.325.325 0 0 0-.459.005l-.006.005Z" fill="#2f323a" fill-rule="evenodd" />
      </svg>
      <h5 class="package-title">חבילה נוכחית</h5>
      <div class="package-box">
        <span class="package-box-heading">חבילה עד</span>
        <span class="package-box-size">{{$store.state.account.data.CurrentPackage}} מנויים</span>
        <span class="package-price">{{$store.state.account.data.CurrentPackagePrice}} ש"ח</span>
      </div>
    </div>
    <div class="package package--next">
      <h5 class="package-title">חבילה משודרגת</h5>
      <div class="package-box">
        <span class="package-box-heading">חבילה עד</span>
        <span class="package-box-size">{{$store.state.account.data.NextPackage}} מנויים</span>
        <span class="package-price">{{$store.state.account.data.NextPackagePrice}} ש"ח</span>
      </div>
    </div>
  </div>
  <router-link to="/">
    <Button text="שדרג את החבילה" @click.native="openSuccessModal" />
  </router-link>
  
</div>
  
</template>

<script>
import ModalCloseBtn from '../ModalCloseBtn.vue';
import Button from '../Button.vue';
import UpgradeSuccessModal from './UpgradeSuccessModal.vue';

export default {
  name: "UpgradePackageModal",
  components: {
    ModalCloseBtn,
    Button
  },
  methods: {
    openSuccessModal() {
      this.$emit('close');
      this.$modal.show(
          UpgradeSuccessModal,
          {},
          { height: '310px', width: '500px'}
        );
    }
  }
};
</script>

<style>
.modal-inner.upgrade-package-modal {
    height: 100%;
}

.upgrade-package-modal .vue-btn {
    margin: 0 auto;
    font-size: 17px;
    line-height: 1.1;
    padding: 11px 20px;
    min-width: 200px;
    justify-content: center;
}

.upgrade-package-modal .packages {
    display: flex;
    justify-content: center;
    gap: 45px;
    margin-bottom: 60px;
}

.upgrade-package-modal .package {
    width: 180px;
}

.upgrade-package-modal .title {
    margin-bottom: 20px;
}

.package-title {
    margin: 0;
    margin-bottom: 3px;
}

.package.package--current .package-box {
    background: #fff;
    color: #2f323a;
}

.package.package--next .package-box {
    background: #bd5693;
    color: #fff;
}

.upgrade-package-modal .package-box {
    border-radius: 10px;
    padding: 20px 21px 4px;
    font-family: 'AlmoniNeueLight';
}

.package-box-heading {
    display: block;
    text-align: right;
    font-size: 19px;
    line-height: 1;
}

.package-box-size {
    display: block;
    text-align: right;
    font-size: 29px;
    line-height: 1.2;
}

.package-price {
    font-size: 16px;
}

.upgrade-package-modal .packages svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
}
</style>
