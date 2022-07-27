<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "./assets/fonts/fonts.css";

* {
  box-sizing: border-box;
}

#app {
  background-color: #f5f5f5;
  direction: rtl;
}

body .vm--modal {
    top: 50%!important;
    left: 0!important;
    transform: translateY(-50%);
    margin: 0 auto;
    background: #f5f5f5;
}

.vm--overlay {
    margin: 0 auto;
}

.modal-inner {
    text-align: center;
    padding: 25px;
}

.modal-inner.app-info .text {
    max-width: 330px;
    margin: 0 auto;
}

.modal-inner .title {
    margin: 0 auto;
    color: #2f323a;
    font-size: 25px;
}

.modal-inner .text {
    font-size: 16px;
    font-family: 'AlmoniTzarMedium';
}

.modal-inner.app-info .title {
    margin-bottom: 64px;
}

.modal-inner .close-modal {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: none;
    top: -40px;
    left: 0;
}

.modal-inner .close-modal svg {
    width: 30px;
    height: 30px;
    fill: #fff;
}

body .vm--modal {
    overflow: visible;
}

body .vm--overlay {
    background: rgba(0, 0, 0, 0.4);
}

.router-link-active:hover, .router-link-active:focus {
    text-decoration: none;
}
</style>
