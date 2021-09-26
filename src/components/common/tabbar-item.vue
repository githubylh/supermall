<template>
    <div class="tabbar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-img"></slot>
        </div>
        <div v-else>
            <slot name="item-img-active"></slot>
        </div>
        <div :style="getActiveColor">
            <slot name="item-text"></slot>
        </div>
        
        <!-- <img src="../../assets/img/tabbar/home_active.svg" alt="">
        <div style="color: #ff8198">首页</div> -->
    </div>
</template>
<script>
    export default {
        name:'Tabbar-item',
        props:{
            path:String,
            activeColor:{
                type:String,
                default: '#ff8198'
            }
        },
        computed:{
            isActive(){
                return this.path == this.$route.path;
            },
            getActiveColor(){
                return this.isActive ? {color:this.activeColor} : "";
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path);
            }
        }
    }
</script>
<style scoped>
/* style="color: #ff8198" */
    .tabbar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        /* line-height: 49px; */
        font-size: 14px;
    }
    .tabbar-item img {
        width: 24px;
        height: 24px;
        margin-top: 2px;
        margin-bottom: 3px;
    }
</style>
