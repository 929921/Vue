<template>
  <div id="show">
    <div class="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in [1,2,3,4]" :key="index">
          <img :src="showData.bannerImg+item+'.jpg'" />
        </mt-swipe-item>
      </mt-swipe>
      <div class="cake-fhsy">更多商品</div>
    </div>
    <div>
      <div class="information-zw"></div>
      <div class="promotion-a">新</div>
    </div>

    <!-- 蛋糕 -->
    <div class="am-u-sm-12 clplr bgw mt4" v-if="isShowDate">
      <div class="cake-info-datum">
        <div class="am-u-sm-12  cake-info-datum-list cake-info-datum-a">
          <div class="cake-info-left">甜度</div>
          <div class="cake-info-right">
            <img
              style="vertical-align: top; width: 22.4vw; margin-top: 0.6vw;"
               :src="`https://res.bestcake.com/m-images/ww/jz/tiandu_${showInfo.Sweet||showInfo.CakeType[0].Sweet}.png`" 
            />
          </div>
        </div>
        <div class="am-u-sm-12 cake-info-datum-list cake-info-datum-b">
          <div class="cake-info-left qfc">口味</div>
          <div class="cake-info-right hfc ng-binding">{{showInfo.CategoryName}}</div>
        </div>
        <div class="am-u-sm-12 cake-info-datum-list cake-info-datum-c">
          <div class="cake-info-left qfc">原材料</div>
          <div class="cake-info-right hfc ng-binding">{{showInfo.Resourse||showInfo.Resource}}</div>
        </div>
        <div class="am-u-sm-12 cake-info-datum-list cake-info-datum-d">
          <div class="cake-info-left qfc">适合人群</div>
          <div class="cake-info-right hfc ng-binding">所有人群</div>
        </div>
        <div class="am-u-sm-12 cake-info-datum-list cake-info-datum-e">
          <div class="cake-info-left qfc">保鲜条件</div>
          <div
            class="cake-info-right hfc"
          >{{showInfo.KeepFresh}}</div>
        </div>
      </div>
    </div>

    <!-- 评价 -->
    <div class="pin">
      <div class="shang">
        <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png" class="shangimg" />
      </div>
      <span class="jia">商品评价</span>
      <div class="tiao">
        <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-b.png" class="shangimg" />
      </div>
      <span class="run">(0条)</span>
    </div>

    <!-- 商品参数 -->
   <div class="main3" v-if="isShowDate">
      <ul>
        <li v-for="(item,index) in showTypes" :key="index" @click="selSize(item,index)" :class="{'aaa':true,active:sizeNum==index?true:false}">
            {{item.Size}}
        </li>
      </ul>
      <div class="ffff">

        <div>
          <p><img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png" class="am-img-responsive" src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png"></p>
          <p>13.5*13.5cm</p>
        </div>

        <div>
          <p><img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png" class="am-img-responsive"></p>
          <p>适合4-5人分享</p>
        </div>
        
         <div>
          <p><img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png" class="am-img-responsive"></p>
          <p>适合4-5人分享</p>
        </div>

         <div>
          <p><img src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png" class="am-img-responsive"></p>
          <p>适合4-5人分享</p>
        </div>

      </div>

    
    </div>
    <!-- 购买数量 -->

    <div class="zong">
      <div class="wen">
        <div class="wen1">购买</div>
      </div>
      <div class="shuliang">
        <div class="ji" @click="del(num)" :class="{'ji':true,active:num>'1'?true:false}">-</div>
        <div class="shuzi">{{num}}</div>
        <div class="jian" @click="num++">+</div>
      </div>
    </div>

    <!-- 价格划线 -->
    <div class="jg">
      <div class="jg1">
        <span class="jg-z">划线价格</span>
        <span class="jg-y">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</span>
      </div>
      <div class="jg1">
        <span class="jg-z">未划线价格</span>
        <span class="jg-y">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</span>
      </div>
    </div>

    <!-- 底部 -->
    <div
      class="am-u-sm-12 clplr bgw mt4"
      style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 99; height: 14.6666vw;"
    >
      <div class="purchase-c">
        <div class="purchase-c-1 ng-binding">{{num*showSize.CurrentPrice}}</div>
      </div>
      <div class="purchase-a" ng-click="buyItNow(true)">
        <div class="purchase-1">立即购买</div>
      </div>
      <div class="purchase-b" ng-click="addcart(false)">
        <div class="purchase-2" @click="addCart">加入购物车</div>
      </div>
    </div>

    <div style="height:100px"></div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      showData: {},
      routeData: {},
      initData: "",
      showInfo: {},
      showTypes: [],
      isShowDate: false,
      showSize: {},
      num: 1,
      sizeNum: 0
    };
  },
  created() {
    // console.log(this.$router)
    // console.log()
    this.routeData = this.$route.query;
    // showData
    this.pageInit();
  },
  methods: {
    pageInit() {
      // banner图片设置
      this.showData.bannerImg = this.setImg(this.routeData.SupplyNo);
      // console.log(this.showData);
    },
    setImg(No) {
      let path = "https://res.bestcake.com/m-images";
      // xx-detail/Name/Name-      1~4.jpg

      // console.log(No)
      if (No.indexOf("KSK") != -1) {
        // "https://res.bestcake.com/m-images/jd-detail/浓情花意/浓情花意-"
        let data = {
          City: this.routeData.City,
          ProName: this.routeData.Name,
          c: "Product",
          m: "GetCakeByName",
          v: new Date().getTime()
        };
        this._getShowData(data, res => {
          // console.log(res);
          this.initData = res;
        });
        return (
          path + `/jd-detail/${this.routeData.Name}/${this.routeData.Name}-`
        ); //1~4.jpg
      } else if (No.indexOf("NS") != -1) {
        // "https://res.bestcake.com/m-imagesjd-detail/浓情花意/浓情花意-"

        let data = {
          Name: this.routeData.Name,
          c: "NsCakeCenter",
          m: "GetNSCakeByName",
          v: new Date().getTime()
        };
        this._getShowData(data, res => {
          // console.log(res);
          this.initData = res;
        });

        return (
          path + `/ns-detail/${this.routeData.Name}/${this.routeData.Name}-`
        ); //1~4.jpg
      } else if (No.indexOf("JZ") != -1) {
        // "https://res.bestcake.com/m-imagesjd-detail/浓情花意/浓情花意-"
        let data = {
          City: this.routeData.City,
          ProName: this.routeData.Name,
          c: "IndexCenter",
          m: "GetjzCakeInfo",
          v: new Date().getTime()
        };
        this._getShowData(data, res => {
          // console.log(res);
          this.initData = res;
        });

        return (
          path + `/jz-detail/${this.routeData.Name}/${this.routeData.Name}-`
        ); //1~4.jpg
      } else if (No.indexOf("RP") != -1) {
        // "https://res.bestcake.com/m-imagesjd-detail/浓情花意/浓情花意-"
        let data = {
          Name: this.routeData.Name,
          c: "NsCakeCenter",
          m: "GetRuPCakeByName",
          v: new Date().getTime()
        };
        this._getShowData(data, res => {
          // console.log(res);
          this.initData = res;
        });

        return (
          path + `/rp-detail/${this.routeData.Name}/${this.routeData.Name}-`
        ); //1~4.jpg
      }
    },
    selSize(item, num) {
      this.showSize = item;
      this.sizeNum = num;
    },
    addCart() {
       MessageBox.confirm("确定加入购物车?").then((action)=>{
          let temp = {
        City: this.$store.state.city,
        SupplyNo: this.$route.query.SupplyNo,
        Name: this.showInfo.Name,
        id:this.showTypes[this.sizeNum].Id,// size ID
        CurrentPrice: this.showTypes[this.sizeNum].CurrentPrice,
        num:this.num,
        mark:show,
        ImgUrl:this.showData.bannerImg+"1.jpg",
        Size:this.showSize.Size
        };
        this.$store.commit("add", temp);
        this.$router.push("/test");
        }).catch(()=>{
          // console.log("No");
        })
      // console.log(this.num)
      // console.log( this.showTypes[this.sizeNum])
      //   let temp = {
      //   City: this.$store.state.city,
      //   SupplyNo: this.$route.query.SupplyNo,
      //   Name: this.showInfo.Name,
      //   id:this.showTypes[this.sizeNum].Id,// size ID
      //   CurrentPrice: this.showTypes[this.sizeNum].CurrentPrice,
      //   num:this.num
      // };
      // this.$store.commit("add",temp);
    },
    del(num){
      if (num==1) {
        return 
      }else{
        this.num--;
      }
    },
    _getShowData(data, callback) {
      this.$apis.getShowData(data).then(res => {
        // 取到所有的数据   数据类型有两种  ksk {}    ns []
        callback(res.data.Tag);
      });
    }
  },
  watch: {
    initData() {
      //目的:  显示详情页数据
      // 1.设置变量
      // this.showInfo
      // this.showTypes
      if (this.initData.length) {
        // 数组情况
        this.initData.map(item => {
          if (this.routeData.City == item.City) {
            this.showTypes.push(item);
          }
        });
        if (this.showTypes.length == 0) {
          this.showTypes[0] = this.initData[0];
        }
        this.showInfo = this.showTypes[0];
        this.isShowDate = true;
      } else {
        // 对象情况
        this.showTypes = this.initData.infos.CakeType;
        this.showInfo = this.initData.infos;
        this.isShowDate = true;
      }
      this.selSize(this.showTypes[0], 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#show {
  .banner {
    height: r(445);
    img {
      width: 100%;
      height: auto;
    }
  }
}
.cake-fhsy {
  position: fixed;
  right: -1px;
  top: r(15);
  background-color: rgba(255, 255, 255, 0.5);
  width: r(80.5);
  height: r(31.75);
  line-height: r(31.75);
  border-radius: r(5);
  text-align: center;
  z-index: 2;
  font-size: r(16);
  border: 1px solid #333;
}
.information-zw {
  line-height: r(16);
  font-weight: bold;
  color: #333;
  font-size: r(18);
  margin-top: r(7.5);
  margin-bottom: r(15);
  text-align: center;
}
.promotion-a {
  margin-left: r(168);
  font-size: r(16);
  line-height: r(30);
  width: r(30);
  height: r(30);
  text-align: center;
  color: #fff;
  border-radius: r(2);
  background: #f2495e;
  margin-right: r(4.987);
}
.clplr {
  padding-left: 0;
  padding-right: 0;
}
.hfc {
  color: #252525;
}
.bgw {
  background: white;
}
.mt4 {
  margin-top: r(15);
}
.qfc {
  color: #9a9a9a;
}
.am-u-sm-12 {
  width: 100%;
}
.cake-info-datum-a {
  margin-bottom: r(10.988);
  margin-top: r(33.998);
}
.cake-info-datum-c {
  margin-bottom: r(15);
}
.cake-info-datum-a {
  margin-bottom: r(10.988);
  margin-top: r(33.998);
  margin-bottom: r(15);
}

.mt4 {
  margin-top: r(35);
  border-top: r(10) solid #ccc;
  height: r(290);
}

.cake-info-datum-c {
  margin-bottom: r(15);
}
.cake-info-datum-list .cake-info-left {
  font-size: r(14);
  float: left;
  width: r(59.734);
  margin-left: r(15);
}
.cake-info-datum-list .cake-info-right {
  font-size: r(14);
  float: left;
  width: r(270);
  margin-left: r(15);
  margin-right: r(15);
  margin-bottom: r(15);
  line-height: r(22);
}
.pin {
  margin-top: r(30);
  padding-left: r(15);
  height: r(22);
  padding: 15px;
  border-top: r(10) solid #ccc;
  border-bottom: r(10) solid #ccc;
}
.shang {
  float: left;
  font-size: r(16);
  margin-top: r(4.5);
  margin-right: r(10.988);
  width: 12%;
}
.shangimg {
  display: block;
  max-width: 55%;
  height: auto;
}
.jia {
  float: left;
  font-size: r(16);
  margin-top: r(3.75);
}
.tiao {
  margin-right: r(-10);
  float: right;
  font-size: r(16);
  margin-top: r(4.875);
  width: 5%;
}
.run {
  float: right;
  font-size: r(16);
  margin-top: r(3.6);
  margin-right: r(4);
  color: #9a9a9a;
}

 .main3{
      padding-bottom: r(10);
      border-bottom:r(20) solid #F7F7F7; 
      ul{
        overflow: hidden;
        .active{
            background: #02d3d6;
            color: #fff;
        }
        .aaa{
        float:left;
        list-style:none;
        width:r(60);
        height:r(30);
        text-align:center;
        line-height:r(30);
        border: 1px solid #ddd;

        border-radius: 2px;
        
        margin: r(30) 0 0 r(10);
      }
      }
      .ffff{
        margin:r(42) 0 0 r(15);
        overflow: hidden;
        
            div{
        float: left;
        font-size:r(16);
        color:#333;
       margin-bottom: r(15);
        p{
          float: left;
          margin-right: r(40);
          
         img{
           width:r(22.5);
           height:r(22.5);
         }
        }
        p:nth-child(1){
          margin-right: r(8);
        }
          p:nth-child(2){
          margin-top: r(3);
        }
      }
      }
    

    }


.can1 {
  float: left;
  height: r(28);
  background: #02d3d6;
  border-radius: r(2);
  color: #fff;
  border: r(1) solid #02d3d6;
  text-align: center;
  line-height: r(28);
  font-size: r(14);
  margin-left: r(15);
  padding: 0 r(13.453);
}
.zong {
  margin-top: r(15);
  border-top: r(10) solid #ccc;
  height: r(52);
}
.wen {
  padding-left: r(15);
  margin-top: 10px;
  margin-top: r(22);
}
.wen1 {
  font-size: r(16);
  line-height: r(22);
}
.shuliang {
  float: right;
  margin: 0 auto;
  margin-right: 10px;
  margin-top: r(-20.875);
}
.ji {
  
  height: r(20);
  font-size: r(18);
  float: left;
}
.shuzi {
  height: r(20);
  float: left;
  width: r(30);
  text-align: center;
  line-height: r(20);
}
.jian {
  font-size: r(18);
  float: left;
}
.jg {
  height: r(184);
  margin-top: r(15);
  border-top: r(10) solid #ccc;
}
.jg1 {
  margin: r(15) 0;
  font-size: r(14);
  margin-top: r(15);
  width: r(345);
  height: r(66);
  line-height: r(22);
}
.jg-z {
  float: left;
  width: r(101.25);
  color: #181818;
}
.jg-y {
  float: left;
  width: r(243.75);
  color: #a2a2a2;
}
.purchase-c {
  float: left;
  margin-left: r(15);
  margin-top: r(5.434);
  margin-bottom: r(9);
  width: r(135);
  height: r(46);
  line-height: r(46);
  overflow: hidden;
}
.purchase-c .purchase-c-1 {
  font-size: r(16);
  color: #f2495e;
  font-weight: bolder;
  width: r(135);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.purchase-a {
  float: right;
  width: r(115);
  text-align: center;
  padding: r(16.304) 0;
  background: #02d4d7;
  color: white;
  font-weight: bolder;
}
.purchase-1 {
  font-size: r(16);
  width: r(115);
  height: r(25);
  line-height: r(25);
}
.purchase-b {
  float: right;
  width: r(110);
  text-align: center;
  padding: r(16.304) 0;
}
.purchase-2 {
  font-size: r(16);
  width: r(110);
  height: r(25);
  line-height: r(25);
}
</style>
