<template>
  <div>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item
        :id="'box'+index"
        v-for="(item,index) in routerList"
        :key="index"
        @click.native="sel(index)"
      >
        <img :src="cindex==index?item.src+'2.png':item.src+'1.png'" />
        <router-link :to="item.path"></router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selected: "",
      routerList: [
        {
          path: "/homepage",
          src: "https://res.bestcake.com/m-images/ww/foot/foot-menu-a-"
        },
        {
          path: "/news",
          src: "https://res.bestcake.com/m-images/ww/foot/foot-menu-b-"
        },
        {
          path: "/test",
          src: "https://res.bestcake.com/m-images/ww/foot/foot-menu-c-"
        },
        {
          path: "/my",
          src: "https://res.bestcake.com/m-images/ww/foot/foot-menu-d-"
        }
      ],
      cindex: 0
    };
  },
  methods: {
    sel(index) {
      this.cindex = index;
      this.$router.push(this.routerList[index].path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mt-tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
  max-width: 100%;
  background: #fff;
  height: r(48.9);
  z-index: 999;
  border-top: r(1) solid #eee;
}
.mt-tab-item{
  float: left;
  margin-top: r(3.75);
  margin-bottom: r(3.75);

}

img {
  width: r(35);
  height:r(39);
  margin: 0 auto;
}
</style>
