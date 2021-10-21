import UITextField from '../components/UITextField.vue';

export default {
  title: 'Component/UITextField',
  component: UITextField,
};

const Template = (args) => ({
  components: { UITextField },
  setup() {
    return { args };
  },
  template: '<UITextField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  storeId: "Hello World",
};
