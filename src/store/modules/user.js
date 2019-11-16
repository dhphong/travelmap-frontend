import {getInfo, login, refreshToken, register} from '@/api/user'
import {getRefreshToken, getToken, removeRefreshToken, removeToken, setRefreshToken, setToken} from '@/utils/auth'
import router, {resetRouter} from '@/router'

const state = {
    token: getToken(),
    refreshToken: getRefreshToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_REFRESH_TOKEN: (state, token) => {
        state.refreshToken = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    // user login
    login({commit}, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login({username: username.trim(), password: password}).then(response => {
                const {data} = response
                console.log(response)
                const {access_token, refresh_token} = data
                commit('SET_TOKEN', access_token)
                setToken(access_token)
                commit('SET_REFRESH_TOKEN', refresh_token)
                setRefreshToken(refresh_token)
                resolve()
            }).catch(error => {
                console.log('Login Error: ', error)
                reject(error)
            })
        })
    },

    register({commit}, data) {
        return new Promise((resolve, reject) => {
            register(data).then(response => {
                const {data} = response
                console.log(response)
                const {access_token, refresh_token} = data
                commit('SET_TOKEN', access_token)
                setToken(access_token)
                commit('SET_REFRESH_TOKEN', refresh_token)
                setRefreshToken(refresh_token)
                resolve()
            }).catch(error => {
                console.log('Login Error: ', error)
                reject(error)
            })
        })
    },

    // get user info
    getInfo({commit, state}) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const {data} = response

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                const {roles, name, avatar, introduction} = data

                // roles must be a non-empty array
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }

                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                commit('SET_INTRODUCTION', introduction)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({commit, dispatch}) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', '')
            commit('SET_REFRESH_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            removeRefreshToken()
            resetRouter()

            // reset visited views and cached views
            // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
            dispatch('tagsView/delAllViews', null, {root: true})

            resolve()
        })
    },

    // remove token
    resetToken({commit}) {
        return new Promise((resolve, reject) => {
            refreshToken().then(response => {
                const {data} = response
                const {access_token} = data
                commit('SET_TOKEN', access_token)
                setToken(access_token)
                resolve()
            }).catch(error => {
                console.log('Login Error: ', error)
                reject(error)
            })
        })
    },

    // dynamically modify permissions
    changeRoles({commit, dispatch}, role) {
        return new Promise(async resolve => {
            const token = role + '-token'

            commit('SET_TOKEN', token)
            setToken(token)

            const {roles} = await dispatch('getInfo')

            resetRouter()

            // generate accessible routes map based on roles
            const accessRoutes = await dispatch('permission/generateRoutes', roles, {root: true})

            // dynamically add accessible routes
            router.addRoutes(accessRoutes)

            // reset visited views and cached views
            dispatch('tagsView/delAllViews', null, {root: true})

            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
