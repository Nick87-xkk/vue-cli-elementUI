import axios from "axios"; // 引用axios
import config from "@/api/config";

const instance = axios.create({
    baseURL: config.baseUrl.fat,
    timeout: 60000,
});

//get请求
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, {
                params: params,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

//post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}
