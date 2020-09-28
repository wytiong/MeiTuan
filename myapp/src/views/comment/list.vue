<template>
    <div>
        <div class="list_box">
            <ul class="content">
                <li class="list" v-for="arr in list" :key="arr.id">
                    <div class="img_box">
                        <img :src="arr.portrait" />
                    </div>
                    <div class="info_box">
                        <div class="basic">
                            <span class="name">{{arr.name}}</span>
                            <span class="date">{{arr.time}}</span>
                        </div>
                        <div class="time">{{arr.duration}}分钟</div>
                        <div class="desc">{{arr.content}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:["list"]
    }
</script>

<style lang="scss" scoped>
.list_box{
    border-top: 1px solid #e4e4e4;
    .content{
        padding: 0 0.6rem;
        .list{
            display: flex;
            padding: 0.7rem 0.2rem;
            .img_box{
                width: 2.2rem;
                flex: 0 0 2.2rem;
                margin-right: 0.5rem;
                img{
                    width: 100%;
                }
            }
            .info_box{
                flex: 1;
                min-width: 0;
                .basic{
                    color: #2f2f2f;
                    font-size: 1rem;
                    .date{
                        color: #898989;
                        font-size: 0.75rem;
                        float: right;
                    }
                }
                .time{
                    color: #666;
                    font-size: 0.75rem;
                    margin-top: 0.3rem;
                }
                .desc{
                    line-height: 1rem;
                    font-size: 0.8rem;
                    color: #2f2f2f;
                    padding: 0.4rem 0 0.3rem 0;
                }
            }
        }
    }
}

</style>