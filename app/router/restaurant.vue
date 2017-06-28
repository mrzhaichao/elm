<template>
    <div class="restaurant">
        <img src="../img/15c62c94f24131.jpeg" alt="" class="img-background">
        <header class="restaurant-head">
            <span class="btn-return"><</span>
            <section class="restaurant-inform">
                <figure>
                    <img src="../img/15c62c94f24131.jpeg" alt="" class="restaurant-img">
                </figure>
                <section class="restaurant-introduce">
                    <header class="restaurant-name">效果演示</header>
                    <p class="restaurant-send">
                    <span>
                        商家配送
                    </span>
                        <span>/</span>

                        <span>
                        分钟送达
                    </span>
                        <span>/</span>
                        <span>
                        配送费￥5
                    </span>
                    </p>
                    <p>公告：<span>欢迎光临，用餐高峰请提前下单，谢谢</span></p>
                </section>
                <span class="btn-activity">
                    >
                </span>
            </section>
            <section class="restaurant-activity">
                <p><span class="activity-name">减</span><span>满30减5，满60减8（APP专享）</span></p>
                <a href="javascript:void (0)">4个活动></a>
            </section>
        </header>
        <div style="background-color: white">
            <section class="restaurant-state">
                <div><span>商品</span></div>
                <div><span>评价</span></div>
            </section>
            <section class="restaurant-food">
                <section class="restaurant-food-sort">
                    <ul>
                        <li><span>热销榜</span></li>
                        <li><span>优惠</span></li>
                        <li><span>好吃又实惠</span></li>
                        <li><span>盖浇饭</span></li>
                        <li><span>披萨</span></li>
                        <li><span>汉堡</span></li>
                        <li><span>甜点</span></li>
                    </ul>
                </section>
                <section class="food-inform">
                    <div class="food-one">
                        <p class="sort">
                            <span class="sort-name">热销榜</span>
                            <span class="sort-name-describe">大家喜欢吃才真的好吃</span>
                            <span>···</span>
                        </p>
                        <ul class="food">
                            <li class="food-introduce">
                                <img src="../img/15c58a3fe538.jpg" alt="" class="food-img">
                                <div>
                                    <header>
                                        <span class="food-name">麻辣烫</span>
                                        <span>招牌</span>
                                    </header>
                                    <p class="food-introduce-desc">中小城镇吃早餐</p>
                                    <p><span>月售122份</span><span style="margin-left: 0.12rem">好评率30%</span></p>
                                    <section class="food-money">
                                        <span class="food-money-1">￥20</span>
                                        <i class="fa fa-plus-circle fa-2x" aria-hidden="true" style="color: #3190e8;transform: scale(0.6)"></i>
                                    </section>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    </div>
</template>
<script>
</script>
<style>
    .restaurant {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .restaurant-head {
        height: 1.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0.12rem;
        color: white;
        font-weight: 300;
        /*background: transparent;*/
        background-color: rgba(119, 103, 137, .43);
        flex-grow: 0;
    }

    .btn-return {
        font-size: 0.2rem;
        font-weight: 900;
        color: white;
        position: fixed;
        left: 0.12rem;
        top: 0;
        z-index: 10;
    }

    .img-background {
        width: 100%;
        position: absolute;
        z-index: -1;
        filter: blur(0.1rem);
    }

    .restaurant-inform {
        height: 0.8rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.1rem;
    }

    .restaurant-img {
        height: 0.8rem;
        width: 0.8rem;
        border-radius: 0.02rem;
    }

    .restaurant-introduce {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 0.4rem;
    }

    .restaurant-name {
        font-size: 0.21rem;
        font-weight: 800;
    }

    .btn-activity {
        margin-top: 0.3rem;
        font-size: 0.22rem;
    }

    .restaurant-activity {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .activity-name {
        display: inline-block;
        text-align: center;
        width: 0.16rem;
        border-radius: 0.02rem;
        background-color: rgb(240, 115, 115);
    }

    .restaurant-state {
        display: flex;
        flex-direction: row;
        /*justify-content: space-between;*/
        align-items: center;
        height: 0.6rem;
        font-size: 0.2rem;
    }

    .restaurant-food {
        display: flex;
        flex-direction: row;
    }

    .restaurant-state div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;
    }

    .restaurant-food-sort {
        width: 25%;
        font-size: 0.16rem;
        background-color: rgb(245,245,245);
    }

    .restaurant-food-sort ul li {
        height: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgb(237,237,237);
    }

    .food-inform {
        flex-grow: 1;
    }

    .food-img {
        width: 0.6rem;
        height: 0.6rem;
    }

    .food-introduce {
        padding: 0.12rem 0.14rem;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgb(248,248,248);
    }

    .food-one {
        box-sizing: border-box;
        width: 100%;
    }

    .food-introduce > div {
        padding-left: 0.12rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 1.2rem;
    }

    .food-introduce header, .food-money {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .sort {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 0.6rem;
        padding: 0 0.12rem;
    }

    .food {
        height: 1.3rem;
        font-size: 0.14rem;
    }

    .food-name {
        font-size: 0.16rem;
        font-weight: 900;
    }

    .sort-name {
        font-size: 0.18rem;
        font-weight: 900;
    }

    .sort-name-describe {
            color: #999;
        padding-right: .8rem;
    }
    .food-money{
        font-size: 0.18rem;
        color: #f60;
        font-weight: 800;
    }
    .food-money-1{
        line-height: 0.35rem;
    }
    .food-introduce-desc{
        color: #999;
    }
</style>