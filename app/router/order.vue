<template>
    <div>
        <header class="order-head">
            <span> <</span>
            <span>订单列表</span>
            <span></span>
        </header>
        <ul>

        </ul>
    </div>
</template>
<script>
    export default{
    }
</script>
<style>
    .order-head{
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
</style>