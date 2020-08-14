<template>
  <div class="wrapper">
    <!--logo-->
    <div class="ylw_header_box" id="ylw_header_box">
      <div class="ylw_header">
        <span class="yl_logo">
          <nuxt-link class="a" to="/">
            <img src="../static/img/logo.png" alt="">
          </nuxt-link>
        </span>
        <!--        <span class="yl_header_right" @click="menu = !menu">-->
        <span class="yl_header_right">
            <img src="../static/img/menu.png" alt="">
        </span>
        <div class="searchBox">
          <p>
            <input type="text" placeholder="请输入搜索关键词" value="">
            <span class="spa">
              <img src="../static/img/search.png" alt="">
            </span>
          </p>
        </div>
      </div>
      <!--菜单栏-->
      <div class="menu" v-show="menu">
        <ul>
          <li>
            <nuxt-link :to="{path:'polymerizatio',query:{type:'手抄报'}}">手抄报</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path:'polymerizatio',query:{type:'简笔画'}}">简笔画</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path:'blessingSelfHelp',query:{type:'祝福语'}}">祝福语</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{path:'blessingSelfHelp',query:{type:'励志心语'}}">励志语</nuxt-link>
          </li>
          <li>
            <nuxt-link to="questions">问答</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!--视频-->
    <div v-if="data1.video_info.video_url">
      <video class="video" controls :poster="data1.video_info.video_image">
        <source :src="data1.video_info.video_url" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
      <div>
        <h1>{{data1.title}}</h1>
        <p class="p1">
          <span class="spn">{{data1.public_time}}</span>
          <span class="spn play">{{data1.read_count}}次播放</span>
        </p>

        <div class="picture_information" v-if="data1.doctor_info">
          <div class="head_portrait">
            <img :src="data1.doctor_info.profile_photo"/>
          </div>
          <div class="details">
            <span class="details_span1">{{data1.doctor_info.name}}</span>
            <span class="details_span2">{{data1.doctor_info.type}}</span>
            <span class="details_span2 left">{{data1.doctor_info.hospital}}</span>
          </div>
        </div>

        <div class="div" v-html="data1.contents"></div>
      </div>
    </div>
    <!--文章-->
    <div v-else>
      <div class="img" v-if="data1.detail_picture">
        <img :src="data1.detail_picture" alt="">
      </div>
      <h1>{{data1.title}}</h1>
      <p class="p1">
        <span class="spn">{{data1.public_time}}</span>
        <span class="spn play">{{data1.read_count}}次阅读</span>
      </p>

      <div class="picture_information" v-if="data1.doctor_info">
        <div class="head_portrait">
          <img :src="data1.doctor_info.profile_photo"/>
        </div>
        <div class="details">
          <span class="details_span1">{{data1.doctor_info.name}}</span>
          <span class="details_span2">{{data1.doctor_info.type}}</span>
          <span class="details_span2 left">{{data1.doctor_info.hospital}}</span>
        </div>
      </div>

      <div class="div" ref="div" v-html="data1.contents"></div>

    </div>

    <!--
        <pageAggregation v-if=" data1.type=='手抄报' || data1.type=='简笔画'"
                         :recommendArticles="recommend_articles"></pageAggregation>

        <pageAggregations v-if=" data1.type=='祝福语' || data1.type=='励志心语' || data1.type=='问答'"
                          :recommendArticles="recommend_articles"></pageAggregations>
    -->

  </div>
</template>

