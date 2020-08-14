<template>
  <div class="swiper swiperBox" v-swiper:swiper="swiperOption" ref="swiperBox" @mouseenter="stopSwiper"
       @mouseleave="startSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(data,index) in data" :key="index">
        <nuxt-link :to="{path:'particulars',query:{id:data.id}}">
          <img :src="data.picture">
          <div class="explain">
            <span>{{data.title}}</span>
            <span class="spn2">{{index+1}}/3</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Array,
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: true,
          loop: true,
          speed: 500,
        }
      }
    },
    swiper() {
      return this.$refs.swiperBox.swiper
    },
    methods: {
      stopSwiper() {
        this.swiper.autoplay.stop()
      },
      startSwiper() {
        this.swiper.autoplay.start()
      }
    }
  }
</script>
<style scoped>
  .swiper-slide img {
    width: 592px;
    /*height: 360px*/
    height: 281px;
  }

  .explain {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: rgba(132, 132, 132, 0.5);
    position: absolute;
    bottom: 6px;
    padding: 0 20px;
  }

  .explain span {
    font-size: 24px;
    color: #fff;
  }

  .spn2 {
    float: right;
  }
</style>
