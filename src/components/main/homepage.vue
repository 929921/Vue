<template>
  <div>
    <!-- 头部 -->
    <header class="flxe">
      <div class="left">
        <i class="fa fa-google-wallet fa-2x"></i>
      </div>
      <div class="logo">
        <img class="img" src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </div>
      <div class="reght">
        <i class="fa fa-smile-o fa-2x aaa"></i>
      </div>
    </header>

    <!-- 轮播 -->
    <div class="banner">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="(item,index) in topic" :key="index">
          <img :src="`https://img02.hua.com/slider/${item}`" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 小标题 -->
    <div class="conpany-info">
      <div class="fa fa-check-circle fa-1x">认证龙头企业</div>
      <div class="fa fa-check-circle fa-1x">14年品牌</div>
      <div class="fa fa-check-circle fa-1x">3小时送花</div>
      <div class="fa fa-check-circle fa-1x">最近321144条好评</div>
    </div>

    <!-- 列表 -->
    <div class="procate">
      <div class="procate-item">
        <img src="https://img02.hua.com/m/home/img/m_home_category_flower.png" />
        <p>鲜花</p>
      </div>
      <div class="procate-item">
        <img src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" />
        <p>永生花</p>
      </div>
      <div class="procate-item">
        <img src="https://img02.hua.com/m/home/img/m_home_category_cake.png" />
        <p>蛋糕</p>
      </div>
      <div class="procate-item">
        <img src="https://img02.hua.com/m/home/img/m_home_category_gift.png" />
        <p>礼品</p>
      </div>
      <div class="procate-item">
        <img src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" />
        <p>巧克力</p>
      </div>
    </div>

    <!-- 选项 -->

    <section class="scene">
      <div class="modetitle">一秒选花</div>
      <div class="scene-list">
        <div class="scene-item scene-item-radius">
          <img src="https://img02.hua.com/m/home/img/m_home_use_love.png?0718" alt="送恋人" />
          <span class="scene-item-title">送恋人</span>
        </div>
      </div>

      <div class="scene-list">
        <div class="scene-item scene-item-radius">
          <img src="https://img02.hua.com/m/home/img/m_home_use_birthday.png?0718" alt="生日祝福" />
          <span class="scene-item-title">生日祝福</span>
        </div>
      </div>
      <!--mode-2-->

      <div class="scene-list">
        <a
          href="/ranking/"
          class="scene-item scene-item-bg"
          style="background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist.png?0718);"
        >
          <p class="scene-item-name">热销榜</p>
          <p class="scene-item-desc">集万千宠爱</p>
          <div class="scene-item-bottom">
            <span class="scene-item-bottom-label">大家都在买</span>
            <span class="scene-item-bottom-text">热销9.8万束</span>
          </div>
        </a>
        <a
          href="/xingjiabixianhua/"
          class="scene-item scene-item-bg"
          style="background-image: url(https://img02.hua.com/m/home/img/m_home_special.png?0718);"
        >
          <p class="scene-item-name">特价专区</p>
          <p class="scene-item-desc">超值好货</p>
          <div class="scene-item-bottom">
            <span class="scene-item-bottom-label">限时直降</span>
            <span class="scene-item-bottom-text" data-id="9012056" style="opacity: 1;">
              ¥132
              <s>¥188</s>
            </span>
          </div>
        </a>
      </div>
      <!--mode-3-->

      <div class="scene-list">
        <div class="scene-item">
          <a href="https://m.hua.com/flower/?r=3" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_category_new.png?0718" alt="新品来袭" />
            <span class="scene-item-pange">新品来袭</span>
          </a>
        </div>
        <div class="scene-item">
          <a href="https://m.hua.com/pinzhixianhua/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_category_quality.png?0718" alt="品味之选" />
            <span class="scene-item-pange">品味之选</span>
          </a>
        </div>
        <div class="scene-item">
          <a href="https://m.hua.com/you/" class="navigation">
            <img src="https://img02.hua.com/m/home/img/m_home_category_you.png?0718" alt="设计师甄选" />
            <span class="scene-item-pange">设计师甄选</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data() {
    return {
      topic: [
        "18_youflower_m.jpg",
        "19_qixi_0725_m.jpg",
        "18_shizizuo_m.jpg",
        "18_birthday_m.jpg"
      ]
    };
  },
  computed: {},
  mounted() {
    this.pageInit();
    this.$apis.getTest().then(res => {
      console.log(res);
    });
  },
  methods: {
    pageInit() {
      this._getTest(res => {});
      // this.SaleList.map(item => {
      //   item.map(item => {
      //     item.ImgUrl = this.setUrl(item);
      //   });
      // });
    },
    // toPath(item) {
    //   console.log(item.SupplyNo);

    //   this.$router.push({
    //     path: "/show",
    //     query: {
    //       City: this.$store.state.city,
    //       SupplyNo: item.SupplyNo,
    //       Name: item.Name,
    //       id: item.Id
    //     }
    //   });
    // },

    _getTest(callback) {
      this.$apis.getTest().then(res => {
        callback();
      });
    }
  },
  watch: {}
};
</script>




<style scoped lang="scss">
.flxe {
  display: flex;
  height: r(48);
  align-items: center;
  justify-content: center;
  background: #435448;
  overflow: hidden;
  color: #fff;
}
.left {
  padding-left: r(14);
}
.flxe > .logo {
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
}
img {
  width: 100%;
  vertical-align: middle;
}
.img {
  width: r(150);
}
.reght {
  width: r(48);
  height: r(48);
  line-height: r(48);
  box-sizing: content-box;
  text-align: center;
}
.aaa {
  margin-top: 10px;
}
.banner {
  width: 100%;
  height: r(180);
  margin: r(0) auto;
  opacity: 1;
  img {
    width: 100%;
    height: auto;
  }
}
.conpany-info {
  width: r(375);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  height: r(36);
  overflow: hidden;
  background: #fff;
}
.conpany-info > .fa-check-circle {
  width: auto;
  height: r(36);
  line-height: r(36);
  text-align: center;
  font-size: r(12);
}
.conpany-info > .fa-check-circle {
  margin-left: r(12);
}
.fa-1x::before {
  font-size: r(15);
  margin-right: r(2);
  color: #435448;
  vertical-align: bottom;
  font-style: normal;
}
.procate {
  border-top: 1px solid #ccc;
  display: flex;
  background: #fff;
  padding: r(8) 0;
  .procate-item {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    font-size: r(12);
    img {
      width: r(36);
    }
  }
}
.scene {
  background: #fff;
  padding-bottom: r(16);
  .modetitle {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: r(12);
    line-height: r(16);
    background: #fff;
    font-size: r(16);
    .modetitle::before{
      content: '';
      display: inline-block;
      width: r(3);
      height: r(16);
      background: #435448;
      margin-right: r(12);

    }
  }
}
</style>
