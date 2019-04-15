<template>
  <div class="width">
    <div class="wrapper">
      <!--logo-->
      <div class="ylw_header_box">
        <div class="ylw_header">
          <span class="yl_logo">
            <nuxt-link class="a" to="/">
              <img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/index.png'" alt="">
            </nuxt-link>
          </span>
          <span class="yl_header_right" @click="menu = !menu">
            <img src="../static/img/menu.png" alt="">
          </span>
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
      <!--轮播图-->
      <div class="carousel">
        <carousel :data="Ing"></carousel>
      </div>
      <!--搜索框-->
      <div class="search">
        <input v-model="input" type="text" placeholder="输入想要搜索的帖子内容" value="">
      </div>
      <!--导航-->
      <div class="navigation">
        <ul class="ul">
          <li>
            <a href="#choiceness">
              <img src="../static/img/article.png" alt="">
              <span>手抄报</span>
            </a>
          </li>
          <li>
            <a href="#stick_figure">
              <img src="../static/img/brush.png" alt="">
              <span>简笔画</span>
            </a>
          </li>
          <li>
            <a href="#benediction">
              <img src="../static/img/envelope.png" alt="">
              <span>祝福语</span>
            </a>
          </li>
          <li>
            <a href="#motivational">
              <img src="../static/img/article.png" alt="">
              <span>励志语</span>
            </a>
          </li>
        </ul>
      </div>
      <!--精选手抄报-->
      <p class="p">
        <span class="spn1"><img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/tubiao.png'"
                                alt="">精选手抄报</span>
        <span class="spn2">Hand copy</span>
      </p>
      <div id="choiceness">
        <div class="ylHealth">
          <strong class="ylTopIcon">头条</strong>
          <nuxt-link class="a" v-for="data in data1" :to="{path:'particulars',query:{id:data.id}}">
            <h3 v-if="data.video_info.video_url">
              <img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipinicon.png'" alt="">
              <span class="alignment">
                {{data.title}}
              </span>
            </h3>
            <h3 v-else>{{data.title}}</h3>
            <div class="title1">
              <div class="img" v-if="data.video_info.video_url">
                <img :src="data.video_info.video_image" alt="">
                <img class="icon" src="../static/img/play.png" alt="">
              </div>
              <div class="img" v-else>
                <img v-if="data.image" :src="data.image" alt="">
                <img v-else :src="'http://47.105.82.246:8888/storage/20180916091219345.jpeg'" alt="">
              </div>
              <div class="content">
                <p class="p1">{{data.desc}}</p>
                <p class="p2">
                  <span v-if="data.video_info.video_url" class="spn spn1"><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipin1button.png'" alt=""></span>
                  <span class="spn spn1" v-else><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/article.png'" alt=""></span>
                  <span class="spn spn2">{{data.read_count}}w人浏览</span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!--简笔画教学-->
      <p class="p">
        <span class="spn1"><img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/tubiao.png'"
                                alt="">简笔画教学</span>
        <span class="spn2">Brief strokes</span>
      </p>
      <div id="stick_figure">
        <div class="ylHealth">
          <strong class="ylTopIcon">头条</strong>
          <nuxt-link class="a" v-for="data in data2" :to="{path:'particulars',query:{id:data.id}}">
            <h3 v-if="data.video_info.video_url">
              <img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipinicon.png'" alt="">
              <span class="alignment">
                {{data.title}}
              </span>
            </h3>
            <h3 v-else>{{data.title}}</h3>
            <div class="title1">
              <div class="img" v-if="data.video_info.video_url">
                <img :src="data.video_info.video_image" alt="">
                <img class="icon" src="../static/img/play.png" alt="">
              </div>
              <div class="img" v-else>
                <img v-if="data.image" :src="data.image" alt="">
                <img v-else :src="'http://47.105.82.246:8888/storage/20180916091219345.jpeg'" alt="">
              </div>
              <div class="content">
                <p class="p1">{{data.desc}}</p>
                <p class="p2">
                  <span v-if="data.video_info.video_url" class="spn spn1"><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipin1button.png'" alt=""></span>
                  <span class="spn spn1" v-else><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/article.png'" alt=""></span>
                  <span class="spn spn2">{{data.read_count}}w人浏览</span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!--祝福语大全-->
      <p class="p">
        <span class="spn1"><img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/tubiao.png'"
                                alt="">祝福语大全</span>
        <span class="spn2">Blessing words</span>
      </p>
      <div id="benediction">
        <div class="ylHealth">
          <strong class="ylTopIcon">头条</strong>
          <nuxt-link class="a" to="" v-for="data in data3" :to="{path:'particulars',query:{id:data.id}}">
            <h3 v-if="data.video_info.video_url">
              <img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipinicon.png'" alt="">
              <span class="alignment">
                {{data.title}}
              </span>
            </h3>
            <h3 v-else>{{data.title}}</h3>
            <div class="title1">
              <div class="img" v-if="data.video_info.video_url">
                <img :src="data.video_info.video_image" alt="">
                <img class="icon" src="../static/img/play.png" alt="">
              </div>
              <div class="img" v-else>
                <img v-if="data.image" :src="data.image" alt="">
                <img v-else :src="'http://47.105.82.246:8888/storage/20180916091219345.jpeg'" alt="">
              </div>
              <div class="content">
                <p class="p1">{{data.desc.replace("##", "").replace("＃＃","").replace("##","")}}</p>
                <p class="p2">
                  <span v-if="data.video_info.video_url" class="spn spn1"><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipin1button.png'" alt=""></span>
                  <span class="spn spn1" v-else><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/article.png'" alt=""></span>
                  <span class="spn spn2">{{data.read_count}}w人浏览</span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!--励志心语-->
      <p class="p">
        <span class="spn1"><img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/tubiao.png'"
                                alt="">励志心语</span>
        <span class="spn2">Inspirational words</span>
      </p>
      <div id="motivational">
        <div class="ylHealth">
          <strong class="ylTopIcon">头条</strong>
          <nuxt-link class="a" to="" v-for="data in data4" :to="{path:'particulars',query:{id:data.id}}">
            <h3 v-if="data.video_info.video_url">
              <img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipinicon.png'" alt="">
              <span class="alignment">
                {{data.title}}
              </span>
            </h3>
            <h3 v-else>{{data.title}}</h3>
            <div class="title1">
              <div class="img" v-if="data.video_info.video_url">
                <img :src="data.video_info.video_image" alt="">
                <img class="icon" src="../static/img/play.png" alt="">
              </div>
              <div class="img" v-else>
                <img v-if="data.image" :src="data.image" alt="">
                <img v-else :src="'http://47.105.82.246:8888/storage/20180916091219345.jpeg'" alt="">
              </div>
              <div class="content">
                <p class="p1">{{data.desc.replace("##", "").replace("＃＃","").replace("##","")}}</p>
                <p class="p2">
                  <span v-if="data.video_info.video_url" class="spn spn1"><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/shipin1button.png'" alt=""></span>
                  <span class="spn spn1" v-else><img
                    :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/article.png'" alt=""></span>
                  <span class="spn spn2">{{data.read_count}}w人浏览</span>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!--版权声明-->
    <div class="copyright">
      <p>
        <span>Copyright朵朵学习网 版权所有 <nuxt-link class="a" to="/about">关于我们</nuxt-link></span>
        <span>北京快鸟先飞科技有限公司</span>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import carousel from '~/components/carousel.vue'

  export default {
    components: {carousel},
    watchQuery: true,
    data() {
      return {
        /*菜单栏*/
        menu: false,
        /*轮播图*/
        Ing: [],
        /*搜索框*/
        input: '',
        /*精选手抄报*/
        data1: [],
        /*简笔画教学*/
        data2: [],
        /*祝福语大全*/
        data3: [],
        /*励志心语*/
        data4: [],
      }
    },
    async asyncData() {
      let {data} = await axios.post(`http://47.105.82.246:8888/article/list`);
      /*精选手抄报*/
      let handmouldNewspaper = [];
      for (let i = 0; data.article_lists.length > i; i++) {
        if (data.article_lists[i].type == "手抄报") {
          handmouldNewspaper.push(data.article_lists[i])
        }
      }
      /*简笔画教学*/
      let stickFigure = [];
      for (let i = 0; data.article_lists.length > i; i++) {
        if (data.article_lists[i].type == "简笔画") {
          stickFigure.push(data.article_lists[i])
        }
      }
      /*祝福语大全*/
      let benediction = [];
      for (let i = 0; data.article_lists.length > i; i++) {
        if (data.article_lists[i].type == "祝福语") {
          benediction.push(data.article_lists[i])
        }
      }
      /*励志心语*/
      let motivational = [];
      for (let i = 0; data.article_lists.length > i; i++) {
        if (data.article_lists[i].type == "励志心语") {
          motivational.push(data.article_lists[i])
        }
      }
      return {
        /*轮播图*/
        Ing: data.header_article,
        /*精选手抄报*/
        data1: handmouldNewspaper,
        /*简笔画教学*/
        data2: stickFigure,
        /*祝福语大全*/
        data3: benediction,
        /*励志心语*/
        data4: motivational,
      }
    },
    head() {
      return {
        title: "小学生手抄报大全,简笔画大全_朵朵学习网",
        meta: [
          {name: 'description', content: '小学生手抄报专栏，为您提供最新的小学生手抄报模板设计大全,包括英语、环保、数学、语文、安全等手抄报图片、内容、资料大全'},
          {name: 'keyword', content: '手抄报,简笔画,祝福语大全'},
        ],
      }
    },
    methods: {},
  }
