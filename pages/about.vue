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
    <!--关于我们-->
    <p class="p">
      <span class="spn1"><img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/tubiao.png'"
                              alt="">关于我们</span>
      <span class="spn2">STORY OF DUODUO</span>
    </p>
    <div class="we">
      <p class="p1">朵朵学习：权威小学生绘画教育先行者，领导者</p>
      <p class="p2">
        朵朵学习自成立至今，始终秉承“诚信、认同、价值”理念，致力为小学生提供最专业权威的简笔画、手抄报专栏，最新的小学生简笔画、手抄报模板设计大全，包括但不限于英语、环保、数学、语文、安全等简笔画、手抄报的图片、内容、资料大全。</p>
    </div>
    <!--联系我们-->
    <p class="p">
      <span class="spn1"><img :src="'http://xinyuzhiwang.oss-cn-beijing.aliyuncs.com/index/tubiao.png'"
                              alt="">联系我们</span>
      <span class="spn2">Contact us</span>
    </p>
    <div class="relation">
      <p class="p3">商务合作（合作内容）</p>
      <p>联系人：<span class="spn">梁先生</span></p>
      <p>电话：<span class="spn">18601306133</span></p>
      <p>微信：<span class="spn">18601306133</span></p>
      <p>邮箱：<span class="spn">info@fastfastbird.com</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    watchQuery: true,
    data() {
      return {
        /*菜单栏*/
        menu: false,
      }
    },
  }
</script>

<style scoped>
  /*公共*/
  a {
    text-decoration: none;
    color: #333;
  }

  .wrapper {
    padding: 0 24px;
    width: 640px;
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

  .wrapper .p {
    height: 120px;
    background: #F7F7F7;
    text-align: center;
    padding-top: 25px;
  }

  .wrapper .p .spn1 {
    font-size: 28px;
    color: #85c9d8;
  }

  .wrapper .p .spn1 img {
    width: 35px;
    vertical-align: bottom;
  }

  .wrapper .p .spn2 {
    font-size: 20px;
  }

  .wrapper .p .spn1, .wrapper .p .spn2 {
    display: block;
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

  /*关于我们*/
  .wrapper .we {
    padding-top: 10px;
    color: #333333;
    padding-bottom: 20px;
  }

  .wrapper .we .p1 {
    font-size: 26px;
    font-weight: bold;
    text-indent: 35px
  }

  .wrapper .we .p2 {
    padding-top: 10px;
    font-size: 24px;
    text-indent: 35px;
    line-height: 36px;
  }

  .wrapper .relation p {
    color: #85c9d9;
    padding: 5px 20px;
    font-size: 25px;
    font-family: 'microsoft yahei', Verdana, Arial, Helvetica, sans-serif;
  }

  .wrapper .relation .p3 {
    color: #000;
    font-size: 26px;
  }

  .wrapper .relation .spn {
    color: #000;
  }
</style>
