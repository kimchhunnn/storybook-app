import Login from '../views/Login.vue';
import * as UIButtonLoginStories from './UIButtonLogin.stories';
import * as UITextFieldStories from './UITextField.stories';
import * as UIPasswordFieldStories from './UIPasswordField.stories';

export default {
  title: 'Views/Login',
  component: Login,
};

const Template = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  ...UITextFieldStories.Default.args,
  ...UIPasswordFieldStories.Default.args,
  ...UIButtonLoginStories.Default.args,
};

