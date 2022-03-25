/*
 * @Author: your name
 * @Date: 2022-03-25 14:55:27
 * @LastEditTime: 2022-03-25 16:53:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \work\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')