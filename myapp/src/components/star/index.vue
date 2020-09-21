<template>
    <div class="star_box">
        <i v-for="i in 5" :key="i" :class="getClass(i)"></i>
        <!--  -->
    </div>
</template>

<script>
    export default {
        props:{
            score:{
                default:5

            }
        },
        methods:{
            getClass(i){
                if(this.score % 1 ===0){
                    return i<=this.score?"icon-active":"icon-start";
                }else{
                    if(i<this.score){
                        return "icon-active";
                    }else if(Math.ceil(this.score) == i){
                        return "icon-half";
                    }else if(i>this.score){
                        return "icon-star";
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.star_box{
    display: inline-block;
}

.star_box i{
    width: 10px;
    height: 10px;
    display: inline-block;
    line-height: 0;
    margin-right: 2px;
    background-size: 100%;
    &.icon-star{
        background-image: url(.././image/3.jpg);
    }

    &.icon-active{
        background-image: url(.././image/1.jpg);
    }

    &.icon-half{
        background-image: url(.././image/2.jpg);
    }

    
}

</style>