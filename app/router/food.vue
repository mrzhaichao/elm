<template>
    <div class="food-all">
        <header class="food-head">
            <span><router-link to="select"><i class="fa fa-search " aria-hidden="true "></i></router-link></span>
            <span>北京大学</span>
            <span class="food-head-login">
                <router-link to="/login">登录注册</router-link>
            </span>
        </header>
        <section class="food-list">
            <section class="food-list-all" ref="slide" @touchstart="touchs" @touchmove="touchm" @touchend="touche">
                <div class="food-list-1">
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <!--菜单栏滑动-->
                <div class="food-list-1">
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                    <a href="javascript:void (0)">
                        <figure>
                            <img src="../img/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" alt="">
                            <figcaption>
                                甜品饮品
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </section>
            <div class="btn-circle">
                <a href="javascript:void (0)" ref="btn1" class="btn-1"></a>
                <a href="javascript:void (0)" ref="btn2" class="btn-2"></a>
            </div>
        </section>
        <section class="restaurant-nearby">
            <header class="restaurant-nearby-head">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                <span>附近的商家</span>
            </header>
            <ul class="restaurant-simple-">
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
                <li class="restaurant">
                    <section class="restaurant-img">
                        <img src="../img/15c62c94f24131.jpeg" alt="">
                    </section>
                    <hgroup class="restaurant-inform">
                        <header class="restaurant-head">
                            <h4 class="restaurant-name">效果演示</h4>
                            <ul class="restaurant-guarantee">
                                <li>保</li>
                                <li>准</li>
                                <li>票</li>
                            </ul>
                        </header>
                        <section class="restaurant-head">
                            <section class="restaurant-sell">
                                <span style="color: #ff6000">4.6</span>
                                <section>月售532单</section>
                            </section>
                            <section class="restaurant-service">
                                <span class="restaurant-service-send-way">蜂鸟专送</span>
                                <span class="restaurant-service-send-time">准时达</span>
                            </section>
                        </section>
                        <section class="restaurant-head">
                            <p style="color: #666">
                                <span>￥20起送</span>
                                <span>/</span>
                                <span>配送费约￥5</span>
                            </p>
                            <p>
                                <span style="color: #666">1184.3公里</span>
                                <span>/</span>
                                <span style="color: #3190e8">20小时9分钟</span>
                            </p>
                        </section>
                    </hgroup>
                </li>
            </ul>
        </section>
        <div class="btn-back" @click="back2">
            <i class="fa fa-arrow-circle-o-up fa-4x" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                message: {}
            }
        },
        methods: {
            a: 1,
            touchs(e){
                var startx = e.changedTouches[0].clientX;
                this.a = startx;
            },
            touchm(e){
                var movex = e.changedTouches[0].clientX;
                var mo = movex - this.a;
                this.$refs.slide.style.transform = 'translateX(' + mo + 'px)';
            },
            touche(e){
                //获取两个状态圆
                var btn1 = this.$refs.btn1,
                    btn2 = this.$refs.btn2;
                var slide = this.$refs.slide;
                //获取标签的css样式  注意 element.style只能获取行间样式，但能设置样式
                var slider = getComputedStyle(slide)
                //console.log(slider);
                //手指松开时的坐标点
                var endx = e.changedTouches[0].clientX;
                //手指移动的距离
                var mo = endx - this.a;
                // section的平移距离
                var tran = slide.style.transform.slice(12, -3) - 0;
                //判断平移的方向

                //console.log(slide.offsetWidth);  打印出来的值无px    824
                //console.log(slider.width);       打印出来的值有px    824px
                if (mo < 0) {
                    if (Math.abs(mo) > slide.offsetWidth / 5) {

                        if (slider.flexDirection === 'row') {
                            // 滑动动画
                            var x = setInterval(function () {

                                if (Math.abs(tran) < slide.offsetWidth / 2) {
                                    slide.style.transform = 'translateX(' + (mo -= 10) + 'px)';
                                    var trans = slide.style.transform.slice(12, -3) - 0;
                                    tran = trans;
                                } else {
                                    //清除循环函数
                                    clearInterval(x);
                                    btn2.style.backgroundColor = '#3190e8';
                                    btn1.style.backgroundColor = 'gray';
                                    slide.style.flexDirection = 'row-reverse';
                                    slide.style.transform = 'translateX(0px)';
                                }
                            }, 16);
                        } else {
                            var x = setInterval(function () {

                                if (Math.abs(tran) < slide.offsetWidth / 2) {
                                    slide.style.transform = 'translateX(' + (mo -= 10) + 'px)';
                                    var trans = slide.style.transform.slice(12, -3) - 0;
                                    tran = trans;
                                } else {
                                    clearInterval(x);
                                    btn2.style.backgroundColor = 'gray';
                                    btn1.style.backgroundColor = '#3190e8';
                                    slide.style.flexDirection = 'row';
                                    slide.style.transform = 'translateX(0px)';
                                }
                            }, 16);

                        }
                    } else {
                        var back = setInterval(function () {
                            if (Math.abs(tran) > 0) {
                                slide.style.transform = 'translateX(' + (mo += 10) + 'px)';
                                var trans = slide.style.transform.slice(12, -3) - 0;
                                tran = trans;
                            } else {
                                clearInterval(back);
                                slide.style.transform = 'translateX(0px)';
                            }
                        }, 16);
                    }
                } else {
                    slide.style.transform = 'translateX(0px)';
                }
            },
            //返回顶部函数
            //用的jQuery实现
            back(){
                $('html, body').animate({scrollTop:0})
            },
            //原生js实现
            back2(){
                var sdelay = setInterval(function () {
                    window.scrollBy(0,-10);
                    if(document.body.scrollTop==0){
                        clearInterval(sdelay);
                        document.body.scrollTop=0;
                    }
                    /*if(document.body.scrollTop>0){
                        window.scrollBy(0,-10)
                    }else {
                        clearInterval(sdelay);
                        document.body.scrollTop=0;
                    }*/
                },16);
            }
        }
    }
