import axios from 'axios'
import qs from 'qs'
export function request(config: object){
    const instance = axios.create({
        baseURL:'http://blog.com:81/api',
        timeout:5000,
    })
    instance.interceptors.request.use(config=>{
        config.data = qs.stringify(config.data)
        return config
    })
    instance.interceptors.response.use(res=>{
        return res
    })
    return instance(config)
}