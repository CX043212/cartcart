<template>
  <div id ="goods">
      <div class="goodsItem" v-for="(item,index) in goodslist">
        <input type="checkbox" :checked ="item.flag" @click="handleToggle(index)">
        <div class="goodsInfo">
          <img :src="item.img">
          <p>{{item.goodsName}}</p>
        </div>
        <div class="price">{{item.price}}</div>
        <div class="count">
          <button @click="handleReduce(index)">-</button>
          <input type="text" :value="item.num">
          <button @click="handleAdd(index)">+</button>
        </div>
        <div class="total">{{item.price|price(item.num)}}</div>
        <div class="del">删除</div>
      </div> 
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goodslist: state=>state.tab.goodsList
    })
  },
  methods:{
    ...Vuex.mapMutations({
      handleToggle:"tab/handleToggle",
      handleAdd:"tab/handleAdd",
      handleReduce:"tab/handleReduce"
    })
  },
  filters:{
    price(val,num){
      return "￥" + Math.round(val*num*100)/100;//即item.price和item.num
    }
  }
};
</script>
<style scoped>
#goods>.goodsItem {
  width: 100%;
  height: 80px;
  display: flex;
  background: #c1c1c1;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
}
.goodsInfo {
  display: flex;
  width: 300px;
}
.goodsInfo > img {
  width: 60px;
  height: 60px;
}
.price {
  margin-left: 64px;
}
.count >*{
  float: left;
}

.total {
  margin-left: 45px;
}
.del {
  margin-left: 80px;
}
</style>


