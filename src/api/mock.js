//需要对于axios进行二次封装
import axios from "axios";
//import { config } from "vue/types/umd";
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
//1,创建一个实例
//2,request就是axios
const requests = axios.create({
    // 配置对象
    baseURL:"/mock",

    //代表请求超时的事件5秒
    timeout:5000,


});

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
//config header请求头
//进度条开始动
nprogress.start();
return config;

});

//响应拦截器

requests.interceptors.response.use((res)=>{
   
   //进度条结束
   nprogress.done();
    return res.data;

},(error)=>{
   // return Promise.reject(new Error('faile'));
   alert("服务器响应数据失败");
});
// 对外暴露
export default requests;
