<template>
  <div class="wrapper">
    <!--logo-->
    <div class="ylw_header_box">
      <div class="ylw_header">
        <span class="yl_logo">
          <nuxt-link class="a" to="/">
            <img src="../static/img/logo.png" alt="">
          </nuxt-link>
        </span>
        <span class="yl_header_right" @click="menu = !menu">
          <img src="../static/img/menu.png" alt="">
        </span>
        <div class="searchBox">
          <p style="margin-left: -6px;">
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
    <!--数据-->
    <div class="teaching">
      <ul>
        <li class="li1" v-for="recommendArticles in recommendArticle">
          <span>
            <nuxt-link
              :to="{path:'particulars',query:{id:recommendArticles.id}}">{{recommendArticles.title}} </nuxt-link>
          </span>
          <hr style="height:1px;border:none;border-top:1px dashed #475c7b;"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    watchQuery: true,
    data() {
      return {
        recommendArticle: [],
        /*菜单栏*/
        menu: false,
      }
    },
    async asyncData({query}) {
      let data = await axios.post(`http://47.105.82.246:8888/article/get_article`, {type: query.type, count: 20});
      let article = [];
      for (let a of data.data.article_lists) {
        article.push(a)
      }
      return {
        recommendArticle: article,
      };

    },
  }
</script>

<style scoped>
  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  /*全局样式*/
  .wrapper {
    padding: 0 24px;
    width: 640px;
  }

  .teaching {
    width: 592px;
  }

  .teaching ul {
    margin-left: -30px;
    list-style-type: disc;
  }

  .teaching ul li a {
    color: #475c7b;
    text-decoration: none;
  }

  .teaching ul li a:active {
    color: red;
    text-decoration: underline;
  }

  .teaching ul li span {
    font-size: 23px;
    font-weight: bold;
    display: block;
    padding: 8px 0;
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
    top: 13px;
    left: 10px;
    display: block;
    width: 130px;
    height: 24px;
  }

  .wrapper .yl_header_right {
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
    padding-left: 0;
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
    list-style-type: none;
    float: left;
  }

  .wrapper .menu > ul > li:hover {
    background: #f0f0f0;
  }

  /*搜索框*/
  .wrapper .searchBox {
    width: 235px;
    margin: 0 auto;
  }

  .wrapper .searchBox p input {
    height: 60px;
    width: 350px;
    background: #f0f0f0;
    border: none;
    padding-left: 20px;
    font-size: 24px;
    border-radius: 50px;
    position: relative;
    top: 12px;
  }

  .wrapper .searchBox p .spa {
    width: 34px;
    display: inline-block;
    position: relative;
    top: -37px;
    left: 300px;
  }

</style>
