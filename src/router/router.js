/*
 * @Author: your name
 * @Date: 2022-03-25 15:20:55
 * @LastEditTime: 2022-03-25 15:40:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \work\src\router\router.js
 */
import vue from 'vue';
import vueRouter from 'vue-router';

const routes = [{
    path: '/',
    component: '@/view/home'
  },
  {
    path: '/about',
    component: '@/view/about'
  }
]
const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes,
})
vue.use(router)