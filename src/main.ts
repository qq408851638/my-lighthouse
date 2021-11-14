import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from 'vant';
import './assets/font/iconfont.css';
import store from "./store";
import "./assets/js/rem";
import "./routerGuard";
import 'vant/lib/index.css'; // 全局引入样式
const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vant);
app.mount("#app");
