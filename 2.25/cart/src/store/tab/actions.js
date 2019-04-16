import axios from "axios"
export default {
   handleGoods({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/goods",
        }).then((data)=>{
            console.log(2222)
            console.log(data)
            data.data.map((item)=>{
                item.flag = true
            })
            console.log(data.data);//即datas里面的数据
            commit("handleGoods",data.data)
        })
   }
}
