<template>
  <div id="central-home">
    <div class="central-home">
      <div class="central-login--wrapper">

        <h1>Welcome to Storybook App</h1>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    storeId: {
      type: [String],
      default: ""
    },
    password: {
      type: [String],
      default: ""
    },
    isLoggingIn: {
      type: [Boolean],
      default: false
    }
  },
  computed: {
    isFormValid () {
      return this.storeId.length > 0 && this.password.length > 0;
    }
  },
  methods: {
    onInputStoreId(event) {
      this.$emit("update:storeId", event.target.value);
    },
    onInputPassword(event) {
      this.$emit("update:password", event.target.value);
    },
    onLogin: function () {
      this.$emit("login");
    },
    onForgotPassword: function () {
      this.$emit("forgotPassword");
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

</style>
