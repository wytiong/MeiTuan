<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="已经到底啦~" @load="getData">
        <ul class="ul_list">
            <li class="shop_list" v-for="item in list" :key="item.id"  @click="goDetail(item.id)">
                <div class="img_box">
                    <img :src="item.img"/>
                </div>
                <div class="content_box">
                    <div class="title">{{item.name}}</div>
                    <div class="grade_box">
                        <div class="grade_left">
                            <star :score="item.score"></star>
                            <span class="grade">{{item.score}}分</span>
                            <span>月销{{item.num}}</span>
                        </div>
                        <div class="grade_right">
                            <span class="time">{{item.minute}}分钟</span>
                            <div class="line"></div>
                            <span class="distance">{{item.distance}}</span>
                        </div>
                    </div>
                    <div class="send_box">
                        <div>起送￥{{item.per_capita}}</div>
                        <div class="fee">配送￥{{item.fee}}</div>
                        <div>人均￥{{item.price}}</div>
                    </div>
                </div>
            </li>
        </ul>
        </van-list>
    </div>
</template>

<script>
    import star from './../../components/star'
    import {getStore} from '@/api/home'
    export default {
        data(){
            return{
                current:0,
                size:10,
                list:[],
                loading:false,
                finished:false,
                total:0
            }
        },
        components:{
            star
        },
        methods:{
            getData(){
                getStore({
                    current:this.current,
                    size:this.size
                    }).then(response=>{
                        this.list = this.list.concat(response.data.list);
                        this.loading = false;
                        this.current++;
                        this.total = response.data.total;
                        if(this.list.length >= this.total){
                            this.finished = true;
                        }
                })
            },
            goDetail(id){
                this.$router.push({path:'/detail',query:{id}});
            }
        }
           
        // created(){
        //     this.getData();
        // }
    }
</script>

<style lang="scss" scoped>
.ul_list{
    padding: 5px 2px;
}

.shop_list{
    margin: 10px 3px;
    display: flex;

}

.content_box{
    flex: 1;
}

.content_box .title{
     font-size: 19px;
     font-weight: 600;
     padding: 1px 5px;
     box-sizing: border-box;
     font-family: mtsi-font;
}

.grade_box{
    display: flex;
    justify-content: space-between;
    color: #333;
    font-family: mtsi-font;
    line-height: 1.2;
    padding: 6px 0;
    box-sizing: border-box;
    font-size: 14px;
    position: relative;
}

.grade_box .grade{
    margin-right: 2px;
}

.grade_box .grade_right .time{
    margin-right: 11px;
}



.grade_box .grade_right .distance{
    margin-left: 3px;
}

.grade_box .line{
    height: 10px;
    position: absolute;
    border-right: 1.5px solid #ccc;
    right: 45px;
    bottom: 10px;
}

.grade_box .grade_right{
    display: flex;
}

.send_box{
    display: flex;
    color: #333;
    font-family: mtsi-font;
    line-height: 1.2;
    padding: 0 3px;
    box-sizing: border-box;
    font-size: 14px;

}

.send_box .fee{
    margin: 0 8px;
}

.img_box{
    width: 100px;
    height: 80px;
    padding: 0 5px;
    box-sizing: border-box;
}
.img_box img{
    width: 100%;
}
</style>