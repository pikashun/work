/*
 * @Author: your name
 * @Date: 2022-03-25 15:20:55
 * @LastEditTime: 2022-03-29 09:12:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \work\src\router\router.js
 */
import vueRouter from 'vue-router';
import Home from '@/view/home/index.vue'
import About from '@/view/about/index.vue'

const routes = [{
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
export default router = new vueRouter({routes})