<template>
    <div class="container">
        <div class="return" @click="$router.push('/')">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="seller_box">
            <div class="img_box">
                <img :src="seller.img"/>
            </div>
            <div class="info_box">
                <div class="time">配送{{seller.minute}}分钟 距离{{seller.distance}}</div>
                <div class="notice">公告:{{seller.notice}}</div>
                <div class="sale">{{seller.full}}</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props:["seller"]
        
    }
</script>

<style lang="scss" scoped>

.container{
    background: #2e2f3b;
        .return{
            height: 2.5rem;
            line-height: 2.5rem;
            color: white;
            padding-left: 0.32rem;
        }
        .seller_box{
            display: flex;
            padding: 0.1rem 0.6rem 0.6rem;
            box-sizing: border-box;
            .img_box{
                width: 5rem;
                flex: 0 0 5rem;
                margin-right: 0.4rem;
                img{
                    width: 100%;
                }
            }
        }
        .info_box{
            flex: 1;
            width: 0;
            color:#fff ;
            font-size: 12px;
            .time{
                margin-bottom: 0.6rem;
            }
            .notice{
                margin-bottom: 0.6rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
}



</style>