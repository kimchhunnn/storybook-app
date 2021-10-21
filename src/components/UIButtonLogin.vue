<template>
  <button id="login-btn" type="submit" :class="{ disabled: !isFormValid || isLoggingIn }">
    <span>ログイン</span>
    <svg v-show="isLoggingIn" class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </button>
</template>        

<script>
export default {
  name: "UIButtonLogin",
  data: function () {
    return {}
  },
  props: {
    isFormValid: {
      type: [Boolean],
      default: false
    },
    isLoggingIn: {
      type: [Boolean],
      default: false
    }
  }
}
</script>

<style lang="css" scoped>

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
#login-btn {
  position: relative;
  font-size: 1.25rem;
  line-height: 40px;
  width: 20rem;
  height: 4rem;
  border: 2px solid #000;
  background-color: #fff;
}
#login-btn .spinner {
  width: 25px;
  height: 25px;
}
#login-btn.disabled {
  pointer-events: none;
  opacity: 0.3;
}
#login-btn:hover {
  cursor: pointer;
}
 

</style>