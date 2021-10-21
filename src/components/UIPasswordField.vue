<template>
  <input
    type="password"
    :value="password"
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
    password: {
      type:[String],
      default: ""
    }
  },
  methods: {
    onInput(event) {
      this.$emit("update:password", event.target.value);
    },
  },
}
</script>

<style lang="css" scoped>

.central-login {
  background-color: #fff;
  width: 100%;
  height: 100vh;
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
 

</style>