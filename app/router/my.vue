<template>
    <div class="my-all">
        <header class="my-head">
            <span><</span>
            <span>我的</span>
            <span></span>
        </header>
        <section class="my-inform">
            <div class="my-inform-detail">
                <img src="" alt="头像" class="my-picture">
                <div>
                    <span class="my-inform-login">登陆/注册</span>
                    <span class="my-inform-phone">暂无绑定手机号</span>
                </div>
            </div>
            <span class="my-inform-sym"> ></span>
        </section>
        <section class="my-privilege">
            <div>
                <p style="font-size: 0.16rem;color: #666"><span style="font-size: 0.3rem;font-weight: 600;color: #f90">0.00</span>元</p>
                <span style="font-size: 0.16rem;color: #666">我的余额</span>
            </div>
            <div>
                <p style="font-size: 0.16rem; color: #666" ><span style="font-size: 0.3rem;font-weight: 600;color: #ff5f3e">0</span>个</p>
                <span style="font-size: 0.16rem ;color: #666">我的优惠</span>
            </div>
            <div>
                <p style="font-size: 0.16rem ;color: #666"><span style="font-size: 0.3rem;font-weight: 600;color: #6ac20b">0</span>分</p>
                <span style="font-size: 0.16rem ;color: #666">我的积分</span>
            </div>
        </section>
        <section class="my-others">
            <div>
                <p>我的订单</p>
                <span>> </span>
            </div>
            <div>
                <p>积分商城</p>
                <span>> </span>
            </div>
            <div>
                <p>饿了么会员卡</p>
                <span>> </span>
            </div>
        </section>
        <section class="my-others">
            <div>
                <p>服务中心</p>
                <span>> </span>
            </div>
            <div><p>下载饿了么APP</p>
                <span>> </span>
            </div>
        </section>
    </div>
</template>
<script>

</script>
<style>
    .my-all{
        background-color: rgb(241,241,241);
    }
    .my-head{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        height: 0.4rem;
        padding: 0.1rem;
        background-color: rgb(49,144,232);
        font-size: 0.2rem;
        font-weight: 600;
        color: white;
    }
    .my-inform{
        height: 1rem;
        background-color: rgb(49,144,232);
        color: white;
        font-size: 0.18rem;
        font-weight: 600;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .my-inform-login{
        display: block;
    }
    .my-inform-phone{
        font-size: 0.14rem;
        font-weight: normal;
        display: block;
    }
    .my-inform-detail{
        display: flex;
        flex-direction: row;
        margin-left: 0.1rem;
    }
    .my-inform-sym{
        margin-right: 0.1rem;
    }
    .my-picture{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        border: 1px solid red;
    }
    .my-privilege{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch ;
        height: 1.1rem;
        border-bottom: 1px solid rgb(241,241,241);
        background-color: white;
    }
    .my-privilege> div{
        width: 33.3%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgb(241,241,241);
    }
    .my-others{
        background-color: white;
        display: flex;
        flex-direction: column;
        padding-left: 0.3rem;
        padding-right: 0.1rem;
        font-size: 0.16rem;
        margin-top: 0.1rem;
    }
    .my-others div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 0.5rem;
        border-bottom: 1px solid rgb(241,241,241);
    }
</style>