<template>
    <div>
        <seller_header :seller = "seller"></seller_header>
         <van-tabs v-model="active" sticky animated color="#ffda41">
            <van-tab title="菜单">
                <order></order>
            </van-tab>
            <van-tab title="评价">q</van-tab>
            <van-tab title="商家">q</van-tab>
        </van-tabs>

    </div>
</template>

<script>
import {getStoreById} from '@/api/detail.js'
import seller_header from './seller_header'
import order from './order'
    export default {
        data(){
            return{
                seller:[],
                active:0
            }
        },
        components:{
            seller_header,
            order
        },
        methods:{
            getStoreMsg(){
                getStoreById({id:this.$route.query.id}).then(response=>{
                    // console.log(response);
                    this.seller = response.data;
                });
            },
           
        },
         created(){
                this.getStoreMsg();
            }




    }
</script>

<style lang="scss" scoped>

</style>