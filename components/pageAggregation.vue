<template>
  <div class="teaching">
    <ul>
      <li class="li1" v-for="recommendArticles in this.recommendArticles">
        <nuxt-link :to="{path:'particulars',query:{id:recommendArticles.id}}">
          <span v-if="recommendArticles.image == null"><img
            :src="'http://47.105.82.246:8888/storage/20180916091219345.jpeg'" alt=""></span>
          <span v-else><img :src="recommendArticles.image" alt=""></span>
          <span>{{recommendArticles.title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      recommendArticles: {
        type: Array,
      }
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style scoped>
  /*全局样式*/
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

  .teaching {
    width: 592px;
    height: 300px;
  }

  .teaching ul li {
    width: 286px;
    float: left;
    text-align: center;
  }

  .teaching ul .li1 {
    padding: 0 5px;
  }

  .teaching ul li img {
    width: 280px;
    height: 300px;
    /*    border: 1px solid #d7d7d7;*/
  }

  .teaching ul li span {
    display: inline-block;
    font-weight: bold;
    font-size: 28px;
    color: #000;
    padding: 10px 10px 30px;
    width: 286px;
    line-height: 25px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }


</style>
