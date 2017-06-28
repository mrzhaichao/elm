<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <footer class="home-foot" @click="colorChange">
            <ul>
                <li>
                    <router-link to="/shop">
                        <i class="fa fa-cutlery fa-2x" aria-hidden="true"></i>
                        <span>外卖</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/select">
                        <i class="fa fa-compass fa-2x" aria-hidden="true"></i>
                        <span>搜索</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/order">
                        <i class="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
                        <span>订单</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/my">
                        <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
                        <span>我的</span>
                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>
    export default{
        methods: {
            //改变图标颜色函数
            colorChange(event){
                var active = document.getElementById('change');
                //判断是否存在蓝色的标签
                if (active) {
                    //存在将此标签的id设为空
                    active.id = '';
                }
                //console.log(event.target);
                var parent = event.target.parentNode;
                //console.log(parent);
                var child = parent.childNodes[0];
                child.id = 'change';
                //console.log(child);
            },

        },
        mounted(){
            var bl = document.getElementsByClassName('home-foot')[0].childNodes[0];
            var cl = bl.childNodes[0];
            var dl = cl.firstChild;
            dl.id = 'change';
        }
    }
</script>
<style>
    .home-foot {
        position: fixed;
        left: 0;
        bottom: 0;
        /*height: 0.5rem;*/
        width: 100%;
        padding-top: 0.05rem;
        box-sizing: content-box;
        border-top: 0.01rem solid rgb(237, 237, 237);
        background-color: white;
    }

    .home-foot ul li {
        display: inline-block;
        width: 25%;
        text-align: center;
        color: #666;
    }

    .home-foot ul li a i {
        width: 100%;
    }

    .home-foot ul li a span {
        display: block;
    }
    .home-foot ul li a {
        color: black;
    }
    .home-foot ul {
        width: 100%;
        display: flex;
    }


    .fa {
        display: block;
    }

    #change {
        color: #3190e8;
    }
</style>