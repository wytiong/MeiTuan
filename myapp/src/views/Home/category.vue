<template>
    <div>
        <ul class="list_box">
            <li class="list_h" v-for="obj in catelist" :key="obj.id">
                <img class="list_img" :src="obj.img"/>
                <p>{{obj.name}}</p>
            </li>
        </ul>

    </div>
</template>

<script>
    // import axios from 'axios'
    // import {getCategory} from '@/api/home.js'
    import { getCategroy } from '@/api/home.js'
    export default {
        data(){
            return {
                catelist:[]
            }
        },
        created(){
            getCategroy().then(response=>{
                this.catelist = response.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
.list_box{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    text-decoration: none;
}

.list_h{
    width: 20%;
    text-align: center;
    padding-top: 15px;
    box-sizing: border-box;
    
}

.list_img{
    width: 45px;
    height: 45px;
}

.list_h p{
    padding: 5px 0;
    box-sizing: border-box;
    font-size: 13px;
}
</style>