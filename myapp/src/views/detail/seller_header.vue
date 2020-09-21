<template>
    <div class="container"> 
        <div class="header" @click="$router.push('/')">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="seller_box">
            <div class="img_box">
                <img :src="seller.img" alt=""/>
            </div>
            <div class="content_box">
                <div class="time">配送{{seller.minute}}分钟 距离{{seller.distance}}</div>
                <div class="msg">公告:{{seller.notice}}</div>
                <div class="marge">{{seller.full}}</div>
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
    background-color: #2e2f3b;
}

.header{
    height: 45px;
    line-height: 45px;
    color: white;
    padding-left: 8px;
    font-weight: 800;
}

.seller_box{
    display: flex;
}

.seller_box .img_box{
    width: 100px;
    height: 80px;
    margin: 0 10px;
    margin-bottom: 10px;
}


.seller_box .img_box img{
    width: 100px;
    height: 80px;
}



.content_box{
    float: 1;
    margin: 0 5px;
    color: white;
    font-size: 12px;

}

.content_box .time{
    height: 15px;
    line-height: 15px;
    margin-bottom:10px ;
}

.content_box .msg{
    height: 15px;
    line-height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom:10px ;
}

.content_box .marge{
    height: 15px;
    line-height: 15px;
}

</style>