import axios from 'axios'
const BASE_URL = "http://admin.gxxmglzx.com/tender/test"
export default function({url,data={}}){
    return new Promise(resolve =>{
        axios.get(BASE_URL+url,{
            params:data
        }).then(response=>{
            if(response.data.errcode === 200){
                resolve(response.data)
            }else{
                console.log(response.errmsg)
            }
        }).catch(err=>{
            console.log(err)
        })
    })
    

}