<template>
  <div id="gwc">
    
    <ul class="gwnr">
      <li v-for="(item,index) in $store.state.cartList" :key="index">
        <!-- <img src="https://res.bestcake.com/m-images/order/mw_firm_duihao_2.jpg"> -->
        <div class="div">
          <input type="checkbox" v-model="item.bool" @change="count" />
        </div>
        <div class="div">
          <img :src="item.ImgUrl" class="img2" />
        </div>
        <div class="div">
          <div>{{item.Name}}</div>
          <div>
            <span class="span1">{{item.Size}}</span>
            <button @click="del(item)">
              <b>-</b>
            </button>

            <span class="span2">{{item.num}}</span>
            <button @click="add(item)">
              <b>+</b>
            </button>
          </div>
          <div class="price" style="font-size:r(14);">{{item.CurrentPrice*item.num}}</div>
        </div>
        <div class="jg">
          <span>优惠方式</span>&nbsp;&nbsp;
          <span style="color:#333;">爆款直降￥110</span>
        </div>
      </li>
    </ul>

    <div class="jiesuan">
      <div class="isAllsel">
        <input type="checkbox" v-model="isAllsel" @click="allsel" />
        <button @click="allsel" style="padding:0;padding-right:10px">全选</button>
      </div>

      <div @click="remove()">清空</div>

      <div style="float:right;">
        <div style="margin-right:15px;">
          <p>
            合计:
            <span>{{allPrice}}.00</span>
          </p>
        </div>
        <div class="clplr gwc-js-4">
          <a>结算</a>
        </div>
      </div>
    </div>

    <div class="tjzq">
      <div class="titile">
        <div class="zz">Hot Recommend</div>
        <div class="heng"></div>
        <div class="yy">热销商品推荐</div>
      </div>

      <div class="main" style="margin:0 15px;">
        <div class="tjzq_main">
          <img src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg" />
        </div>
        <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致生巧</div>
        <div class="am-u-sm-10 clplr" style="font-size: 3.46vw; color: #333; line-height: 3.46vw;">
          <a style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;">168.00</a>/1盒
        </div>
        <div class="sss">
          <img src=" https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" />
        </div>
      </div>

      <div class="main">
        <div class="tjzq_main">
          <img src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg" />
        </div>
        <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致牛轧糖</div>
        <div class="am-u-sm-10 clplr" style="font-size: 3.46vw; color: #333; line-height: 3.46vw;">
          <a style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;">68.00</a>/16粒装
        </div>
        <div class="sss">
          <img src=" https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" />
        </div>
      </div>


      <div class="main">
        <div class="tjzq_main">
          <img src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg" />
        </div>
        <div class="am-u-sm-12 clplr gwc-cake-3">伴手礼系列-吉致泡芙</div>
        <div class="am-u-sm-10 clplr" style="font-size: 3.46vw; color: #333; line-height: 3.46vw;">
          <a style="font-size: 3.46vw; color: #333; line-height: 3.46vw; font-weight: bold;">88.00</a>/0.8磅
        </div>
        <div class="sss">
          <img src=" https://res.bestcake.com\m-images\order\mw_firm_gwc.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      cartList: [],
      allPrice: 0,
      isAllsel: false,
      isArr: []
    };
  },
  created() {
    this.cartList = this.$store.state.cartList;
    this.cartList.map(item => {
      item.fool = false;
    });
  },
  methods: {
    add(item) {
      this.$store.commit("add", item);
      this.count();
    },
    // del(item){
    //   this.$store.commit("del", item);
    //   this.count();
    // },
    del(item) {
      if (item.num <= 1) {
        MessageBox.confirm("Are you sure?").then(action => {
          this.cartList.map((el, i) => {
            if (el.id == item.id) {
              this.cartList.splice(i, 1);
            }
          });

          return;
        });
      }
      item.num--;
      this.count();
    },
    remove() {
      this.cartList.splice(0, this.cartList.length);
      this.allPrice = 0;
    },
    count() {
      this.allPrice = 0;
      this.isArr = [];
      this.cartList.map(item => {
        if (item.bool) {
          this.allPrice += item.num * item.CurrentPrice;
          this.isArr.push(item);
        }
      });
      if (this.isArr.length == this.cartList.length) {
        this.isAllsel = true;
      } else {
        this.isAllsel = false;
      }
    },
    allsel() {
      this.isAllsel = !this.isAllsel;
      this.cartList.map(item => {
        item.bool = this.isAllsel;
      });
      this.count();
    }
  },
  watch: {
    cartList() {
      // console.log("ok");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#gwc {
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  .tjzq {
    background: #f7f7f7;
    overflow: hidden;
    padding: r(150) 0;
    height: auto;
    .titile {
      .zz {
        font-size: r(24);
        text-align: center;
      }
      .heng {
        font-size: r(16);
        width: r(196);
        height: r(2);
        background: #333;
        margin: r(8) auto;
      }
      .yy {
        font-size: r(16);
        text-align: center;
      }
    }

    .main:nth-child(odd) {
      margin-right: r(10);
    }

    .main {
      width: r(165);
      line-height: auto;
      position: relative;
      float: left;
      .tjzq_main {
        width: r(165);
        height: r(165);
        margin-top: r(40);
      }

      .clplr {
        font-size: r(14);
        margin: r(4.5) 0 r(9);
      }
      .sss {
        width: r(21);
        height: r(21);
        position: absolute;
        right: 0;
        bottom: 0;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .jiesuan {
    overflow: hidden;
    margin: 0;
    padding: 0;
    right: 0;
    height: r(56);
    position: fixed;
    bottom: r(52);
    z-index: 999;
    background: #fff;
    width: 100%;
    div {
      box-sizing: border-box;
    }
    div:nth-child(1) {
      float: left;
      height: 100%;
      padding-top: r(15);
    }

    div:nth-child(2) {
      float: left;
      height: 100%;
      padding-top: r(20);
    }

    div:nth-child(3) {
      font-size: r(12);
      float: left;
      //  padding-right:r(60);
      text-align: right;
      box-sizing: border-box;
      span {
        color: red;
        font-size: r(18);
        font-weight: 700;
      }
    }
  }

  button {
    background: none;
    border: none;
  }
  .js {
    width: r(115);
    height: r(56);
    background: #02d4d7;
    line-height: r(56);
    text-align: center;
    color: white;
    font-size: r(16);
    float: right;
    padding: 0;
  }
}

.gwnr {
  height: auto;
  overflow: hidden;

  .jg {
    font-size: r(14);
    color: #f2495e;
    line-height: r(50);
    margin-top: r(5);
  }
  li {
    padding: r(20) 0;
    overflow: hidden;
    border-bottom: r(20) solid #f7f7f7;
    background: #fff;
    .div {
      float: left;
      margin-right: r(15);
    }
    .div:nth-child(1) {
      margin-left: r(13);
      margin-top: r(44);
    }
    .div:nth-child(2) {
      img {
        width: r(114);
        height: r(106);
      }
    }
    .div:nth-child(3) {
      width: r(195);
      margin-right: 0;
      .span1 {
        font-size: r(12);
        color: #ccc;
        margin-right: r(80);
      }
      div {
        margin-bottom: r(18);
      }
      div:nth-child(1) {
        margin-bottom: r(5);
      }

      button {
        background: none;
        border: none;
        font-size: r(16) !important;
        b {
          font-size: r(16);
          padding: 0 r(5);
        }
      }
    }
  }
}
.gwc-js-4 {
  float: left;

  a {
    display: block;
    margin-top: r(-19);
    text-align: center;
    font-size: r(16);
    width: r(114.969);
    line-height: r(56);
    background: #02d4d7;
    color: #fff;
    font-weight: bolder;
  }
}
.main1{
  margin-left: r(15);
}
</style>
