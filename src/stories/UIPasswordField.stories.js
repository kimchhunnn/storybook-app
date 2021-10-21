import UIPasswordField from '../components/UIPasswordField.vue';

export default {
  title: 'Component/UIPasswordField',
  component: UIPasswordField,
};

const Template = (args) => ({
  components: { UIPasswordField },
  setup() {
    return { args };
  },
  template: '<UIPasswordField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  password: "Hello World",
};
