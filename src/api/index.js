import {get, post} from "@/api/http";
//此处如果有参数传入给后端就需要写上参数 params/data 否则可以为空

//用户账号密码
export const getUserData = (params) => get('/usr/usrfindbyid?', params);
//学生信息
export const getData = (params) => get('/student/test', params);
//删除
export const postDeleteData = (params) => post('/student/delete?', params);
//更新
export const postUpdateData = (params) => post('/student/update?', params);
//添加
export const postAddData = (params) => post('student/addStudent', params);