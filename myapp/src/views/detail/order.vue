<template>
    <div>
        <div class="order_box">
            <div class="menu_box" ref="menuBox">
                <ul>
                    <li v-for="(item,index) in productList" :key="index" class="menu_list" :class="{'active':currentIndex == index}"  @click="changeMenu(index)">{{item.name}}</li>
                </ul>
            </div>
            <div class="right_box" ref="riBox">
                <ul>
                    <li class="cate_list" v-for="(item,TypeIndex) in productList" :key="TypeIndex">
                        <div class="title">{{item.name}}</div>
                        <ul>
                            <li class="select_list" v-for="(arr,In_index) in item.content" :key="arr.id">
                                <div class="right_imgbox">
                                    <img :src="arr.img"/>
                                </div>
                                <div class="select_info">
                                    <div class="name">{{arr.name}}</div>
                                    <div class="sale">
                                        <span class="num">月销{{arr.num}}</span>
                                        <span>赞{{arr.up}}</span>
                                    </div>
                                    <div class="price">¥{{arr.price}}</div>
                                </div>
                                <div class="add_cart">
                                    <addcart :type="TypeIndex" :index="In_index"></addcart>
                                </div>
                                
                                
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import addcart from './../../components/addcart/index'
    export default {
        data(){
            return{
                menuScroll:null,
                rightScroll:null,
                currentIndex:0,
                posY:[],
                menuList:[],
                scrollY:0
            }
        },
        components:{
            addcart
        },
        methods:{
            initScroll(){
                this.menuScroll = new BScroll('.menu_box',{
                    bounce:false,
                    click:true
                });
                this.rightScroll = new BScroll('.right_box',{
                    bounce:false,
                    click:false,
                    probeType:3
                });
                this.getPosY();
                this.menuList = this.$refs.menuBox.getElementsByClassName('menu_list');
                this.rightScroll.on("scroll",(pos)=>{
                    this.scrollY = Math.abs(Math.round(pos.y));
                })

               
            },
             changeMenu(index){
                    let rightList = this.$refs.riBox.getElementsByClassName('cate_list');
                    let el = rightList[index];
                    this.rightScroll.scrollToElement(el,300);
                    this.currentIndex = index;
            },
            getPosY(){
                let rightList = this.$refs.riBox.getElementsByClassName('cate_list');
                let y = 0;
                for(let i=0 ;i<rightList.length; i++){
                    if(i == 0){
                        this.posY.push(y);
                    }else{
                        let preList = rightList[i-1];
                         y += preList.offsetHeight;
                         this.posY.push(y);

                    }
                }
                
            }

        },
        computed:{
            ...mapState('product',['productList'])
        },
        created(){
            this.$store.dispatch('product/getList',this.$route.query.id).then(()=>{
                this.$nextTick(()=>{
                    this.initScroll();
                })
            })
        },
        watch:{
            scrollY(val){
                for(let i=0;i<this.posY.length;i++){
                    let pos_one = this.posY[i];
                    let pos_two = this.posY[i+1];
                    if(pos_one <= val && pos_two > val){
                        let el = this.menuList[i];
                        this.menuScroll.scrollToElement(el,300,0,-100);
                        this.currentIndex = i;
                        break;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.order_box{
    display: flex;
    height: calc(100vh - 120px);
    padding-bottom: 50px;
    box-sizing: border-box; 
    .menu_box{
        width: 4.5rem;
        background-color: #f5f5f5;
        height: calc(100vh - 65px);
        overflow: hidden;
        .menu_list{
            color: #2c3e50;
            font-size: 0.85rem;
            padding: 0.5rem 0.55rem 0.75rem;
            line-height: 1.2rem;
            &.active{
                color: red;
                font-weight: bold;
                font-size: 0.85rem;
            }
        }
    }
    .right_box{
        flex: 1;
        width: 0;
        background-color: white;
        height: calc(100vh - 65px);
        overflow: hidden;
        .cate_list{
            padding: 0 0.65rem;
            .title{
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 14px;
            font-weight: bold;
            }
        }
        .select_list{
            display: flex;
            margin-bottom: 0.25rem;
            position: relative;
            .right_imgbox{
                width: 5rem;
                flex: 0 0 5rem;
                margin-right:0.5rem ;
                img{
                    width: 100%;
                }
            }
            .select_info{
                flex: 1;
                min-width: 0;
                .name{
                    font-size: 0.9rem;
                    color: #333;
                    font-weight: bold;
                    line-height: 1.4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: 0.15rem;
                }
                .sale{
                    font-size: 11px;
                    margin-bottom: 0.5rem;
                    .num{
                        margin-right: 0.2rem;
                    }
                }
                .price{
                    color: #fb4e44;
                    font-size: 1.1rem;
                }
            }
            .add_cart{
                position: absolute;
                right: 0;
                bottom: 0.2rem;

            }
        }
    }
}
</style>