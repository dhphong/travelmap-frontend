<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="registerForm" :rules="registerRules" class="login-form" autocomplete="on"
                 label-position="left">

            <div class="title-container">
                <h3 class="title">Create your account</h3>
            </div>

            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user"/>
                </span>
                <el-input
                        ref="username"
                        v-model="registerForm.username"
                        placeholder="Username"
                        name="username"
                        type="text"
                        tabindex="1"
                        autocomplete="on"
                />
            </el-form-item>
            <el-form-item prop="email">
                <span class="svg-container">
                    <svg-icon icon-class="email"/>
                </span>
                <el-input
                        ref="email"
                        v-model="registerForm.email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        tabindex="1"
                        autocomplete="on"
                />
            </el-form-item>
            <el-form-item prop="firstname">
                <span class="svg-container">
                    <svg-icon icon-class="edit"/>
                </span>
                <el-input
                        ref="firstname"
                        v-model="registerForm.firstname"
                        placeholder="First name"
                        name="firstname"
                        type="text"
                        tabindex="1"
                        autocomplete="on"
                />
            </el-form-item>
            <el-form-item prop="lastname">
                <span class="svg-container">
                    <svg-icon icon-class="edit"/>
                </span>
                <el-input
                        ref="lastname"
                        v-model="registerForm.lastname"
                        placeholder="Last name"
                        name="lastname"
                        type="text"
                        tabindex="1"
                        autocomplete="on"
                />
            </el-form-item>
            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <el-form-item prop="password">
                    <span class="svg-container">
                        <svg-icon icon-class="password"/>
                    </span>
                    <el-input
                            :key="passwordType"
                            ref="password"
                            v-model="registerForm.password"
                            :type="passwordType"
                            placeholder="Password"
                            name="password"
                            tabindex="2"
                            autocomplete="on"
                            @keyup.native="checkCapslock"
                            @blur="capsTooltip = false"
                            @keyup.enter.native="handleRegister"
                    />
                    <span class="show-pwd" @click="showPwd">
                        <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                    </span>
                </el-form-item>
            </el-tooltip>
            <el-form-item prop="retypePassword">
                    <span class="svg-container">
                        <svg-icon icon-class="password"/>
                    </span>
                <el-input
                        :key="retypePasswordType"
                        ref="password"
                        v-model="registerForm.retypePassword"
                        :type="retypePasswordType"
                        placeholder="Confirm Password"
                        name="retypePassword"
                        tabindex="3"
                        autocomplete="on"
                        @keyup.native="checkCapslock"
                        @blur="capsTooltip = false"
                        @keyup.enter.native="handleRegister"
                />
                <span class="show-pwd" @click="showRetypePwd">
                        <svg-icon :icon-class="retypePasswordType === 'password' ? 'eye' : 'eye-open'"/>
                    </span>
            </el-form-item>

            <div style="position: relative; display: flex; flex-direction: row; justify-content: space-between; padding-bottom: 20px">
                <router-link :to="{'name': 'login'}" style="color: white">Sign in instead</router-link>
            </div>
            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                       @click.native.prevent="handleRegister">Register
            </el-button>


        </el-form>

        <!--        <el-dialog title="Or connect with" :visible.sync="showDialog">-->
        <!--            Can not be simulated on local, so please combine you own business simulation! ! !-->
        <!--            <br>-->
        <!--            <br>-->
        <!--            <br>-->
        <!--            <social-sign/>-->
        <!--        </el-dialog>-->
    </div>
</template>