</script>

<style scoped>
  .width {
    width: 640px;
  }

  /*全局样式*/
  .wrapper {
    padding: 0 24px;
    width: 640px;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  ul {
    padding-left: 0;
  }

  ul li {
    list-style-type: none;
    float: left;
  }

  .wrapper .p {
    height: 120px;
    background: #F7F7F7;
    text-align: center;
    padding-top: 25px;
  }

  .wrapper .p .spn1 {
    font-size: 28px;
    color: #707475;
  }

  .wrapper .p .spn1 img {
    width: 35px;
    vertical-align: bottom;
  }

  .wrapper .p .spn2 {
    font-size: 20px;
    color: #707475;
  }

  .wrapper .p .spn1, .wrapper .p .spn2 {
    display: block;
  }

  img {
    width: 100%;
  }

  .icon {
    width: 40px !important;
    height: 40px !important;
    position: absolute !important;
    top: 40% !important;
    left: 40% !important;
  }

  .alignment {
    display: inline-block;
    vertical-align: middle;
  }

  /*logo*/
  .wrapper .ylw_header {
    position: relative;
    width: 100%;
    height: 88px;
  }

  .wrapper .ylw_header .yl_logo {
    position: absolute;
    top: 13px;
    left: 10px;
    display: block;
    width: 130px;
    height: 24px;
  }

  .wrapper .ylw_header .yl_header_right {
    position: absolute;
    top: 25px;
    right: 10px;
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
  .wrapper .search {
    height: 80px;
    width: 100%;
    background: #f0f0f0;
  }

  .wrapper .search input {
    height: 60px;
    width: 97%;
    background-color: #fff;
    background-image: url(../static/img/search.png);
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 120px center;
    border: none;
    padding-left: 20px;
    margin: 10px;
    font-size: 24px;
  }

  .wrapper .search input::-webkit-input-placeholder {
    font-size: 24px;
    text-align: center;
    color: #999999;
  }

  /*导航*/
  .wrapper .navigation {
    width: 100%;
  }

  .wrapper .navigation .ul {
    width: 100%;
    height: 160px;
    padding: 24px 0;
  }

  .wrapper .navigation .ul li {
    list-style-type: none;
    float: left;
    width: 25%;
    text-align: center;
    font-weight: bold;
  }

  .wrapper .navigation .ul li img {
    width: 62px;
    height: 66px;
  }

  .wrapper .navigation .ul li span {
    display: block;
    padding: 10px;
    color: #000;
    font-size: 22px;
  }

  /*精选手抄报*/
  .wrapper .ylHealth {
    position: relative;
    display: block;
    padding: 20px 0 0px;
  }

  .wrapper .ylHealth .a {
    display: block;
    padding: 25px 0px;
    border-bottom: 1px dashed #ddd;
  }

  .wrapper .ylTopIcon {
    position: absolute;
    top: 0;
    right: 0;
    width: 58px;
    height: 54px;
    line-height: 54px;
    background-image: url(http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/toutiaoicon.png);
    background-size: 4px 2px;
    background-repeat: repeat-x;
    background-position: left bottom;
    background-color: #f33915;
    font-size: 20px;
    color: #fff;
    text-align: center;
    font-weight: 400;
  }

  .wrapper .ylHealth h3 {
    margin-right: 70px;
    min-height: 35px;
    max-height: 55px;
    font-size: 26px;
    font-weight: 400;
    color: #707475;
    line-height: 28px;
    margin-bottom: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'microsoft yahei', Verdana, Arial, Helvetica, sans-serif;
  }

  .wrapper .ylHealth h3 img {
    width: 40px;
    vertical-align: middle;
  }

  .wrapper .ylHealth .title1 {

  }

  .wrapper .ylHealth .title1 .img {
    width: 240px;
    height: 160px;
    display: inline-block;
    position: relative;
  }

  .wrapper .ylHealth .title1 .video {
    width: 160px;
    height: 160px;
    display: inline-block;
  }

  .wrapper .ylHealth .title1 .img img {
    width: 100%;
    height: 100%;
  }

  .wrapper .ylHealth .title1 .video video {
    width: 100%;
    height: 100%;
  }

  .wrapper .ylHealth .title1 .content {
    width: 58%;
    display: inline-block;
    vertical-align: top;
    padding: 5px 0 10px 20px;
  }

  .wrapper .ylHealth .title1 .content .p1 {
    font-size: 20px;
    color: #ccc;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .wrapper .ylHealth .title1 .content .p2 .spn {
    display: inline-block;
    vertical-align: middle;
    padding-right: 10px;
  }

  .wrapper .ylHealth .title1 .content .p2 .spn1 img {
    width: 50px;
    vertical-align: middle;
  }

  /*版权声明*/
  .copyright {
    height: 100px;
    background: #ebebeb;
  }

  .copyright p {
    text-align: center;
    padding-top: 20px;
  }

  .copyright p span {
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #999;
    padding-bottom: 8px;
  }

  .copyright p span .a {
    text-decoration: underline;
    color: #85c9d8;
  }
</style>
