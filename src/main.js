/*
 * @Author: your name
 * @Date: 2022-03-25 14:55:27
 * @LastEditTime: 2022-03-29 09:13:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \work\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')