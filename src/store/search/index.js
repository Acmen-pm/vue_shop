//search模块的小仓库
//state仓库存储数据的地方
import { reqGetSearchInfo } from '@/api';

const state = {
    //仓库初始状态
    searchList: {}
};
//mutations:修改state唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }


};

const actions = {
    // 获取search模块数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    },
};
//计算属性，在项目当中getters为简化数组而生,简化仓库中的数据
const getters = {
    //是一个函数
    //state当前仓库中的state

    goodsList(state){
        return state.searchList.goodsList;
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList;
    }

};
export default {
    state,
    mutations,
    actions,
    getters
};
