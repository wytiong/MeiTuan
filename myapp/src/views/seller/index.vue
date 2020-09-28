<template>
    <div class="seller_box">
        <ul class="list">
            <li class="content">
                <i class="iconfont icon-ditu"></i>
                <span class="address">{{seller.address}}</span>
            </li>
        </ul>
        <ul class="list">
            <li class="content">
                <i class="iconfont icon-peisong1"></i>
                <span class="address">配送服务:{{seller.server}}</span>
            </li>
            <li class="content">
                <i class="iconfont icon-shijian"></i>
                <span class="address">配送时间:{{seller.delivery_time}}</span>
            </li>
        </ul>
        <ul class="list">
            <li class="content">
                <i class="iconfont icon-manjianyouhui"></i>
                <span class="address">{{seller.full}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["seller"]
        
    }
</script>

<style lang="scss" scoped>
.seller_box{
    padding: 0 0.8rem; 
    .list{
        margin-top: 0.8rem;
        border-bottom: 1px solid #ebedf0;
        .content{
            margin-bottom: 0.8rem;
            line-height: 1.2rem;
            font-size: 0.8rem;
            .iconfont{
                color: #c0c0c0;
                margin-right: 0.5rem;
            }
            .address{
                margin-left: 0.5rem;
            }
            .icon-manjianyouhui{
                color: #fb4d41;
            }
        }
    }
}
</style>