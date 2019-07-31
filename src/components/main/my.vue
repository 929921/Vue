<template>
  <div>
    <div class="touxiang">
      <div class="tx">
        <img src="https://res.bestcake.com/m-images/order/mw-person-tx.png" alt />
      </div>
      <div class="zh">{{156165135}}</div>
    </div>
    <div class="dj">
      <div class="vip">
        <div class="vip1">会员等级</div>
        <div class="vip2">V0</div>
      </div>
      <div class="vip">
        <div class="vip1">吉致币</div>
        <div class="vip2">0</div>
      </div>
      <div class="vip">
        <div class="vip1">优惠券</div>
        <div class="vip2">0</div>
      </div>
      <div class="vip">
        <div class="vip1">兑换券</div>
        <div class="vip2">0</div>
      </div>
    </div>
    <div class="person-dd">
      <div class="person-dd-1">
        <div class="person-dd-2">
          <img class="aaa" src="https://res.bestcake.com\m-images\order\mw-person-dd.png" alt />
        </div>
        <div class="person-dd-3">我的订单</div>
        <div class="person-dd-4 person-dd-5">
          <img class="aaa" src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg" alt />
        </div>
      </div>
      <div class="personclear"></div>
      <div class="person-dd-1">
        <div class="person-dd-2">
          <img class="aaa" src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg" alt />
        </div>
        <div class="person-dd-3">收货地址</div>
        <div class="person-dd-4 person-dd-5">
          <img class="aaa" src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg" alt />
        </div>
      </div>
    </div>
    <div class="am-u-sm-12 clplr person-rx-1" align="center">
      <p style="color:#999;">客服热线：400-627-5757</p>
    </div>
    <div class="am-u-sm-12 clplr person-rx-2" align="center">
      <p style="color:#999;">服务协议与证照信息</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.touxiang {
  padding-left: 0;
  padding-right: 0;
  background: #fff;
  width: 100%;
  .tx {
    padding-top: r(24.975);
    text-align: center;
    img {
      width: r(78.969);
      border-radius: 50%;
    }
  }
  .zh {
    text-align: center;
    padding-top: r(4.987);
    line-height: r(18.997);
    font-size: r(15);
    color: #000;
  }
}
.dj {
  padding-top: r(32.475);
  background: #fff;
  padding-bottom: r(15);
}
.vip {
  text-align: center;
  width: 25%;
  float: left;
  position: relative;
}
.vip1 {
  text-align: center;
  line-height: r(15);
  font-size: r(12);
  color: #ccc;
  width: 100%;
  float: left;
}
.vip2 {
  text-align: center;
  padding-top: r(18);
  line-height: r(20.997);
  font-size: r(15);
  color: #333;
}
.person-dd {
  height: r(108.875);
  margin-top: r(45);
  background: #fff;
  width: 100%;
}
.person-dd-1 {
  float: left;
  width: 100%;
}
.person-dd-1 div {
  float: left;
}
.person-dd-2 {
  text-align: center;
  padding-left: r(15);
  padding-top: r(9.975);
  padding-bottom: r(15);
}
.aaa {
    margin-top: r(3);
  width: r(15);
}
.person-dd-3 {
  text-align: center;
  font-size: r(16);
  padding-left: r(9.975);
  padding-top: r(14.475);
  padding-bottom: r(14.475);
}
.person-dd-1 .person-dd-5 {
  float: right;
  margin-right: r(15);
}
.person-dd-4 {
  padding-top: r(14.475);
}
.personclear {
  clear: both;
  border-bottom: r(1) solid #ddd;
  margin-left: r(15);
}
.person-rx-1 {
  margin-top: r(133.988);
  line-height: r(15);
  color: #999;
  font-size: r(12);
}
.person-rx-2{
    margin-top: r(37.5);
    line-height: r(15);
    color: #999;
    font-size: r(12);
}
</style>