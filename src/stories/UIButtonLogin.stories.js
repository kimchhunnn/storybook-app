import UIButtonLogin from '../components/UIButtonLogin.vue';

export default {
  title: 'Component/UIButtonLogin',
  component: UIButtonLogin,
};

const Template = (args) => ({
  components: { UIButtonLogin },
  setup() {
    return { args };
  },
  template: '<UIButtonLogin v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  isLoggingIn: false,
  isFormValid: false
};

export const Enabled = Template.bind({});
Enabled.args = {
  isLoggingIn: false,
  isFormValid: true,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoggingIn: true,
  isFormValid: true,
};
