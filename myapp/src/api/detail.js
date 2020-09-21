import request from '@/utils/request'

export function getStoreById(data){
    return request({
        url:'/get_store_id',
        data:data
    })
}