<script>
    import {validUsername} from '@/utils/validate'
    // import SocialSign from './components/SocialSignin'

    export default {
        name: 'Login',
        components: {
            // SocialSign
        },
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!validUsername(value)) {
                    callback(new Error('Please enter the correct user name'))
                } else {
                    callback()
                }
            }
            const validatePassword = (rule, value, callback) => {
                if (value.length < 4) {
                    callback(new Error('The password can not be less than 4 digits'))
                } else {
                    callback()
                }
            }
            const validateRetypePassword = (rule, value, callback) => {
                if (value !== this.registerForm.password) {
                    callback(new Error('Those passwords did\'t match. Try again'))
                } else {
                    callback()
                }
            }
            return {
                registerForm: {
                    username: '',
                    firstname: '',
                    lastname: '',
                    password: '',
                    retypePassword: '',
                    email: '',
                },
                registerRules: {
                    username: [{required: true, trigger: 'blur', validator: validateUsername}],
                    password: [{required: true, trigger: 'blur', validator: validatePassword}],
                    retypePassword: [{required: true, trigger: 'blue', validator: validateRetypePassword}],
                    firstname: [{ required: true, message: 'Please input first name', trigger: 'blur' }],
                    lastname: [{ required: true, message: 'Please last last name', trigger: 'blur' }],
                    email: [
                        { required: true, message: 'Please input email address', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                    ]
                },
                passwordType: 'password',
                retypePasswordType: 'password',
                capsTooltip: false,
                loading: false,
                showDialog: false,
                redirect: undefined,
                otherQuery: {}
            }
        },
        watch: {
            $route: {
                handler: function (route) {
                    const query = route.query
                    if (query) {
                        this.redirect = query.redirect
                        this.otherQuery = this.getOtherQuery(query)
                    }
                },
                immediate: true
            }
        },
        created() {
            // window.addEventListener('storage', this.afterQRScan)
        },
        mounted() {
            if (this.registerForm.username === '') {
                this.$refs.username.focus()
            } else if (this.registerForm.password === '') {
                this.$refs.password.focus()
            }
        },
        destroyed() {
            // window.removeEventListener('storage', this.afterQRScan)
        },
        methods: {
            checkCapslock({shiftKey, key} = {}) {
                if (key && key.length === 1) {
                    if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
                        this.capsTooltip = true
                    } else {
                        this.capsTooltip = false
                    }
                }
                if (key === 'CapsLock' && this.capsTooltip === true) {
                    this.capsTooltip = false
                }
            },
            showPwd() {
                if (this.passwordType === 'password') {
                    this.passwordType = ''
                } else {
                    this.passwordType = 'password'
                }
                this.$nextTick(() => {
                    this.$refs.password.focus()
                })
            },
            showRetypePwd() {
                if (this.retypePasswordType === 'password') {
                    this.retypePasswordType = ''
                } else {
                    this.retypePasswordType = 'password'
                }
                this.$nextTick(() => {
                    this.$refs.retypePassword.focus()
                })
            },
            handleRegister() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('user/register', this.registerForm)
                            .then(() => {
                                this.$router.push({path: this.redirect || '/', query: this.otherQuery})
                                this.loading = false
                            })
                            .catch(() => {
                                this.loading = false
                            })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            getOtherQuery(query) {
                return Object.keys(query).reduce((acc, cur) => {
                    if (cur !== 'redirect') {
                        acc[cur] = query[cur]
                    }
                    return acc
                }, {})
            }
            // afterQRScan() {
            //   if (e.key === 'x-admin-oauth-code') {
            //     const code = getQueryObject(e.newValue)
            //     const codeMap = {
            //       wechat: 'code',
            //       tencent: 'code'
            //     }
            //     const type = codeMap[this.auth_type]
            //     const codeName = code[type]
            //     if (codeName) {
            //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
            //         this.$router.push({ path: this.redirect || '/' })
            //       })
            //     } else {
            //       alert('第三方登录失败')
            //     }
            //   }
            // }
        }
    }
</script>

<style lang="scss">

    $bg: #283443;
    $light_gray: #fff;
    $cursor: #fff;

    @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
        .login-container .el-input input {
            color: $cursor;
        }
    }

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;

                &:-webkit-autofill {
                    box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: $cursor !important;
                }
            }
        }

        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>

<style lang="scss" scoped>
    $bg: #2d3a4b;
    $dark_gray: #889aa4;
    $light_gray: #eee;

    .login-container {
        min-height: 100%;
        width: 100%;
        background-color: $bg;
        overflow: hidden;

        .login-form {
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }

        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;

            span {
                &:first-of-type {
                    margin-right: 16px;
                }
            }
        }

        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
        }

        .title-container {
            position: relative;

            .title {
                font-size: 26px;
                color: $light_gray;
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }

        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }

        .thirdparty-button {
            position: absolute;
            right: 0;
            bottom: 6px;
        }

        @media only screen and (max-width: 470px) {
            .thirdparty-button {
                display: none;
            }
        }
    }
</style>
