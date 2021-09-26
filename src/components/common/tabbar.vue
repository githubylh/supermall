<template>
    <div id="tabbar">
        <slot></slot>
        <!-- <div class="tabber-item">
            <img src="../../assets/img/tabbar/home_active.svg" alt="">
            <div style="color: #ff8198">首页</div>
        </div>
        <div class="tabber-item">
            <img src="../../assets/img/tabbar/category.svg" alt="">
            <div>分类</div>
        </div>
        <div class="tabber-item">
            <img src="../../assets/img/tabbar/shopcart.svg" alt="">
            <div>购物车</div>
        </div>
        <div class="tabber-item">
            <img src="../../assets/img/tabbar/profile.svg" alt="">
            <div>我的</div>
        </div> -->
    </div>
</template>
<script>
    export default {
        name:'Tabbar'
    }
</script>
<style scoped>
    #tabbar {
        display: flex;
        background-color: #f0f0f0;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
    }
</style>
