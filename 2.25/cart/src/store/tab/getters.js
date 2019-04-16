export default{
    goodsCount(state){
        let goodsNum = 0,goodsPrice = 0;
        state.goodsList.map((item)=>{
            if(item.flag){
                goodsNum += item.num;
                goodsPrice += Math.round(item.num*item.price*100)/100;
            }
        })
        return{
            goodsNum,
            goodsPrice
        } 
    }
}