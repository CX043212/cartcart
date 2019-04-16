<template>
  <div class="bottom">
    <label class="allSeleted">
      <input type="checkbox" :checked="all" @click="handleAll">
      <span>全选</span>
    </label>
    <div>删除所有商品</div>
    <div>已选择{{goodsCount.goodsNum}}件商品</div>
    <div>总价{{goodsCount.goodsPrice}}</div>
    <div class="btn">结算</div>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed:{
      ...Vuex.mapGetters({
        goodsCount:"tab/goodsCount"
      }),
      ...Vuex.mapState({
            all:state=>state.tab.allSelected
      })
    },
    methods:{
      ...Vuex.mapMutations({
        handleAll:"tab/handleAll"
      })
    },
};
</script>
<style scoped>
.bottom {
  background: #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
}

.bottom > .btn {
  width: 80px;
  height: 100%;
  background: #c33;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
</style>

