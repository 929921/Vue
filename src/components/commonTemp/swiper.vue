<template>
 <div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
        <slot>
        </slot>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  mounted(){
    this.pageInit();
  },



  methods:{
    pageInit(){
        new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 2,
				paginationClickable: true,
        spaceBetween: 30,
        freeMode:true
			});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .swiper-container{
    /* 156 */
    height: r(190)
  }
</style>
