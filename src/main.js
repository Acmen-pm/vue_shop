import Vue from 'vue';
import App from './App.vue';




import store from '@/store';
//引入luyou,入口文件这里进行注册
import router from '@/router';
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';

Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsousel.name,Carsousel);
Vue.component(Pagination.name,Pagination);
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.css";
import {reqGetSearchInfo} from '@/api';
console.log(reqGetSearchInfo({}));

//Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
