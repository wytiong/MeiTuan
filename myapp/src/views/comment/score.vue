<template>
    <div>
        <div class="score_box">
            <div class="seller_score">
                <div class="num">{{score}}</div>
                <div class="desc">商家评分</div>
            </div>
            <div class="pack_score">
                <div class="item">
                    <span>口味</span>
                    <star :score="flavor"></star>
                    <span>{{flavor}}</span>
                </div>
                <div class="item">
                    <span>包装</span>
                    <star :score="packing"></star>
                    <span>{{packing}}</span>
                </div>
            </div>
            <div class="delive_score">
                <div class="num">{{delivery}}</div>
                <div class="desc">配送评分</div>
            </div>
        </div>
    </div>
</template>

<script>
import star from '../../components/star/index'
    export default {
        props:["delivery","score","packing","flavor"],
        components:{
            star
        }
        
    }
</script>

<style lang="scss" scoped>
.score_box{
    display: flex;
    background: #fff;
    padding: 0.2rem;
    .seller_score,.pack_score{
        width: 7rem;
        flex: 0 0 7rem;
        text-align: center;
        .num{
            font-size: 1.25rem;
            font-weight: 600;
            height: 1.5rem;
            line-height: 1.5rem;
            color: #ffb000;
        }
    }
    .delive_score{
        border-left: 1px solid #ccc;
        flex: 1;
        text-align: center;
        .num{
            font-size: 1.25rem;
            font-weight: 600;
            height: 1.5rem;
            line-height: 1.5rem;
            color: #999;
        }
    }
    .pack_score{
        flex: 1;
        font-size: 0.85rem;
        color: #666;
        padding: 0 0.8rem 0 0;
        .item{
            margin: 0.4rem 0 0.2rem;
        }
    }
}

</style>