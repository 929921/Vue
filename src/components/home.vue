<template>
  <div>
    <!-- <lay_head></lay_head> -->
    <keep-alive>
         <router-view v-if="$route.meta.keepAlive"/>
     </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"/>
     <lay_head></lay_head>
      <!-- keepAlive true 禁止重复加载  false不禁止-->
     <!-- <div class="box" v-if="$route.meta.name=='ok'?true:false"></div> -->
  </div>
</template>

<script>
import lay_head from "@/components/layout/head"
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  mounted(){
      this.$eventHub.$on("test",(res)=>{
        alert(res);
      });
  },
  components:{
    lay_head
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
