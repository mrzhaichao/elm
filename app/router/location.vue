<template>
    <div class="location-all">
        <header class="location-header">
            <span ref="re" @click="clickRe"><</span>
            <span>{{message}}</span>
            <span>
                <router-link to="/city">切换城市</router-link>
            </span>
        </header>
        <section class="location-inform">
            <input type="text" placeholder="输入学校、商务楼、地址">
            <a href="javascript:void (0)">提交</a>
        </section>
        <footer class="location-footer">
            <p class="history-select">搜索历史</p>
            <ul>
                <li>
                    <router-link :to="'shop'">北京大学</router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>
    import { bus } from '../app.js'
    export default{
        data(){
            return{
                message:{}
            }
        },
        methods: {
            clickRe(){
                this.$router.go(-1);
            }
        },
        created(){
            var that = this;
            bus.$on('change', function (data) {
                console.log(data);
                that.message = data;
            })
        }
    }
</script>
<style>
    .location-all {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .location-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(49, 144, 232);
        font-size: 0.18rem;
        font-weight: 800;
        color: white;
        height: 0.48rem;
        padding: 0 0.12rem;
    }
    .location-header a{
        color: white;
    }
    .location-inform {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 0.2rem;
        font-size: 0.16rem;
        background-color: white;
    }

    .location-inform input {
        width: 95%;
        height: 0.35rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
        margin: 0.1rem 0 0 0;
        border: 1px solid rgb(228, 228, 228);
    }

    .location-inform a {
        width: 95%;
        height: 0.35rem;
        background-color: rgb(49, 144, 232);
        border-radius: .03rem;
        text-align: center;
        line-height: 0.3rem;
        color: white;
        margin: 0.1rem 0;
    }

    .history-select {
        width: 100%;
        padding-left: 0.12rem;
        height: 0.24rem;
        line-height: 0.25rem;
        border-top: 1px solid rgb(228, 228, 228);
        border-bottom: 1px solid rgb(228, 228, 228);
    }

    .location-footer ul {
        width: 100%;
    }

    .location-footer ul li {
        width: 100%;
        height: 0.7rem;
        font-size: 0.18rem;
        padding-left: 0.20rem;
        line-height: 0.7rem;
        border-bottom: 0.01rem solid rgb(228, 228, 228);
    }
</style>