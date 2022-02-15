import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { Form, Button, Input } from "ant-design-vue";

import 'ant-design-vue/dist/antd.less';

createApp(App)
  .use(store)
  .use(router)
  .use(Form)
  .use(Button)
  .use(Input)
  .mount("#app");
