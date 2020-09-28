import {getStorelistById} from '../api/detail'
import Vue  from 'vue'
const product = {
    namespaced:true,
    state: {
        productList:[],
    },
    getters:{
        selectList(state){
            let result = [];
            state.productList.forEach(obj => {
                obj.content.forEach(prod=>{
                    if(prod.count){
                        result.push(prod);
                    }
                })
            });
            return result
        },
        totalPrice(state,getters){
            return getters.selectList.reduce((price,prod)=>{
                return price + prod.count*prod.price;
            },0)
        },
        total(state,getters){
            return getters.selectList.reduce((total,prod)=>{
                return total + prod.count;
            },0)
        },
    },
    mutations: {
        saveList(state,arr){
            state.productList = [...arr];

        },
        addCart(state,{type,index}){
            // 分类 索引
            let prod = state.productList[type].content[index];
            console.log(prod)
            if(prod.count){
                Vue.set(prod,'count',prod.count+1);
            }else{
                Vue.set(prod,'count',1);
            }
        },
        reduceCart(state,{type,index}){
            let list = state.productList[type].content[index];
            if(list.count){
                Vue.set(list,'count',list.count-1)
            }
        },
        ClearCart(state){
            state.productList.forEach((item)=>{
                item.content.forEach((prod)=>{
                    if(prod.count){
                        prod.count = 0;
                    }
                })
            })
        }
    },
    actions: {
    //请求列表
        getList({commit},id){
            return new Promise(resolve=>{
                getStorelistById({id}).then(response=>{
                    let list = response.data.goods;
                    list.forEach((item,type)=>{
                        item.content.forEach((prod,index)=>{
                            prod.type = type;
                            prod.index = index;
                        })
                    })
                    commit('saveList',list);
                    resolve();
                })
            })
           
        }
    },
    modules: {
    }

}

export default product;