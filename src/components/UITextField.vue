<template>
  <input
    type="text"
    :value="storeId"
    autocomplete="off"
    @input="onInput"
  >
</template>        

<script>
export default {
  name: "UITextField",
  data: function () {
    return {}
  },
  props: {
    storeId: {
      type:[String],
      default: ""
    }
  },
  methods: {
    onInput(event) {
      this.$emit("update:storeId", event.target.value);
    },
  },
}
</script>

<style lang="css" scoped>

.input {
  width: calc(100% - 2rem);
  height: 100%;
  border: 1px solid #000;
  background-color: #f4f4f4;
  font-size: 1.25rem;
  line-height: 40px;
  padding: 0 1rem;
}

.central-login {
  background-color: #fff;
  width: 100%;
  height: 100vh;
}
.spinner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  animation: rotator 1.4s linear infinite;
}
@keyframes rotator {
  0% {
    transform: rotate(0deg);
}
  100% {
    transform: rotate(270deg);
}
}
.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}
@keyframes colors {
  0% {
    stroke: #4285f4;
}
  25% {
    stroke: #de3e35;
}
  50% {
    stroke: #f7c223;
}
  75% {
    stroke: #1b9a59;
}
  100% {
    stroke: #4285f4;
}
}
@keyframes dash {
  0% {
    stroke-dashoffset: 187;
}
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
}
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
}
}
.cl-title {
  font-size: 2rem;
  line-height: 40px;
  padding-top: 6rem;
}
.cl-content {
  max-width: 36.625rem;
  margin: auto;
}
.cl-content--wrapper {
  width: 100%;
}
.cl-content--wrapper table {
  width: 100%;
  text-align: left;
  margin-bottom: 2.75rem;
  font-size: 1.25rem;
  line-height: 40px;
}
.cl-content--wrapper table td.field, .cl-content--wrapper table td.label {
  border-top: 66px solid #fff;
}
.cl-content .label {
  width: 24.5%;
}
.cl-content .field {
  width: 75.5%;
  height: 4rem;
  padding-right: 8px;
}
.cl-content .field input {
  width: calc(100% - 2rem);
  height: 100%;
  border: 1px solid #000;
  background-color: #f4f4f4;
  font-size: 1.25rem;
  line-height: 40px;
  padding: 0 1rem;
}
.cl-content #forgot-password-btn {
    font-size: 1rem;
    line-height: 16px;
    border: none;
    margin-top: 2rem;
    background-color: #fff;
}
.cl-content #forgot-password-btn:hover {
  cursor: pointer;
}
.cl-content #login-btn {
  position: relative;
  font-size: 1.25rem;
  line-height: 40px;
  width: 20rem;
  height: 4rem;
  border: 2px solid #000;
  background-color: #fff;
}
.cl-content #login-btn .spinner {
  width: 25px;
  height: 25px;
}
.cl-content #login-btn.disabled {
  pointer-events: none;
  opacity: 0.3;
}
.cl-content #login-btn:hover {
  cursor: pointer;
}
 

</style>