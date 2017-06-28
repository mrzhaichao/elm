<template>
    <div class="reset-all">
        <header class="reset-head">
            <span class="reset-head-sym" @click="clickRe"><</span>
            <span>重置密码</span>
            <span class="reset-head-sym"></span>
        </header>
        <section class="reset-body">
            <div class="reset-id">
                <input type="text" placeholder="账号" >
                <input type="text" placeholder="旧密码" >
                <input type="text" placeholder="请输入新密码" >
                <input type="text" placeholder="请确认密码" >
            </div>
            <div class="reset-code">
                <input type="text" placeholder="验证码">
                <div class="reset-change">
                    <p>看不清</p>
                    <p>换一张</p>
                </div>
            </div>
        </section>
        <footer class="reset-foot">
            <button class="reset-btn">重置密码</button>
        </footer>
    </div>
</template>
<script>
    export default{
        methods:{
            clickRe(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style>

    .reset-all{
        font-size: 0.12rem;

        display: flex;
        flex-direction: column;
    }
    .reset-head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #3190e8;
        color: #fff;
        height: 0.45rem;
        align-items: center;
        font-size: 0.18rem;
        font-weight: 600;
    }
    .reset-head-sym{
        width: 10%;
        padding: 0.12rem;
    }
    .reset-body{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-top: 0.12rem;
    }
    .reset-body input{
        padding-left: 0.12rem;
        font-size: 0.15rem;
        height: 0.42rem;
        border: none;
        border-bottom: 1px solid rgb(241,241,241);
    }
    .reset-id{
        display: flex;
        flex-direction: column;
    }
    .reset-id,.reset-code{
        border-bottom: 1px solid rgb(241,241,241);
        background-color: white;
    }
    .reset-code{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 0.42rem;
    }
    .reset-change{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 3%;
    }
    .reset-foot{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0.45rem;
    }

    .reset-btn{
        width: 94%;
        height: 0.36rem;
        font-size: 0.18rem;
        background-color: rgb(76,217,100);
        color: white;
        border: none;
        border-radius: 0.03rem;
    }

</style>