</script>
<style>

    body {
        width: 100%;
    }

    .food-all {
        width: 100%;
    }

    .food-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding:0 0.12rem;
        height: 0.6rem;
        width: 100%;
        font-size: 0.20rem;
        color: white;
        background-color: #3190e8;
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        box-sizing: border-box;
    }

    .food-head-login a{
        color: white;
        font-size: 0.18rem;
    }

    .food-list-all {
        display: flex;
        flex-direction: row;
        width: 200%;
        height: 2.2rem;
    }

    .btn-1 {
        background-color: #3190e8;
    }

    .btn-2 {
        background-color: gray;
    }
    .fa-search{
        color: white;
    }
    .food-list {
        overflow: hidden;
        margin-top: 0.6rem;
    }

    .food-list-1 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .food-list-1 a {
        width: 25%;
        height: 1rem;
    }

    .food-list-1 a figure {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        font-size: 0.14rem;
    }

    .food-list-1 a img {
        width: 50%;
    }

    .restaurant-nearby {
        border-top: 1px solid rgb(241, 241, 241);
        margin-bottom: 0.6rem;
    }

    .restaurant-nearby-head {
        margin-top: 0.12rem;
        margin-left: 0.12rem;
        font-size: 0.14rem;
        color: rgb(181, 181, 181);
        margin-bottom: 0.2rem;
        display: flex;
        flex-direction: row
    }

    .restaurant-nearby-head i {
        margin-right: 0.12rem;
    }

    .restaurant {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid rgb(241, 241, 241);
        padding: 0.12rem 0.12rem;
    }

    .restaurant-img img {
        width: 0.8rem;
        height: 0.8rem;
    }

    .restaurant-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .restaurant-inform {
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .restaurant-name {
        font-size: 0.18rem;
        font-weight: 600;
    }

    .restaurant-name:before {
        margin-right: 0.08rem;
        font-size: 0.14rem;
        display: inline-block;
        background-color: #ffd930;
        content: '品牌';
    }

    .restaurant-guarantee {
        display: flex;
        flex-direction: row;
    }

    .restaurant-guarantee li {
        border: 1px solid rgb(245, 245, 245);
        color: rgb(181, 181, 181);
        text-align: center;
        margin-left: 0.02rem;
    }
    .restaurant-service{
        transform: scale(0.8, 0.8) translateX(0.12rem);
    }
    .restaurant-service-send-way {
        display: inline-block;
        font-size: 0.05rem;
        padding: 0.02rem 0.01rem;
        color: white;
        background-color: #3190e8;
        box-shadow: 0 0 0.05rem #3190e8;
        /*transform: scale(0.8, 0.8);*/

    }

    .restaurant-service-send-time {
        display: inline-block;
        font-size: 0.05rem;
        border: 1px solid #3190e8;
        border-radius: 0.01rem;
        color: #3190e8;
        box-shadow: 0 0 0.05rem #3190e8;
        /*transform: scale(0.8, 0.8);*/
    }

    .restaurant-sell {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .btn-circle {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .btn-circle a {
        margin: 0 0.06rem 0.12rem 0.06rem;
        border-radius: 50%;
        width: 0.08rem;
        height: 0.08rem;
    }
    .btn-back{
        position: fixed;
        z-index: 999;
        right: 0.24rem;
        bottom: .8rem;
        color: gray;
        /*display: none;*/
    }
</style>