import Vue from 'vue';
import Vuex from 'vuex';

//需要使用插件一次
Vue.use(Vuex);
import home from './home';
import search from './search';

//state仓库存储数据的地方
// const state={};
// //mutations:修改state唯一手段
// const mutations={};

// const actions={};
// const getters={};

export default new Vuex.Store({
    // 实现Vuex仓库模块式开发
    modules:{
        home,
        search
    }
   


});
