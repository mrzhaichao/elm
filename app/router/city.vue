<template>
    <div class="cities" id="city">
        <header class="city-head">
            <span>ele.me</span>
            <router-link :to="'login'">登录|注册</router-link>
        </header>
        <section class="city-locating">
            <div class="city-locating-des">
                <span>当前定位城市：</span>
                <span class="city-locating-select">定位不准时，请在城市列表选择</span>
            </div>
            <div class="city-locating-name">
                <router-link :to="'location'">
                    <span class="city-locate" @click="goPlace">北京</span>
                    <span>></span>
                </router-link>
            </div>
        </section>
        <section class="city-hot">
            <span class="city-label">热门城市</span>
            <ul class="city-hot-all" @click="goPlace">
                <li v-for="city in message">
                    <router-link to="/location">{{city.name}}</router-link>
                </li>
            </ul>
        </section>
        <section class="city-all">
            <section class="city-hot" v-for="(value,key,index) in cities">
                <h4 class="city-label">{{key}}<span v-if="index == 0">（按字母排序）</span></h4>
                <ul class="city-hot-all" @click="goPlace">
                    <li v-for="ax in value">
                        <router-link to="/location">{{ax.name}}</router-link>
                    </li>
                    <!--<li>{{cities[city].name}}</li>-->
                    <!--<li v-for="c in cities[city]">
                        {{cities[city][c].name}}
                    </li>-->
                    <!--<li>
                        <router-link to="/location">安庆</router-link>
                    </li>
                    <li>
                        <router-link to="/location">鞍山</router-link>
                    </li>
                    <li>
                        <router-link to="/location">澳门</router-link>
                    </li>
                    <li>
                        <router-link to="/location">安宁</router-link>
                    </li>-->
                </ul>
            </section>
        </section>
    </div>
</template>

<script>
    import {bus} from '../app';
    import location from './location.vue';
    export default{
        data: function () {
            return {
                message: [],
                cities: {},
            }
        },
        methods: {
            goPlace(event){
                //console.log(event);
                //console.log(event.target.innerText);
                var locations = event.target.innerText;
                //console.log(locations);
                //console.log(bus);
                bus.$emit('change', locations)
            },
        },
        mounted(){
            this.$nextTick(function () {
                var that = this;
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:3000/hotcities',
                    async: true,
                    dataType: 'JSONP',
                    success: function (data) {
                        for (var i = 0; i < data.length; i++) {
                            that.message = data;
                        }
                    }
                });
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:3000/city',
                    async: true,
                    dataType: 'JSONP',
                    success: function (data) {
                        //对象中的属性按照字母进行排序（ASCII）
                        //console.log(Object.keys(data[0]).sort());
                        var newCityNum = Object.keys(data[0]).sort();
                        var newCity = {};
                        for (var i = 0; i < newCityNum.length; i++) {
                            newCity[newCityNum[i]] = data[0][newCityNum[i]];
                        }
                        //console.log(newCity);
                        that.cities = newCity;
                    }
                })
            })
        }
    }
</script>


<style>
    .cities {
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
    }

    .city-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(49, 144, 232);
        height: 0.48rem;
        align-items: center;
        color: white;
        font-size: 0.18rem;
        padding: 0 0.12rem;
    }

    .city-head a {
        color: white;
    }

    .cities li {
        list-style: none;
    }

    .city-locating {
        display: flex;
        flex-direction: column;
        background-color: white;
    }

    .city-locating-des {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0.12rem;
        height: 0.45rem;
        border-bottom: 1px solid rgb(228, 228, 228);
        align-items: center;
    }

    .city-locating-select {
        font-weight: 900;
        color: #9f9f9f;
    }

    .city-locating-name  a{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0.4rem;
        font-size: 0.18rem;
        height: 0.45rem;
        border-bottom: 1px solid rgb(228, 228, 228);
        align-items: center;
    }

    .city-locate  {
        color: #3190e8;
    }

    .city-hot {
        display: flex;
        flex-direction: column;
        margin-top: 0.15rem;
        background-color: white;
    }

    .city-hot-all {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .city-label {
        padding-left: 0.12rem;
        border-bottom: 1px solid rgb(228, 228, 228);
        border-top: 1px solid rgb(228, 228, 228);
        line-height: 0.42rem;
    }

    .city-hot-all li {
        width: 25%;
        height: 0.45rem;
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.45rem;
        border-right: 1px solid rgb(228, 228, 228);
        border-bottom: 1px solid rgb(228, 228, 228);
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .city-hot-all li a {
        color: #3190e8;
    }

</style>