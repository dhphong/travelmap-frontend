import request from '@/utils/request'
import axios from 'axios'
import {getRefreshToken} from '@/utils/auth'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function register(data) {
    return request({
        url: '/registration',
        method: 'post',
        data
    })
}


export function getInfo() {
    return request({
        url: '/user/info',
        method: 'get'
    })
}

export function refreshToken() {
    return axios.post( process.env.VUE_APP_BASE_API + '/token/refresh',{}, {
        headers: {
            Authorization: 'Bearer ' + getRefreshToken(),
        }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
