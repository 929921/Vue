<template>
  <div class="list-tabs">
    <div @click="sel(1)" :class="{'list-tabs-a':true,active:cnum=='1'?true:false}">自营</div>
    <div @click="sel(2)" :class="{'list-tabs-a':true,active:cnum=='2'?true:false}">贝式严选</div>
    <div class="list-tabs-c">&nbsp;</div>
    <goodsList v-if="tabData.length!=0" :tablist="tabData"></goodsList>
  

  <!-- <div class="list-tabs">
    <button @click="sel(1)" :class="{'list-tabs-b':true,active:cnum=='1'?true:false}">自营</button>
    <button @click="sel(2)" :class="{'list-tabs-b':true,active:cnum=='2'?true:false}">严选</button>
    <goodsList v-if="tabData.length!=0" :tablist="tabData"></goodsList>
  </div> -->
  </div>
</template>
<script>
import goodsList from "@/components/main/sort";
export default {
  data() {
    return {
      goodsList: [
        { title: "经典", mark: "KSK", list: [] },
        { title: "女神", mark: "NS", list: [] },
        { title: "伴手礼", mark: "JZ", list: [] },
        { title: "乳品", mark: "RP", list: [] }
      ],
      cnum: 1,
      tabData: []
    };
  },
  mounted() {
    this.pageInit();
  },
  components: {
    goodsList
  },
  methods: {
    pageInit() {
      this._getNsCakeCenter(res => {
        // res.map((item,index)=>{

        //item.ImgUrl=this.$global.setUrl(item);
        // });
        //consle.log(this.goodsList)
        this.goodsList.map(item => {
          res.map(it => {
            if (it.SupplyNo.indexOf(item.mark) != -1) {
              it.ImgUrl = this.$global.setUrl(it);
              item.list.push(it);
            }
          });
        });
        this.sel(1);
      });
    },

    sel(num) {
      this.cnum = num;
      if (num == 1) {
        this.tabData = this.goodsList.slice(0, 3);
      } else {
        this.tabData = this.goodsList.slice(3);
      }
      console.log(this.tabData);
    },
    _getNsCakeCenter(callback) {
      this.$apis.getNsCakeCenter().then(res => {
        console.log(res);
        callback(res.data.Tag.cakelist);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-tabs {
  position: relative;
  height: r(44);
  border-bottom: r(1) solid #d9d9d9;
}
  .active {
    color: #1db0bb;
  }
  .list-tabs-a {
    width: 50%;
    float: left;
    text-align: center;
    font-size: r(16);
    height: r(48);
    line-height: r(48);
}
 
.list-tabs-c{
  width:50%;
}
</style>
