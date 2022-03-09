//这个模块：API进行统一管理
import requests from "./request";
import mockRequests from './mock'
import { mock } from "mockjs";
import axios from "axios";
//三级联动接口

//发请求:axios发请求返回结果是promise对象
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');
//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner');
//获取floor
export const reqFloorList = () => mockRequests.get('/floor')
//获取搜索
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })

