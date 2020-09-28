<template>
    <div class="tag_box">
        <span v-for="arr in tag" :key="arr.id"  class="tag_item" :class="{'active':currentType == arr.id}" @click="changeTab(arr.id)">{{arr.name}}({{arr.count}})</span>
    </div>
</template>

<script>
    export default {
        props:["tag","currentType"],
        methods:{
            changeTab(id){
                this.$emit('change',id)
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.tag_box{
    padding: 0.6rem 0.8rem 0.3rem;
    .tag_item{
        padding: 0 0.5rem;
        display: inline-block;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        font-size: 0.8rem;
        color: #666;
        margin: 0 0.4rem 0.4rem 0;
        border: 1px solid #bbb;
        border-radius: 1rem;
        &.active{
             border: 1px solid #ffb000;
             color: #ffb000;
        }
    }
}
</style>