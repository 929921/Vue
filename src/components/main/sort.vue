<template>
  <div class="goods">
    <ul>
      <li v-for="(item,index) in tablist" :key="index" style="float:left">
        <button @click="sel(index)" :class="cindex==index?'then':''">{{item.title}}</button>
      </li>
    </ul>
    <div class="tp">
      <ul>
        <li v-for="(item,index) in goodList" :key="index" class="list">
          <img :src="item.ImgUrl" @click="toPath(item)" />
          <img
            src="https://res.bestcake.com\m-images-2\list-cart.png?v=1"
            class="gw_icon"
            @click="add(item)"
          />
          <div class="name">{{item.Name}}</div>
          <div class="means">{{item.Means}}</div>
          <div class="price">
            <span>{{item.CurrentPrice}}</span>
            <span>/{{item.Size}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="jg-gonggao">
      <div class="jg-gonggao1">
        <div class="jg-text-z">划线价格</div>
        <div class="jg-text-y">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
      </div>
      <div class="jg-gonggao1">
        <div class="jg-text-z">未划线价格</div>
        <div class="jg-text-y">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      goodList: [],
      cindex: 0
    };
  },
  props: ["tablist"],
  created() {
    this.sel(0);
  },
  methods: {
    sel(index) {
      this.cindex = index;
      this.goodList = this.tablist[index].list;
      // console.log(this.goodList);
    },
    toPath(item) {
      // return;
      this.$router.push({
        path: "/show",
        query: {
          City: this.$store.state.city,
          SupplyNo: item.SupplyNo,
          Name: item.Name,
          id: item.ID
        }
      });
    },
    add(item) {
     

      let temp = {
        City: this.$store.state.city,
        SupplyNo: item.SupplyNo,
        Name: item.Name,
        id: item.Id || item.ID,
        CurrentPrice: item.CurrentPrice,
        ImgUrl: item.ImgUrl
      };
      this.$store.commit("add", temp);
       Toast({
        message: item.Name + "已添加购物车",
        position: "middle",
        duration: 700
      });
    }
    
  },

  watch: {
    tablist() {
      this.sel(0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.goods {
  height: auto;

  .gw_icon {
    width: r(20) !important;
    height: r(20) !important;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  ul {
    margin-left: 70px;
    button {
      border: none;
      font-size: r(16);
      margin-right: r(14);
      margin-top: 30px;
      background: none;
    }
  }
  .tp {
    width: 100%;
    margin: 0 auto;
    ul {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;

      img {
        width: r(165);
        height: r(165);
      }
      .list {
        width: r(165);
        height: r(231);
        float: left;
        position: relative;
      }
      .list:nth-child(odd) {
        margin-right: r(30);
        margin-bottom: r(15);
        margin-left: r(8);
      }
      .name {
        font-size: r(16);
        color: #333;
        padding-left: r(5);
        margin-top: r(5);
      }
      .means {
        font-size: r(12);
        color: #999;
        padding-left: r(5);
        margin-top: r(7);
        width: r(160);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        padding-left: r(5);
        margin-top: r(10);

        span:nth-child(1) {
          color: #ff3300;
          font-size: r(14);
        }
        span:nth-child(2) {
          color: #bcbcbc;
          font-size: r(12);
        }
      }
    }
  }
  .jg-gonggao {
    overflow: hidden;
    margin-top: r(10);
    height: r(300);
    .jg-gonggao1 {
      width: r(345);

      margin: 0 auto;
      .jg-text-z {
        float: left;
        width: r(100);
        color: #181818;
        font-size: r(14);
        line-height: 24px;
      }
      .jg-text-y {
        float: left;
        width: r(244);
        color: #a2a2a2;
        font-size: r(14);
        line-height: 24px;
      }
    }
  }
  .then {
    color: black;
    border-bottom: 2px solid red;
  }
}
</style>
