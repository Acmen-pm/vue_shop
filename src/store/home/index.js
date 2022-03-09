//home模块的小仓库
//state仓库存储数据的地方
import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api";
const state = {

    categoryList: [],
    //轮播图数据
    bannerList: [],
    floorList:[]

};
//mutations:修改state唯一手段
const mutations = {

    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
       // console.log('修改仓库中的数据');
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList;
    }

};

const actions = {
    async categoryList({ commit }) {
       //console.log('获取服务器数据');
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data);

        }



    },
    //获取轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data);
        }
    },

    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data);
        }

    },

};
const getters = {};
export default ({
    state,
    mutations,
    actions,
    getters



});
