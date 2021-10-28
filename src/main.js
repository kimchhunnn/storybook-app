import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import ForgotPassword from '@/views/forgot_password/ForgotPassword.vue'

const app = createApp(App);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/forgot_password",
    name: "ForgotPassword",
    component: ForgotPassword
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app')