<script>
  import axios from 'axios'
  import pageAggregation from '~/components/pageAggregation.vue'
  import pageAggregations from '~/components/pageAggregations.vue'

  export default {
    components: {pageAggregation, pageAggregations},
    watchQuery: true,
    data() {
      return {
        /*数据*/
        data1: [],
        /*头部信息*/
        desc: '',
        /*菜单栏*/
        menu: false,
        /*手抄报、简笔画列表聚合页*/
        recommend_articles: [],
      }
    },
    /*    watch: {
          $route: {
            handler: function(){
              if(this.$route.query.id){
                console.log(this.$route)
              }
            },
            // 深度观察监听
            deep: true
          }
        },*/
    async asyncData({query}) {
      let data = await axios.post(`http://47.105.82.246:8888/article/detail`, {"id": query.id});
/*            console.log(JSON.stringify(data))*/
      let k = [];
      k = data.data.data;
      for (let i = 0; k.article_info.length > i; i++) {
        let desc = k.article_info[i].desc;
        if (desc != null) {
          desc = k.article_info[i].desc.replace(/\s*/g, "");
          let b = [];
          if (desc != null) {
            let a;
            a = desc.split('＃＃');
            a = desc.split('##');
            for (let l = 0; a.length > l; l++) {
              b.push(a[l]);
            }
          }
          k.article_info[i].desc = b;
        }
      }
      return {
        /*手抄报、简笔画列表聚合页*/
        recommend_articles: data.data.recommend_articles,
        /*数据*/
        data1: k
      };
    },
    head() {
      return {
        title: this.data1.title,
        meta: [
          {vmid: 'description', name: 'description', content: this.data1.article_info.desc},
          {vmid: 'description', name: 'keyword', content: this.data1.key_word},
        ]
      }
    },
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #333;
  }

  img {
    width: 100%;
  }

  ul {
    padding-left: 0;
  }

  ul li {
    list-style-type: none;
    float: left;
  }

  .wrapper {
    padding: 0 24px;
    width: 640px;
    line-height: 40px;
  }

  .wrapper .img {
    padding-bottom: 20px;
  }
  .wrapper .img img{
    height: 281px;
  }
  .wrapper h1 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 35px;
  }

  .wrapper .p1 {
    font-size: 25px;
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .wrapper .p1 .spn {
    color: #7f7f7f;
  }

  .wrapper .p1 .play {
    padding-left: 40px;
  }


  .wrapper .picture_information {
    padding-bottom: 20px;
  }

  .wrapper .picture_information div {
    display: inline-block;
    vertical-align: top;
  }

  .wrapper .picture_information .head_portrait {
    width: 75px;
    height: 75px;
    margin-right: 12px;
  }

  .wrapper .picture_information .head_portrait img {
    border-radius: 50px;
    width: 100%;
    height: 100%;
    vertical-align: center;
  }

  .wrapper .picture_information .details {
    height: 70px;
  }

  .wrapper .picture_information .details .details_span1 {
    display: block;
    font-weight: bold;
    font-size: 28px;
    /*    margin-bottom: 7px;*/
  }

  .wrapper .picture_information .details .details_span2 {
    font-size: 23px;
    color: #7f7f7f;
  }

  .wrapper .picture_information .details .left {
    margin-left: 20px;
  }


  .wrapper .p1 img {
    height: 100%;
    vertical-align: middle;
  }

  .wrapper .p2 {
    width: 592px;
    padding: 10px 0;
  }

  .wrapper .p2 img {
    width: 100%;
    height: 50%;
  }

  .wrapper .p3 {
    font-size: 27px;
    line-height: 45px;
  }

  .span {
    display: inline-block;
  }

  /*logo*/
  .ylw_header_box {
    padding-bottom: 10px;
  }

  .wrapper .ylw_header {
    position: relative;
    width: 100%;
    height: 88px;
  }

  .wrapper .ylw_header .yl_logo {
    position: absolute;
    top: 12px;
    display: block;
    width: 180px;
  }

  .wrapper .ylw_header .yl_header_right {
    position: absolute;
    top: 25px;
    right: 1px;
    width: 40px;
    height: 40px;
  }

  /*菜单栏*/
  .wrapper .menu {
    position: absolute;
    top: 80px;
    right: 10px;
    width: 150px;
    background: #fff;
    z-index: 2;
    font-size: 28px;
    color: #000;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    border-radius: 4px;
    padding: 10px 0;
    animation: myfirst 1s;
  }

  @keyframes myfirst {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .wrapper .menu > ul {
    text-align: center;
    animation: myfirsts 1s;
  }

  @keyframes myfirsts {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .wrapper .menu > ul > li {
    display: inline;
    width: 100%;
    height: 100%;
    padding: 10px 10px;
  }

  .wrapper .menu > ul > li:hover {
    background: #f0f0f0;
  }

  /*搜索框*/
  .wrapper .searchBox {
    width: 235px;
    margin-left: 207px;
    padding-top: 5px;
  }

  .wrapper .searchBox p input {
    height: 60px;
    width: 320px;
    background: #f5f4f4;
    padding-left: 20px;
    font-size: 24px;
    border-radius: 50px;
    position: relative;
    top: 12px;
    border: 2px solid #e9e9e9;

    outline-style: none;
    outline-width: 0px;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
  }

  .wrapper .searchBox p .spa {
    width: 25px;
    display: inline-block;
    position: relative;
    top: -32px;
    left: 270px;
  }

  /*视频*/
  .video {
    width: 100%;
    height: 380px;
    padding-bottom: 20px;
  }
</style>
<style>
  .div img {
    width: 100% !important;
    height: 100% !important;
  }
</style>
