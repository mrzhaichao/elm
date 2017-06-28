<template>
<div>
    <header class="select-head">
        <span @click="clickRe"><</span>
        <span>搜索</span>
        <span></span>
    </header>
    <section class="select-body">
        <input type="text" placeholder="请输入商家或美食名称" class="select-input">
        <a href="javascript:void (0)" class="select-btn">提交</a>
    </section>
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
    .select-head{
        font-size: 0.20rem;
        font-weight: 800;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 0.5rem;
        color: white;
        padding: 0 0.14rem;
        background-color: rgb(49,144,232);
    }
    .select-body{
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        height: 0.8rem;
        background-color: white;
    }
    .select-input{
        height: 0.4rem;
        box-sizing:border-box;
        font-size: 0.16rem;
        font-weight: 600;
        width: 70%;
        border: 1px solid rgb(228,228,228);
        background-color: rgb(242,242,242);
        padding-left: 0.1rem;
    }
    .select-btn{
        width: 0.8rem;
        height: 0.4rem;
        font-size: 0.16rem;
        font-weight: 600;
        text-align: center;
        line-height: 0.36rem;
        border-radius: 0.05rem;
        color: white;
        background-color: rgb(49,144,232);
        margin-left: 0.1rem;
    }
</style>