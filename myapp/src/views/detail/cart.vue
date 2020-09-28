<template>
    <div>
        <div class="cart_container">
        <div class="cart_box" @click="isShow =! isShow">
            <div class="icon" :class="{'active':total}">
                <i class="iconfont icon-gouwuche-"></i>
                <span class="num" v-show="total">{{total}}</span>
            </div>
            <div class="cart_price" :class="{'active':total}">
                <div class="price ">¥{{totalPrice}}</div>
                <div class="deliver">另需配送费¥{{seller.fee}}</div>
            </div>
            <div class="cart_buy" :class="{'active':this.totalPrice > this.seller.price}">{{buy}}</div>

        </div>
        <div class="ball_box">
            <div v-for="(ball,index) in ballList" :key="index">
                <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                    <div class="ball" v-show="ball.show">
                        <div class="inner"></div>
                    </div>
                </transition>

            </div>
        </div>
        <transition name="fade">
            <div class="catelist_box" v-show="isShow && total">
                <div class="catelist_title"><span @click="ClearCart()">清空购物车</span></div>
                <ul class="list_box">
                    <li class="list" v-for="prod in selectList" :key="prod.id">
                        <span class="name">{{prod.name}}</span>
                        <span class="price">¥{{prod.price}}</span>
                        <addCart :type="prod.type" :index="prod.index"></addCart>
                    <!--  -->
                    </li>
                </ul>
            </div>
        </transition>

        </div>
        <div class="mask" v-show="isShow && total" @click="isShow =! isShow"></div>
    </div>
    
</template>

<script>
import {mapGetters,mapState} from 'vuex'
import addCart from '../../components/addcart/index'
    export default {
        data(){
            return{
                isShow:false
            }
        },
        components:{
            addCart
        },
        props:["seller"],
        computed:{
            ...mapGetters('product',["totalPrice","total","selectList"]),
            ...mapState('ball',["ballList"]),
            buy(){
                if(this.totalPrice == 0){
                    return `¥${this.seller.price}元起送`
                }else if(this.totalPrice < this.seller.price){
                    return `还差¥${this.seller.price - this.totalPrice}元起送`
                }else{
                    return "去结算"
                }
            }
            
        },
        methods:{
            beforeEnter(el){
                for(let i = 0 ;i<this.ballList.length ;i++){
                    let ball = this.ballList[i];
                    if(ball.show){
                        let pos= ball.el.getBoundingClientRect();
                        let y = window.innerHeight - pos.top - 23;
                        let x = pos.left -30;
                        el.display = "";
                        el.style.transform = `translate3d(0,${-y}px,0)`
                        let inner = el.getElementsByClassName('inner')[0];
                        inner.style.transform = `translate3d(${x}px,0,0)`

                    }
                }
            },
            enter(el,done){
                el.offsetWidth;
                this.$nextTick(()=>{
                    el.style.transform = `translate3d(0,0,0)`;
                    let inner = el.getElementsByClassName('inner')[0];
                    inner.style.transform = `translate3d(0,0,0)`;
                    el.addEventListener('transitionend',done)
                })
            },
            afterEnter(el){
                el.style.display = "none";
                this.$store.commit('ball/removeBall')

            },
            ClearCart(){
                this.$store.commit('product/ClearCart')
            }

        }
    }
</script>

<style lang="scss" scoped>
.cart_container{
    position: fixed;
    z-index: 80;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #3b3b3c;
    .cart_box{
        display: flex;
        background-color: #3b3b3c;
        .icon{
            width: 50px;
            height: 50px;
            position: absolute;
            left: 10px;
            top: -10px;
            background-color: #656565;
            border-radius: 50%;
            text-align: center;
            line-height: 50px;
            .num{
                position: absolute;
                right: 0;
                top: 0;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #fb4e44;
                color: white;
                border-radius: 50%;
                transform: scale(0.5) translate(50%,-50%);
            }
            .icon-gouwuche-{
                font-size: 28px;
                color: #c4c4c4;
            }
            &.active{
                background-color: #f8c74e;
                .icon-gouwuche-{
                color: #333;
            }
            }
            
        }
        .cart_price{
            background-color: #3b3b3c;
            padding-left: 70px;
            flex: 1;
            color: #999;
            .price{
                display: none;
               
            }
            .deliver{
                font-size: 14px;
                line-height: 50px;
            }
            &.active{
                .price{ 
                    display: block;
                    font-size: 20px;
                    color:#fff;
                    line-height: 33px;
                }
                .deliver{
                    font-size: 11px;
                    line-height: 16px;
                }
            }
        }
        .cart_buy{
            width: 108px;
            font-size:14px;
            color: #999;
            font-weight: bold;
            line-height: 50px;
            text-align: center;
            &.active{
                font-size: 15px;
                background: #f8c74e;
                color: #333;
                font-weight: normal;
            }
        }
    }
    .ball_box{
        .ball{
            position: fixed;
            left: 30px;
            bottom: 23px;
            transition: all 0.4s cubic-bezier(0.48, -0.28, 0.73, 0.42);
            .inner{
                height: 16px;
                width: 16px;
                background: #00a0bc;
                border-radius: 50%;
                transition: all 0.4s linear;

            }
        }
    }
    .catelist_box{
        position: absolute;
        bottom: 50px;
        left: 0;
        background: #fff;
        border-top: 0.5px solid #e4e4e4;
        width: 100%;
        z-index: -1;
        .catelist_title{
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            text-align: right;
            font-size: 12px;
            background: #f4f4f4;
            color: #2c3e50;
        }
        .list_box{
            padding: 0 10px;
            .list{
            padding: 14px 0;
            border-bottom:1px solid #e4e4e4 ;
            display: flex;
            .name{
                flex: 1;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                font-weight: bold;
            }
            .price{
                color: #fb4e44;
                padding: 0 25px;
            }
            }
        }
       
    }
    .fade-enter{
        transform: translateY(100%);
    }
    .fade-enter-active{
        transition: transform ease 200ms;
    }
    .fade-enter-to{
        transform: translateY(0);
    }
}
.mask{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(7,17,27,0.6);
    backdrop-filter: blur(10px);
    z-index: 50;
}
</style>