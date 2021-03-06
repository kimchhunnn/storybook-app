import Login from '../views/login/UILogin.vue';

export default {
  title: 'Views/Login',
  component: Login,
  argTypes: {
    onLogin: { action: 'clicked' } ,
    onForgotPassword: { action: 'clicked' } ,
    storeId: {
      name: 'Store ID',
      type: { name: 'string' },
      description: 'Store ID',
    },
    password: {
      name: 'Password',
      type: { name: 'string' },
      description: 'Password',
    },
    isLoggingIn: {
      name: 'Is Loggin In',
      type: { name: 'boolean' },
      description: 'Is the app in logging in process?',
    }
  },
};

const Template = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

export const Default = Template.bind({});

export const StoredIdFilled = Template.bind({});
StoredIdFilled.args = {
  storeId: "00001"
};

export const PasswordFilled = Template.bind({});
PasswordFilled.args = {
  password: "00001"
};

export const StoreIdAndPasswordFilled = Template.bind({});
StoreIdAndPasswordFilled.args = {
  storeId: "00001",
  password: "00001"
};

export const StoreIdAndPasswordFilledLoggingIn = Template.bind({});
StoreIdAndPasswordFilledLoggingIn.args = {
  storeId: "00001",
  password: "00001",
  isLoggingIn: true
};

