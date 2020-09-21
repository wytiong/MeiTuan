<template>
    <div>
        <div class="order_box">
            <div class="menu_box">
                <ul>
                    <li class="menu_list">推荐</li>
                    <li>折扣</li>
                    <li>进店必买</li>
                </ul>
                    <!-- <li>招牌创意</li>
                    <li>当季新品</li>
                    <li>特色小食</li>
                    <li>温馨提示</li>
                    <li>门店实景</li>
                    <li>砍价专享</li> -->
            </div>
            <div class="right_box"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.order_box{
    display: flex;
}

.order_box .menu_box{
    width: 80px;
    height: calc(100vh - 94px);
    flex: 0 0 80px;
    background-color: #f5f5f5;
}


.order_box .right_box{
    min-width: 0;
    height: calc(100vh - 94px);
    flex: 1;
    background-color: white;
}
</style>