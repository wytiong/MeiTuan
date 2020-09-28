import request from '@/utils/request'

export function getStoreById(data){
    return request({
        url:'/get_store_id',
        data:data
    })

}

//商品列表
export function getStorelistById(data){
    return request({
         url:'/get_nav',
        data:data
    })    

}


