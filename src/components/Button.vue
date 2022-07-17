<template>
  <button class="btn">
    <template v-if="hasPlusIcon">
      <svg xmlns="http://www.w3.org/2000/svg" width="19.648" height="19.648">
        <g data-name="Group 2750" transform="translate(-248 -139)">
          <path
            data-name="Ellipse 1"
            d="M257.824 139a9.824 9.824 0 1 1-9.824 9.824 9.824 9.824 0 0 1 9.824-9.824Z"
            fill="#fff"
          />
          <rect
            data-name="Rounded Rectangle 1"
            width="2"
            height="14"
            rx="1"
            transform="translate(256.824 141.824)"
            fill="#bd5693"
            stroke="#bd5693"
          />
          <rect
            data-name="Rounded Rectangle 1 copy 6"
            width="14"
            height="2"
            rx="1"
            transform="translate(250.824 147.824)"
            fill="#bd5693"
            stroke="#bd5693"
          />
        </g>
      </svg>
    </template>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    hasPlusIcon: Boolean,
  },
};
</script>

<style>
.btn {
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

.btn svg {
  margin-left: 11px;
}
</style>
