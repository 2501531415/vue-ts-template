import {request} from './request'

export function test(info: any){
    return request({
        url:'/auth/login',
        method:'post',
        data:{
            username:info.name,
            password:info.password,
            captcha:info.captcha,
            key:info.key
        }
    })
}
export function getCaptcha(){
    return request({
        url:'/auth/url'
    })
}