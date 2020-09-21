<template>
    <div>
        <!-- header -->
        <van-sticky :offset-top="0">
        <div class="header">
            <input type="text" placeholder="请输入商家或商品名称" class="search"/>
        </div>
        </van-sticky>
        <category></category>
        <div class="middle_title">附近商家</div>
        <list></list>
    </div> 
</template>

<script>
    import category from './category'
    import list from './list'
    export default {
        components:{
            category,
            list
        }
    }
</script>

<style lang="scss" scoped>
    html{
        font-size: 20px !important;
    }

    .header{
        width: 100%;
        height: 20%;
        line-height: 20%;
        background-color:#ffcc00;
        padding: 10px 0;
        text-align: center;
        vertical-align: middle;
        box-sizing: border-box;
    }
    .search{
        width: 95%;
        height: 35px;
        outline: none;
        border: none;
        border-radius: 20px;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .middle_title{
        height: 23px;
        line-clamp: 23px;
        font-size: 20px;
        text-align: center;
        padding: 15px 0;
        box-sizing: border-box;
        font-weight: 600;
    }
    .middle_title::after,.middle_title::before{
        content: "";
        width: 50px;
        height: 1px;
        transform: scaleY(0.5);
        display: inline-block;
        background:#666666;
        vertical-align: middle;
        margin: 0 10px;
    }
</style>