<template>
    <div class="scrollBox">
        <div>
        <seller_header :seller = "seller"></seller_header>
        <van-tabs v-model="active" color="#ffda41" sticky>
            <van-tab title="菜单">
                <order></order>
                <cart :seller="seller"></cart>
            </van-tab>
            <van-tab title="评价">
                <comment></comment>
            </van-tab>
            <van-tab title="商家">
                <seller :seller = "seller"></seller>
            </van-tab>
        </van-tabs>
        </div>
    </div>
</template>

<script>
import {getStoreById} from '../../api/detail'
import seller_header from './seller_header'
import order from './order'
import BScroll from 'better-scroll'
import cart from './cart'
import comment from './../comment/index'
import seller from '../seller'
    export default {
        data(){
            return{
                seller:[],
                active:0,
                scrollBox:null
            }
        },
        components:{
            seller_header,
            order,
            cart,
            comment,
            seller
        },
        methods:{
            getStoreMsg(){
                getStoreById({id:this.$route.query.id}).then(response=>{
                    this.seller = response.data;
                })
            }
        },
        mounted(){
            this.scrollBox = new BScroll('.scrollBox',{
                    bounce:false,
                    click:true
                })
        },
        created(){
            this.getStoreMsg();
        }
    }
</script>

<style lang="scss" scoped>


</style>