import {get} from "@/api/http";
//此处如果有参数传入给后端就需要写上参数 params/data 否则可以为空
export const getData = (params) => get("后端接口名", params);
