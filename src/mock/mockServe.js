import Mock from "mockjs";
import floor from './floor.json'
import banner from './banner.json'

Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor})