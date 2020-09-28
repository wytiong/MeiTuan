<template>
    <div class="commentBox" ref="commentBox">
        <div>
            <score :delivery="comment.delivery" :score="comment.score" :packing="comment.packing" :flavor="comment.flavor"></score>
            <div class="before_tag"></div>
            <tag :tag="comment.label" :currentType="type" @change="change"></tag>
            <list :list="comment.rate"></list>
        </div>
    </div>
</template>

<script>
import score from './score'
import list from './list'
import tag from './tag'
import {getComment} from '../../api/comment'
import BScroll from "better-scroll"
    export default {
        data(){
            return{
                type:1,
                comment:{},
                commentScroll:null
            }
        },
        components:{
            score,
            list,
            tag
        },
        methods:{
            getData(){
                return new Promise(resolve=>{
                    getComment({
                        id:this.$route.query.id,
                        type:this.type
                    }).then(response=>{
                        this.comment = response.data;
                        resolve();
                    });
                });
                
            },
            change(id){
                this.type = id;
                this.getData();
            }
        },
        created(){
            this.getData().then(()=>{
                this.$nextTick(()=>{
                    this.commentScroll = new BScroll(this.$refs.commentBox,{
                        bounce:false,
                        click:false
                    })
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
.commentBox{
    height: calc(100vh - 44px);
}

.before_tag{
    border-top: 0.65rem solid #f4f4f4;
}
</style>