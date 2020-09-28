<template>
    <div class="box">
         <i class="iconfont icon-jian" v-if="profuct.count" @click="reduce_Cart()"></i>
        <span class="num" v-if="profuct.count">{{(profuct.count)}}</span>
        <i class="iconfont icon-jia" @click="add_Cart($event)"></i>
    </div>
</template>

<script>
    export default {
        props:["type","index"],
        computed:{
            profuct(){
                return this.$store.state.product.productList[this.type].content[this.index];
                
            }
            
        },
        methods:{
            add_Cart(e){
                this.$store.commit('product/addCart',{type:this.type,index:this.index});
                this.$store.commit('ball/show',e.target);
            },

            reduce_Cart(){
                this.$store.commit('product/reduceCart',{type:this.type,index:this.index})

            }
        }
        
    }
</script>

<style lang="scss" scoped>
.box{

    .iconfont{
        font-size: 1.2rem;
        padding: 0.6rem;
        vertical-align: middle;
    }
    .icon-jian{
        color: #e2e3e5;
    }
    .icon-jia{
        color: #ffc134;
        margin-right: -0.6rem;
    }
    .num{
        vertical-align: middle;
        font-size: 13px;
    }
}

</style>