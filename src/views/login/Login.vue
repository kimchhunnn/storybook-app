<template>
  <UILogin
    v-model:storeId="storeId"
    v-model:password="password"
    :isLoggingIn="isLoggingIn"
    @login="login"
    @forgotPassword="forgotPassword"
  />
</template>

<script>
import UILogin from '../login/UILogin.vue'

export default {
  name: "Login",
  components: { UILogin },
  data: function () {
    return {
      storeId: "",
      password: "",
      isLoggingIn: false
    }
  },
  methods: {
    isFormValid () {
      return this.storeId.length > 0 && this.password.length > 0;
    },
    login: function () {
      if (this.isFormValid) {
        console.log("Login")
      }
    },
    forgotPassword: function () {
      console.log("ForgotPassword")
    }
  },
}
</script>