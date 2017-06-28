<template>
    <div class="login-all">
        <header class="login-head">
            <span class="login-head-sym" @click="clickRe"><</span>
            <span>密码登录</span>
            <span class="login-head-sym"></span>
        </header>
        <section class="login-body">
            <div class="login-id">
            <input type="text" placeholder="账号" >
            </div>
            <div class="login-section-password">
                <input ref="pwdEl" v-model="pwd" type="password" placeholder="密码" class="login-password">
                <div class="login-password-switch">
                    <a class="circle" @click="showAndHiddenPwd"></a>
                    <span>abc</span>
                    <span>···</span>
                </div>
            </div>
            <div class="login-code">
                <input type="text" placeholder="验证码">
                <div class="login-change">
                    <p>看不清</p>
                    <p>换一张</p>
                </div>
            </div>
        </section>
        <footer class="login-foot">
            <p>温馨提示：未注册过的账号，登录时将自动注册</p>
            <p>注册过的用户可凭账号密码登录</p>
            <button class="login-btn">登录</button>
            <a href="javascript:void(0)" class="login-forget"><router-link :to="'resetPassword'" tag="span">重置密码?</router-link></a>
        </footer>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                isShowPwd: false,
                pwd: ''
            }
        },
        methods: {
            showAndHiddenPwd(e){
                var a = this.$refs.pwdEl;
                console.log(a);
                const $this = e.currentTarget;
                if(this.isShowPwd){
                    $this.className = 'circle hidden-pwd';
                    this.$refs.pwdEl.setAttribute('type', 'password');
                    this.isShowPwd = false;
                }else {
                    $this.className = 'circle show-pwd';
                    this.$refs.pwdEl.setAttribute('type', 'text');
                    this.isShowPwd = true;
                }
            },
            clickRe(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    .login-all{
        display: flex;
        flex-direction: column;
    }
    .login-head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #3190e8;
        color: #fff;
        height: 0.45rem;
        align-items: center;
        font-size: 0.2rem;
        font-weight: 600;
    }
    .login-head-sym{
        width: 10%;
        padding: 0.15rem;
    }
    .login-body{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-top: 0.15rem;
    }
    .login-body input{
        padding-left: 0.15rem;
        font-size: 0.2rem;
        border: none;
        height: 100%;
    }
    .login-id,.login-section-password,.login-code{
        height: .44rem;
        border-bottom: 1px solid rgb(241,241,241);
        background-color: white;
    }
    .login-id{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .login-section-password{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .login-password{
        width: 60%;
    }
    .login-password-switch{
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
        margin-right: 3%;
    }
    .circle{
        position: absolute;
        z-index: 10;
        border-radius: 0.4rem;
        background-color: rgb(241,241,241);
        width: 0.2rem;
        height: 0.2rem;
        transition: transform 0.5s;
    }

    .show-pwd {
        transform: translateX(9px);
    }

    .hidden-pwd {
        transform: translateX(0);
    }

    .login-code{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .login-change{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 3%;
    }
    .login-foot{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .login-foot p{
        margin-left: 0.12rem;
        color: red;
        line-height: 0.3rem;
        font-size: 0.15rem;
    }
    .login-btn{
        width: 94%;
        align-self: center;
        height: 0.36rem;
        font-size: 0.18rem;
        background-color: rgb(76,217,100);
        color: white;
        border: none;
        border-radius: 0.03rem;
    }
    .login-forget{
        align-self: flex-end;
        margin-right: 3%;
        font-size: 0.15rem;
        margin-top: 0.45rem;
    }


</style>